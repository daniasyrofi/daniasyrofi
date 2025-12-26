<script setup lang="ts">
import { computed } from 'vue';
import Button from './Button.vue';

export interface PaginationProps {
  total?: number;
  perPage?: number;
  modelValue?: number;
  siblingCount?: number;
  class?: string;
}

const props = withDefaults(defineProps<PaginationProps>(), {
  total: 0,
  perPage: 10,
  modelValue: 1,
  siblingCount: 1,
});

const emit = defineEmits<{
  'update:modelValue': [value: number];
}>();

const totalPages = computed(() => Math.ceil(props.total / props.perPage));

const range = (start: number, end: number) => {
  const length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

const paginationRange = computed(() => {
  const totalPageCount = totalPages.value;
  const siblingCount = props.siblingCount;
  const currentPage = props.modelValue;

  // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*dots
  const totalPageNumbers = siblingCount + 5;

  if (totalPageNumbers >= totalPageCount) {
    return range(1, totalPageCount);
  }

  const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
  const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);

  const shouldShowLeftDots = leftSiblingIndex > 2;
  const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

  const firstPageIndex = 1;
  const lastPageIndex = totalPageCount;

  if (!shouldShowLeftDots && shouldShowRightDots) {
    let leftItemCount = 3 + 2 * siblingCount;
    let leftRange = range(1, leftItemCount);
    return [...leftRange, '...', totalPageCount];
  }

  if (shouldShowLeftDots && !shouldShowRightDots) {
    let rightItemCount = 3 + 2 * siblingCount;
    let rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount);
    return [firstPageIndex, '...', ...rightRange];
  }

  if (shouldShowLeftDots && shouldShowRightDots) {
    let middleRange = range(leftSiblingIndex, rightSiblingIndex);
    return [firstPageIndex, '...', ...middleRange, '...', lastPageIndex];
  }
  
  return [];
});

const onPageChange = (page: number | string) => {
  if (typeof page === 'number') {
    emit('update:modelValue', page);
  }
};

const onNext = () => {
  if (props.modelValue < totalPages.value) {
    emit('update:modelValue', props.modelValue + 1);
  }
};

const onPrevious = () => {
  if (props.modelValue > 1) {
    emit('update:modelValue', props.modelValue - 1);
  }
};
</script>

<template>
  <nav
    role="navigation"
    aria-label="pagination"
    :class="['flex w-full justify-center', props.class]"
  >
    <ul class="flex flex-row items-center gap-1">
      <li>
        <Button
          variant="ghost"
          size="sm"
          :disabled="modelValue === 1"
          @click="onPrevious"
          class="gap-1 pl-2.5"
        >
          <i class="ri-arrow-left-s-line" />
          <span>Previous</span>
        </Button>
      </li>
      
      <li v-for="(page, index) in paginationRange" :key="index">
        <template v-if="page === '...'">
          <span class="flex h-9 w-9 items-center justify-center text-neutral-500">
            <i class="ri-more-line" />
          </span>
        </template>
        <template v-else>
          <Button
            variant="ghost"
            :class="[
              'h-9 w-9 p-0',
              modelValue === page ? 'bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700' : ''
            ]"
            size="sm"
            @click="onPageChange(page)"
          >
            {{ page }}
          </Button>
        </template>
      </li>

      <li>
        <Button
          variant="ghost"
          size="sm"
          :disabled="modelValue === totalPages"
          @click="onNext"
          class="gap-1 pr-2.5"
        >
          <span>Next</span>
          <i class="ri-arrow-right-s-line" />
        </Button>
      </li>
    </ul>
  </nav>
</template>

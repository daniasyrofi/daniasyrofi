<script setup lang="ts">
import { computed } from 'vue';

export interface DefinitionListItem {
  term: string;
  details: string | number;
}

export interface DefinitionListProps {
  items: DefinitionListItem[];
  horizontal?: boolean;
  striped?: boolean;
  class?: string;
}

const props = withDefaults(defineProps<DefinitionListProps>(), {
  horizontal: false,
  striped: false,
});

const containerClasses = computed(() => {
  return [
    'space-y-1',
    props.class,
  ].join(' ');
});

const itemClasses = computed(() => {
  return [
    'p-3 rounded-lg transition-colors',
    props.horizontal ? 'flex flex-col md:flex-row md:items-center' : 'flex flex-col',
    props.striped ? 'odd:bg-neutral-50 dark:odd:bg-neutral-900/50' : '',
  ].join(' ');
});
</script>

<template>
  <dl :class="containerClasses">
    <div
      v-for="(item, index) in items"
      :key="index"
      :class="itemClasses"
    >
      <dt 
        class="text-sm font-medium text-neutral-500 dark:text-neutral-400"
        :class="[horizontal ? 'md:w-1/3 flex-shrink-0' : 'mb-1']"
      >
        {{ item.term }}
      </dt>
      <dd class="text-sm font-bold text-neutral-900 dark:text-neutral-100">
        {{ item.details }}
      </dd>
    </div>
  </dl>
</template>

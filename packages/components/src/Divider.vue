<script setup lang="ts">
import { computed } from 'vue';

export interface DividerProps {
  label?: string;
  labelPosition?: 'left' | 'center' | 'right';
  orientation?: 'horizontal' | 'vertical';
  class?: string;
}

const props = withDefaults(defineProps<DividerProps>(), {
  orientation: 'horizontal',
  labelPosition: 'center',
});

const dividerClasses = computed(() => {
  return [
    props.orientation === 'vertical' ? 'h-full w-px mx-4' : 'w-full h-px my-4',
    'bg-neutral-200 dark:bg-neutral-800',
    props.class,
  ];
});
</script>

<template>
  <div
    v-if="orientation === 'horizontal' && label"
    class="flex items-center gap-4 w-full my-4"
    :class="props.class"
    role="separator"
  >
    <div v-if="labelPosition !== 'left'" class="flex-1 h-px bg-neutral-200 dark:bg-neutral-800" />
    <span class="text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider whitespace-nowrap">
      {{ label }}
    </span>
    <div v-if="labelPosition !== 'right'" class="flex-1 h-px bg-neutral-200 dark:bg-neutral-800" />
  </div>
  <div
    v-else
    :class="dividerClasses"
    role="separator"
  />
</template>

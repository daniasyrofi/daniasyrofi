<script setup lang="ts">
import { computed } from 'vue';

export interface DividerProps {
  label?: string;
  orientation?: 'horizontal' | 'vertical';
}

const props = withDefaults(defineProps<DividerProps>(), {
  orientation: 'horizontal',
});

const dividerClasses = computed(() => {
  if (props.orientation === 'vertical') {
    return 'h-full w-px bg-neutral-200 dark:bg-neutral-800';
  }
  return 'w-full h-px bg-neutral-200 dark:bg-neutral-800';
});
</script>

<template>
  <div
    v-if="orientation === 'horizontal' && !label"
    :class="dividerClasses"
    role="separator"
  />
  <div
    v-else-if="orientation === 'horizontal' && label"
    class="flex items-center gap-4 w-full"
    role="separator"
  >
    <div class="flex-1 h-px bg-neutral-200 dark:bg-neutral-800" />
    <span class="text-sm text-neutral-500 dark:text-neutral-400 whitespace-nowrap">
      {{ label }}
    </span>
    <div class="flex-1 h-px bg-neutral-200 dark:bg-neutral-800" />
  </div>
  <div
    v-else
    :class="dividerClasses"
    role="separator"
  />
</template>

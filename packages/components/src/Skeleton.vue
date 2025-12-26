<script setup lang="ts">
import { computed } from 'vue';

export interface SkeletonProps {
  width?: string;
  height?: string;
  rounded?: 'sm' | 'md' | 'lg' | 'full';
}

const props = withDefaults(defineProps<SkeletonProps>(), {
  width: '100%',
  height: '16px',
  rounded: 'md',
});

const classes = computed(() => {
  const rounded = {
    sm: 'rounded-md',
    md: 'rounded-lg',
    lg: 'rounded-xl',
    full: 'rounded-full',
  };

  return [
    'animate-pulse bg-neutral-200 dark:bg-neutral-800',
    rounded[props.rounded],
  ].join(' ');
});
</script>

<template>
  <div :class="classes" :style="{ width, height }" aria-hidden="true" />
</template>

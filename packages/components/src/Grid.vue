<script setup lang="ts">
import { computed } from 'vue';

export interface GridProps {
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  gap?: 'sm' | 'md' | 'lg';
}

const props = withDefaults(defineProps<GridProps>(), {
  cols: 3,
  gap: 'md',
});

const classes = computed(() => {
  const cols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
    5: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-5',
    6: 'grid-cols-1 sm:grid-cols-3 lg:grid-cols-6',
    12: 'grid-cols-12',
  };

  const gap = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
  };

  return ['grid', cols[props.cols], gap[props.gap]].join(' ');
});
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>

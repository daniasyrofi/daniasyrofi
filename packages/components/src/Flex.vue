<script setup lang="ts">
import { computed } from 'vue';

export interface FlexProps {
  direction?: 'row' | 'col';
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around';
  gap?: 'none' | 'sm' | 'md' | 'lg';
  wrap?: boolean;
}

const props = withDefaults(defineProps<FlexProps>(), {
  direction: 'row',
  align: 'center',
  justify: 'start',
  gap: 'md',
  wrap: false,
});

const classes = computed(() => {
  const direction = {
    row: 'flex-row',
    col: 'flex-col',
  };

  const align = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch',
  };

  const justify = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
    around: 'justify-around',
  };

  const gap = {
    none: 'gap-0',
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
  };

  return [
    'flex',
    direction[props.direction],
    align[props.align],
    justify[props.justify],
    gap[props.gap],
    props.wrap ? 'flex-wrap' : 'flex-nowrap',
  ].join(' ');
});
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>

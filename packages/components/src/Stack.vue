<script setup lang="ts">
import { computed } from 'vue';

export interface StackProps {
  direction?: 'row' | 'col';
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around';
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  wrap?: boolean;
  as?: string;
  class?: string;
}

const props = withDefaults(defineProps<StackProps>(), {
  direction: 'col',
  align: 'stretch',
  justify: 'start',
  gap: 'md',
  wrap: false,
  as: 'div',
});

const classes = computed(() => {
  const directionClasses = {
    row: 'flex-row',
    col: 'flex-col',
  };

  const alignClasses = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch',
  };

  const justifyClasses = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
    around: 'justify-around',
  };

  const gapClasses = {
    none: 'gap-0',
    xs: 'gap-1',
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
    xl: 'gap-8',
  };

  return [
    'flex',
    directionClasses[props.direction],
    alignClasses[props.align],
    justifyClasses[props.justify],
    gapClasses[props.gap],
    props.wrap ? 'flex-wrap' : 'flex-nowrap',
    props.class,
  ];
});
</script>

<template>
  <component :is="as" :class="classes">
    <slot />
  </component>
</template>

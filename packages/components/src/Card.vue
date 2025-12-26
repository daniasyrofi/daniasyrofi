<script setup lang="ts">
import { computed } from 'vue';

export interface CardProps {
  padding?: 'none' | 'sm' | 'md' | 'lg';
  variant?: 'default' | 'bordered' | 'elevated';
}

const props = withDefaults(defineProps<CardProps>(), {
  padding: 'md',
  variant: 'default',
});

const cardClasses = computed(() => {
  const paddings = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const variants = {
    default: 'bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800',
    bordered: 'bg-white dark:bg-neutral-900 border-2 border-neutral-300 dark:border-neutral-700',
    elevated: 'bg-white dark:bg-neutral-900 shadow-lg dark:shadow-2xl',
  };

  return [
    'rounded-lg',
    paddings[props.padding],
    variants[props.variant],
  ].join(' ');
});
</script>

<template>
  <div :class="cardClasses">
    <slot />
  </div>
</template>

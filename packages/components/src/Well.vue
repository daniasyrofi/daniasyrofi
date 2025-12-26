<script setup lang="ts">
import { computed } from 'vue';

export interface WellProps {
  variant?: 'default' | 'muted' | 'brand';
  size?: 'sm' | 'md' | 'lg';
  class?: string;
}

const props = withDefaults(defineProps<WellProps>(), {
  variant: 'default',
  size: 'md',
});

const classes = computed(() => {
  const variants = {
    default: 'bg-neutral-50 dark:bg-neutral-900/50 border-neutral-200 dark:border-neutral-800',
    muted: 'bg-neutral-100 dark:bg-neutral-800 border-transparent',
    brand: 'bg-brand-primary/5 dark:bg-brand-primary/10 border-brand-primary/20 dark:border-brand-primary/30',
  };

  const sizes = {
    sm: 'p-3 text-sm rounded-lg',
    md: 'p-5 text-base rounded-xl',
    lg: 'p-8 text-lg rounded-2xl',
  };

  return [
    'border transition-all duration-200',
    variants[props.variant],
    sizes[props.size],
    props.class,
  ].join(' ');
});
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>

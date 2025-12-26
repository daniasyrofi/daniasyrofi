<script setup lang="ts">
import { computed } from 'vue';

export interface CardProps {
  padding?: 'none' | 'sm' | 'md' | 'lg';
  variant?: 'default' | 'elevated' | 'interactive' | 'glass';
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
    default: 'bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 shadow-xs',
    elevated: 'bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 shadow-lg',
    interactive: 'bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200',
    glass: 'bg-[rgba(255,255,255,0.75)] dark:bg-[rgba(3,7,18,0.6)] border border-[rgba(255,255,255,0.35)] dark:border-neutral-800 shadow-lg backdrop-blur',
  };

  return [
    'rounded-xl',
    'transition-all duration-200',
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

<script setup lang="ts">
import { computed } from 'vue';

export interface BadgeProps {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'outline' | 'destructive' | 'ghost';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  class?: string;
}

const props = withDefaults(defineProps<BadgeProps>(), {
  variant: 'default',
  size: 'md',
});

const badgeClasses = computed(() => {
  const variants = {
    default: 'bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-700',
    primary: 'bg-brand-primary-light text-brand-primary border border-brand-primary',
    secondary: 'bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 border border-transparent',
    success: 'bg-semantic-success-light text-semantic-success-dark border border-semantic-success',
    warning: 'bg-semantic-warning-light text-semantic-warning-dark border border-semantic-warning',
    error: 'bg-semantic-error-light text-semantic-error-dark border border-semantic-error',
    info: 'bg-semantic-info-light text-semantic-info-dark border border-semantic-info',
    outline: 'bg-transparent text-neutral-700 dark:text-neutral-300 border border-neutral-300 dark:border-neutral-600',
    destructive: 'bg-destructive text-white border border-transparent',
    ghost: 'bg-transparent text-neutral-700 dark:text-neutral-300 border border-transparent',
  };

  const sizes = {
    xs: 'px-2 py-0.5 text-[10px]',
    sm: 'px-2.5 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-3.5 py-2 text-sm',
  };

  return [
    'inline-flex items-center rounded-full font-medium leading-none',
    'select-none whitespace-nowrap',
    variants[props.variant],
    sizes[props.size],
    props.class,
  ].join(' ');
});
</script>

<template>
  <span :class="badgeClasses">
    <slot />
  </span>
</template>

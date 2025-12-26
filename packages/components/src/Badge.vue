<script setup lang="ts">
import { computed } from 'vue';

export interface BadgeProps {
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md';
}

const props = withDefaults(defineProps<BadgeProps>(), {
  variant: 'default',
  size: 'md',
});

const badgeClasses = computed(() => {
  const variants = {
    default: 'bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100',
    primary: 'bg-brand-primary-light dark:bg-brand-primary-dark text-brand-primary dark:text-brand-primary-light',
    success: 'bg-semantic-success-light dark:bg-semantic-success-dark text-semantic-success-dark dark:text-semantic-success-light',
    warning: 'bg-semantic-warning-light dark:bg-semantic-warning-dark text-semantic-warning-dark dark:text-semantic-warning-light',
    error: 'bg-semantic-error-light dark:bg-semantic-error-dark text-semantic-error-dark dark:text-semantic-error-light',
    info: 'bg-semantic-info-light dark:bg-semantic-info-dark text-semantic-info-dark dark:text-semantic-info-light',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-sm',
  };

  return [
    'inline-flex items-center rounded-full font-medium',
    variants[props.variant],
    sizes[props.size],
  ].join(' ');
});
</script>

<template>
  <span :class="badgeClasses">
    <slot />
  </span>
</template>

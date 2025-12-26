<script setup lang="ts">
import { computed } from 'vue';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  type: 'button',
});

const buttonClasses = computed(() => {
  const variants = {
    primary: 'bg-brand-primary hover:bg-brand-primary-hover text-white shadow-sm',
    secondary: 'bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-900 dark:text-neutral-100',
    outline: 'border-2 border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-900 dark:text-neutral-100',
    ghost: 'hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-900 dark:text-neutral-100',
    destructive: 'bg-semantic-error hover:bg-semantic-error-dark text-white shadow-sm',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return [
    'inline-flex items-center justify-center rounded-md font-medium transition-colors',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2',
    'disabled:opacity-50 disabled:pointer-events-none',
    variants[props.variant],
    sizes[props.size],
  ].join(' ');
});
</script>

<template>
  <button
    :type="type"
    :disabled="disabled"
    :class="buttonClasses"
  >
    <slot />
  </button>
</template>

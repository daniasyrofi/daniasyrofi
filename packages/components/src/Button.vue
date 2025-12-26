<script setup lang="ts">
import { computed } from 'vue';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'link';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'icon';
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  class?: string;
  pill?: boolean;
}

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
  type: 'button',
  pill: false,
});

const buttonClasses = computed(() => {
  const variants = {
    primary: 'bg-brand-primary hover:bg-brand-primary-hover active:bg-brand-primary-active text-white shadow-sm border border-transparent',
    secondary: 'bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 active:bg-neutral-300 dark:active:bg-neutral-600 text-neutral-900 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-700',
    outline: 'bg-transparent border border-neutral-300 dark:border-neutral-600 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-500 active:bg-neutral-100 dark:active:bg-neutral-700 text-neutral-900 dark:text-neutral-100',
    ghost: 'bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800 active:bg-neutral-200 dark:active:bg-neutral-700 text-neutral-900 dark:text-neutral-100 border border-transparent',
    destructive: 'bg-semantic-error hover:bg-semantic-error-dark active:opacity-90 text-white shadow-sm border border-transparent',
    link: 'bg-transparent text-brand-primary underline-offset-4 hover:underline p-0 h-auto',
  };

  const sizes = {
    xs: 'px-2 py-1 text-xs rounded',
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-lg',
    lg: 'px-8 py-4 text-lg rounded-xl',
    xl: 'px-10 py-5 text-xl rounded-2xl',
    icon: 'h-10 w-10 rounded-lg p-0',
  };

  return [
    'inline-flex items-center justify-center gap-2 font-medium transition-all duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-900',
    'disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed',
    props.pill ? '!rounded-full' : '',
    variants[props.variant],
    sizes[props.size],
    props.class,
  ].join(' ');
});
</script>

<template>
  <button
    :type="type"
    :disabled="disabled || loading"
    :class="buttonClasses"
  >
    <svg
      v-if="loading"
      class="animate-spin h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      />
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
    <slot />
  </button>
</template>

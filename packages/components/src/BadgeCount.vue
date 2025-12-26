<script setup lang="ts">
import { computed } from 'vue';

export interface BadgeCountProps {
  value: number;
  max?: number;
  variant?: 'primary' | 'neutral' | 'error';
}

const props = withDefaults(defineProps<BadgeCountProps>(), {
  max: 99,
  variant: 'primary',
});

const displayValue = computed(() => {
  if (props.value > props.max) return `${props.max}+`;
  return String(props.value);
});

const classes = computed(() => {
  const variants = {
    primary: 'bg-brand-primary text-white',
    neutral: 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900',
    error: 'bg-semantic-error text-white',
  };

  return [
    'inline-flex items-center justify-center',
    'min-w-5 h-5 px-1.5',
    'rounded-full text-xs font-semibold leading-none',
    variants[props.variant],
  ].join(' ');
});
</script>

<template>
  <span :class="classes" :aria-label="`Notifications: ${value}`">
    {{ displayValue }}
  </span>
</template>

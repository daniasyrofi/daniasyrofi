<script setup lang="ts">
import { computed } from 'vue';

export interface AlertProps {
  variant?: 'success' | 'warning' | 'error' | 'info';
  title?: string;
}

const props = withDefaults(defineProps<AlertProps>(), {
  variant: 'info',
});

const alertClasses = computed(() => {
  const variants = {
    success: 'bg-semantic-success-light dark:bg-semantic-success-dark/20 border-semantic-success text-semantic-success-dark dark:text-semantic-success-light',
    warning: 'bg-semantic-warning-light dark:bg-semantic-warning-dark/20 border-semantic-warning text-semantic-warning-dark dark:text-semantic-warning-light',
    error: 'bg-semantic-error-light dark:bg-semantic-error-dark/20 border-semantic-error text-semantic-error-dark dark:text-semantic-error-light',
    info: 'bg-semantic-info-light dark:bg-semantic-info-dark/20 border-semantic-info text-semantic-info-dark dark:text-semantic-info-light',
  };

  return [
    'rounded-lg border-l-4 p-4',
    variants[props.variant],
  ].join(' ');
});

const icons = {
  success: '✓',
  warning: '⚠',
  error: '✕',
  info: 'ℹ',
};
</script>

<template>
  <div :class="alertClasses" role="alert">
    <div class="flex">
      <div class="flex-shrink-0 text-lg mr-3">
        {{ icons[variant] }}
      </div>
      <div class="flex-1">
        <h3 v-if="title" class="font-semibold mb-1">
          {{ title }}
        </h3>
        <div class="text-sm">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

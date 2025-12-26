<script setup lang="ts">
import { computed } from 'vue';

export interface AlertProps {
  variant?: 'success' | 'warning' | 'error' | 'info';
  title?: string;
}

const props = withDefaults(defineProps<AlertProps>(), {
  variant: 'info',
});

const variants = {
  success: {
    root: 'bg-semantic-success-light text-semantic-success-dark border-semantic-success',
    icon: 'ri-checkbox-circle-line',
  },
  warning: {
    root: 'bg-semantic-warning-light text-semantic-warning-dark border-semantic-warning',
    icon: 'ri-error-warning-line',
  },
  error: {
    root: 'bg-semantic-error-light text-semantic-error-dark border-semantic-error',
    icon: 'ri-close-circle-line',
  },
  info: {
    root: 'bg-semantic-info-light text-semantic-info-dark border-semantic-info',
    icon: 'ri-information-line',
  },
} as const;

const alertClasses = computed(() => {
  return [
    'rounded-xl border p-5 shadow-xs',
    'flex gap-3',
    variants[props.variant].root,
  ].join(' ');
});
</script>

<template>
  <div :class="alertClasses" role="alert">
    <div class="mt-0.5 flex-shrink-0">
      <i :class="variants[variant].icon" class="text-lg"></i>
    </div>
    <div class="min-w-0">
      <h3 v-if="title" class="font-semibold text-sm mb-1">
        {{ title }}
      </h3>
      <div class="text-sm leading-relaxed">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

export interface ProgressProps {
  value: number;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'success' | 'warning' | 'error';
  showLabel?: boolean;
  label?: string;
}

const props = withDefaults(defineProps<ProgressProps>(), {
  max: 100,
  size: 'md',
  variant: 'primary',
  showLabel: false,
});

const percentage = computed(() => {
  return Math.min(100, Math.max(0, (props.value / props.max) * 100));
});

const displayLabel = computed(() => {
  if (props.label) return props.label;
  return `${Math.round(percentage.value)}%`;
});

const trackClasses = computed(() => {
  const sizes = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3',
  };

  return [
    'w-full overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800',
    sizes[props.size],
  ].join(' ');
});

const barClasses = computed(() => {
  const variants = {
    primary: 'bg-brand-primary',
    success: 'bg-semantic-success',
    warning: 'bg-semantic-warning',
    error: 'bg-semantic-error',
  };

  return [
    'h-full rounded-full transition-all duration-300',
    variants[props.variant],
  ].join(' ');
});
</script>

<template>
  <div class="w-full">
    <div v-if="showLabel" class="flex justify-between items-center mb-2">
      <span class="text-sm font-medium text-neutral-700 dark:text-neutral-300">
        {{ displayLabel }}
      </span>
    </div>
    <div :class="trackClasses" role="progressbar" :aria-valuenow="value" :aria-valuemin="0" :aria-valuemax="max">
      <div :class="barClasses" :style="{ width: `${percentage}%` }" />
    </div>
  </div>
</template>

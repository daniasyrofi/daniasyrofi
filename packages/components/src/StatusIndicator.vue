<script setup lang="ts">
import { computed } from 'vue';

export interface StatusIndicatorProps {
  status?: 'online' | 'offline' | 'away' | 'busy' | 'success' | 'warning' | 'error' | 'info' | 'default';
  label?: string;
  pulse?: boolean;
  size?: 'sm' | 'md' | 'lg';
  class?: string;
}

const props = withDefaults(defineProps<StatusIndicatorProps>(), {
  status: 'default',
  pulse: false,
  size: 'md',
});

const indicatorClasses = computed(() => {
  const statuses = {
    online: 'bg-semantic-success',
    success: 'bg-semantic-success',
    offline: 'bg-neutral-400',
    default: 'bg-neutral-400',
    away: 'bg-semantic-warning',
    warning: 'bg-semantic-warning',
    busy: 'bg-semantic-error',
    error: 'bg-semantic-error',
    info: 'bg-semantic-info',
  };

  const sizes = {
    sm: 'w-2 h-2',
    md: 'w-2.5 h-2.5',
    lg: 'w-3 h-3',
  };

  return [
    'rounded-full flex-shrink-0',
    statuses[props.status],
    sizes[props.size],
  ].join(' ');
});

const pulseClasses = computed(() => {
  const statuses = {
    online: 'bg-semantic-success',
    success: 'bg-semantic-success',
    offline: 'bg-neutral-400',
    default: 'bg-neutral-400',
    away: 'bg-semantic-warning',
    warning: 'bg-semantic-warning',
    busy: 'bg-semantic-error',
    error: 'bg-semantic-error',
    info: 'bg-semantic-info',
  };

  return [
    'absolute inset-0 rounded-full animate-ping opacity-75',
    statuses[props.status],
  ].join(' ');
});

const containerClasses = computed(() => {
  return [
    'inline-flex items-center gap-2',
    props.class,
  ].join(' ');
});
</script>

<template>
  <div :class="containerClasses">
    <div class="relative flex items-center justify-center">
      <div v-if="pulse" :class="pulseClasses"></div>
      <div :class="indicatorClasses"></div>
    </div>
    <span v-if="label" class="text-sm font-medium text-neutral-700 dark:text-neutral-300">
      {{ label }}
    </span>
  </div>
</template>

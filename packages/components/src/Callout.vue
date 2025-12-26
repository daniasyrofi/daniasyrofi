<script setup lang="ts">
import { computed } from 'vue';

export interface CalloutProps {
  title?: string;
  variant?: 'info' | 'success' | 'warning' | 'error' | 'default';
  icon?: string;
  class?: string;
}

const props = withDefaults(defineProps<CalloutProps>(), {
  variant: 'default',
});

const variantConfig = {
  info: {
    classes: 'bg-semantic-info/5 border-semantic-info/20 text-semantic-info',
    icon: 'ri-information-line',
  },
  success: {
    classes: 'bg-semantic-success/5 border-semantic-success/20 text-semantic-success',
    icon: 'ri-checkbox-circle-line',
  },
  warning: {
    classes: 'bg-semantic-warning/5 border-semantic-warning/20 text-semantic-warning',
    icon: 'ri-error-warning-line',
  },
  error: {
    classes: 'bg-semantic-error/5 border-semantic-error/20 text-semantic-error',
    icon: 'ri-close-circle-line',
  },
  default: {
    classes: 'bg-neutral-50 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200',
    icon: 'ri-notification-3-line',
  },
};

const classes = computed(() => {
  return [
    'flex gap-4 p-4 border rounded-xl transition-all duration-200',
    variantConfig[props.variant].classes,
    props.class,
  ].join(' ');
});

const displayIcon = computed(() => props.icon || variantConfig[props.variant].icon);
</script>

<template>
  <div :class="classes">
    <div class="flex-shrink-0">
      <i :class="[displayIcon, 'text-2xl']"></i>
    </div>
    <div class="flex-grow space-y-1">
      <h4 v-if="title" class="font-bold tracking-tight">
        {{ title }}
      </h4>
      <div class="text-sm leading-relaxed opacity-90">
        <slot />
      </div>
    </div>
  </div>
</template>

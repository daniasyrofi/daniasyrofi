<template>
  <i :class="iconClass" :style="iconStyle" :aria-hidden="ariaHidden" :aria-label="ariaLabel" />
</template>

<script setup lang="ts">
export interface IconProps {
  name: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'muted' | 'inherit';
  variant?: 'line' | 'fill';
  class?: string;
  ariaHidden?: boolean;
  ariaLabel?: string;
}

import { computed } from 'vue';

const props = withDefaults(defineProps<IconProps>(), {
  size: 'md',
  variant: 'line',
  color: 'inherit',
  ariaHidden: true
});

const iconClass = computed(() => {
  const baseClass = `ri-${props.name}-${props.variant}`;
  const sizeClass = `icon-${props.size}`;
  const colorClass = props.color !== 'inherit' ? `icon-${props.color}` : '';
  const customClass = props.class || '';
  
  return [baseClass, sizeClass, colorClass, customClass].filter(Boolean).join(' ');
});

const iconStyle = computed(() => {
  if (props.color === 'inherit') {
    return {};
  }
  return {
    color: `var(--icon-${props.color})`
  };
});
</script>

<style scoped>
.icon-xs {
  font-size: 16px;
}

.icon-sm {
  font-size: 20px;
}

.icon-md {
  font-size: 24px;
}

.icon-lg {
  font-size: 32px;
}

.icon-xl {
  font-size: 48px;
}

:root {
  --icon-primary: #D72539;
  --icon-secondary: #5C5C5C;
  --icon-success: #2D8636;
  --icon-warning: #F5B945;
  --icon-error: #D72539;
  --icon-info: #2563EB;
  --icon-muted: #8A8A8A;
}

.icon-primary {
  color: var(--icon-primary);
}

.icon-secondary {
  color: var(--icon-secondary);
}

.icon-success {
  color: var(--icon-success);
}

.icon-warning {
  color: var(--icon-warning);
}

.icon-error {
  color: var(--icon-error);
}

.icon-info {
  color: var(--icon-info);
}

.icon-muted {
  color: var(--icon-muted);
}

@media (prefers-color-scheme: dark) {
  :root {
    --icon-primary: #E54D5C;
    --icon-secondary: #8A8A8A;
    --icon-success: #5DB77B;
    --icon-warning: #F5B945;
    --icon-error: #E54D5C;
    --icon-info: #5A9FD9;
    --icon-muted: #A0A0A0;
  }
}
</style>
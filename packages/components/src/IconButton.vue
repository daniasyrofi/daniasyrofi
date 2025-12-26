<script setup lang="ts">
import { computed } from 'vue';
import Button from './Button.vue';

export interface IconButtonProps {
  icon: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'success' | 'warning';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  rounded?: boolean;
  disabled?: boolean;
  loading?: boolean;
  label: string; // Required for accessibility
  class?: string;
}

const props = withDefaults(defineProps<IconButtonProps>(), {
  variant: 'secondary',
  size: 'md',
  rounded: false,
  disabled: false,
  loading: false,
});

const emit = defineEmits<{
  'click': [event: MouseEvent];
}>();

const sizeClasses = {
  xs: 'p-1',
  sm: 'p-1.5',
  md: 'p-2',
  lg: 'p-2.5',
  xl: 'p-3',
};

const iconSizes = {
  xs: 'text-sm',
  sm: 'text-base',
  md: 'text-lg',
  lg: 'text-xl',
  xl: 'text-2xl',
};

const classes = computed(() => {
  return [
    props.rounded ? 'rounded-full' : 'rounded-lg',
    sizeClasses[props.size],
    props.class,
  ].join(' ');
});
</script>

<template>
  <Button
    :variant="variant"
    :disabled="disabled"
    :loading="loading"
    :class="classes"
    :title="label"
    :aria-label="label"
    @click="emit('click', $event)"
  >
    <template #default>
      <i :class="[icon, iconSizes[size]]"></i>
    </template>
  </Button>
</template>

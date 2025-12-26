<script setup lang="ts">
import { computed } from 'vue';

export interface TagProps {
  label: string;
  variant?: 'default' | 'brand' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md';
  removable?: boolean;
  disabled?: boolean;
  class?: string;
}

const props = withDefaults(defineProps<TagProps>(), {
  variant: 'default',
  size: 'md',
  removable: false,
  disabled: false,
});

const emit = defineEmits<{
  'remove': [];
  'click': [event: MouseEvent];
}>();

const classes = computed(() => {
  const variants = {
    default: 'bg-neutral-100 text-neutral-700 border-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:border-neutral-700',
    brand: 'bg-brand-primary/10 text-brand-primary border-brand-primary/20',
    success: 'bg-semantic-success/10 text-semantic-success border-semantic-success/20',
    warning: 'bg-semantic-warning/10 text-semantic-warning border-semantic-warning/20',
    error: 'bg-semantic-error/10 text-semantic-error border-semantic-error/20',
    info: 'bg-semantic-info/10 text-semantic-info border-semantic-info/20',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-sm',
  };

  return [
    'inline-flex items-center gap-1.5 font-medium border rounded-md transition-all duration-200',
    variants[props.variant],
    sizes[props.size],
    props.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-default',
    props.class,
  ].join(' ');
});

const handleRemove = (e: MouseEvent) => {
  e.stopPropagation();
  if (props.disabled) return;
  emit('remove');
};
</script>

<template>
  <span :class="classes" @click="emit('click', $event)">
    <slot>{{ label }}</slot>
    <button
      v-if="removable"
      type="button"
      @click="handleRemove"
      class="hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors p-0.5"
      :disabled="disabled"
    >
      <i class="ri-close-line text-[1.1em]"></i>
    </button>
  </span>
</template>

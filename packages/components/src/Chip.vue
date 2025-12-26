<script setup lang="ts">
import { computed } from 'vue';

export interface ChipProps {
  label: string;
  icon?: string;
  removable?: boolean;
  selected?: boolean;
  disabled?: boolean;
  size?: 'sm' | 'md';
  class?: string;
}

const props = withDefaults(defineProps<ChipProps>(), {
  removable: false,
  selected: false,
  disabled: false,
  size: 'md',
});

const emit = defineEmits<{
  'click': [event: MouseEvent];
  'remove': [];
  'update:selected': [value: boolean];
}>();

const classes = computed(() => {
  const sizes = {
    sm: 'px-2 py-1 text-xs gap-1.5',
    md: 'px-3 py-1.5 text-sm gap-2',
  };

  return [
    'inline-flex items-center font-medium rounded-full transition-all duration-200 border',
    props.selected
      ? 'bg-brand-primary border-brand-primary text-white'
      : 'bg-white dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800',
    props.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
    sizes[props.size],
    props.class,
  ].join(' ');
});

const handleClick = (e: MouseEvent) => {
  if (props.disabled) return;
  emit('click', e);
  emit('update:selected', !props.selected);
};

const handleRemove = (e: MouseEvent) => {
  e.stopPropagation();
  if (props.disabled) return;
  emit('remove');
};
</script>

<template>
  <div :class="classes" @click="handleClick">
    <i v-if="icon" :class="[icon, 'text-[1.1em]']"></i>
    <span>{{ label }}</span>
    <button
      v-if="removable"
      type="button"
      @click="handleRemove"
      class="hover:bg-black/10 dark:hover:bg-white/20 rounded-full transition-colors p-0.5 -mr-1"
      :disabled="disabled"
    >
      <i class="ri-close-line"></i>
    </button>
  </div>
</template>

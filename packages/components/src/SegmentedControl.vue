<script setup lang="ts">
import { computed } from 'vue';

export interface SegmentedControlOption {
  label: string;
  value: string | number;
  icon?: string;
  disabled?: boolean;
}

export interface SegmentedControlProps {
  modelValue?: string | number;
  options: SegmentedControlOption[];
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  class?: string;
}

const props = withDefaults(defineProps<SegmentedControlProps>(), {
  size: 'md',
  fullWidth: false,
  disabled: false,
});

const emit = defineEmits<{
  'update:modelValue': [value: string | number];
}>();

const containerClasses = computed(() => {
  const sizes = {
    sm: 'p-1 gap-1',
    md: 'p-1 gap-1',
    lg: 'p-1.5 gap-1.5',
  };

  return [
    'inline-flex items-center bg-neutral-100 dark:bg-neutral-800 rounded-xl transition-all duration-200',
    props.fullWidth ? 'w-full' : '',
    sizes[props.size],
    props.disabled ? 'opacity-50 cursor-not-allowed' : '',
    props.class,
  ].join(' ');
});

const itemClasses = (option: SegmentedControlOption) => {
  const isActive = props.modelValue === option.value;
  
  const sizes = {
    sm: 'px-2.5 py-1 text-xs',
    md: 'px-4 py-1.5 text-sm',
    lg: 'px-6 py-2.5 text-base',
  };

  return [
    'flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200',
    props.fullWidth ? 'flex-1' : '',
    isActive 
      ? 'bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 shadow-sm' 
      : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200',
    option.disabled || props.disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
    sizes[props.size],
  ].join(' ');
};

const selectOption = (option: SegmentedControlOption) => {
  if (option.disabled || props.disabled) return;
  emit('update:modelValue', option.value);
};

</script>

<template>
  <div :class="containerClasses">
    <button
      v-for="option in options"
      :key="option.value"
      type="button"
      :class="itemClasses(option)"
      :disabled="option.disabled || disabled"
      @click="selectOption(option)"
    >
      <i v-if="option.icon" :class="[option.icon, 'text-base']"></i>
      <span>{{ option.label }}</span>
    </button>
  </div>
</template>

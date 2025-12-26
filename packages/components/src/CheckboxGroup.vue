<script setup lang="ts">
import { computed } from 'vue';

export interface CheckboxGroupOption {
  label: string;
  value: string | number;
  description?: string;
  disabled?: boolean;
}

export interface CheckboxGroupProps {
  modelValue: (string | number)[];
  options: CheckboxGroupOption[];
  label?: string;
  orientation?: 'horizontal' | 'vertical';
  columns?: number;
  disabled?: boolean;
  class?: string;
}

const props = withDefaults(defineProps<CheckboxGroupProps>(), {
  orientation: 'vertical',
  columns: 1,
  disabled: false,
});

const emit = defineEmits<{
  'update:modelValue': [value: (string | number)[]];
}>();

const containerClasses = computed(() => {
  return [
    'grid gap-4',
    props.orientation === 'horizontal' ? 'flex flex-wrap' : '',
    props.columns > 1 ? `grid-cols-1 md:grid-cols-${props.columns}` : '',
    props.class,
  ].join(' ');
});

const toggleOption = (value: string | number) => {
  if (props.disabled) return;
  const newValue = [...props.modelValue];
  const index = newValue.indexOf(value);
  if (index > -1) {
    newValue.splice(index, 1);
  } else {
    newValue.push(value);
  }
  emit('update:modelValue', newValue);
};

const isChecked = (value: string | number) => props.modelValue.includes(value);

</script>

<template>
  <div class="w-full">
    <label v-if="label" class="block text-sm font-bold text-neutral-900 dark:text-neutral-100 mb-4 uppercase tracking-wider">
      {{ label }}
    </label>
    
    <div :class="containerClasses">
      <div
        v-for="option in options"
        :key="option.value"
        @click="!option.disabled && toggleOption(option.value)"
        class="flex items-start gap-3 p-3 rounded-xl border transition-all duration-200 cursor-pointer group"
        :class="[
          isChecked(option.value) 
            ? 'border-brand-primary bg-brand-primary/5 ring-1 ring-brand-primary' 
            : 'border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700',
          option.disabled || disabled ? 'opacity-50 cursor-not-allowed' : ''
        ]"
      >
        <div 
          class="w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200 flex-shrink-0 mt-0.5"
          :class="[
            isChecked(option.value) 
              ? 'bg-brand-primary border-brand-primary' 
              : 'border-neutral-300 dark:border-neutral-700 group-hover:border-neutral-400'
          ]"
        >
          <i v-if="isChecked(option.value)" class="ri-check-line text-white text-sm"></i>
        </div>
        
        <div class="flex-grow select-none">
          <p class="text-sm font-bold text-neutral-900 dark:text-neutral-100">
            {{ option.label }}
          </p>
          <p v-if="option.description" class="text-xs text-neutral-500 mt-0.5">
            {{ option.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

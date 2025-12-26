<script setup lang="ts">
import { computed } from 'vue';

export interface RadioGroupOption {
  label: string;
  value: string | number;
  description?: string;
  icon?: string;
  disabled?: boolean;
}

export interface RadioGroupProps {
  modelValue: string | number;
  options: RadioGroupOption[];
  label?: string;
  variant?: 'default' | 'card';
  columns?: number;
  disabled?: boolean;
  class?: string;
}

const props = withDefaults(defineProps<RadioGroupProps>(), {
  variant: 'default',
  columns: 1,
  disabled: false,
});

const emit = defineEmits<{
  'update:modelValue': [value: string | number];
}>();

const containerClasses = computed(() => {
  return [
    'grid gap-3',
    props.columns > 1 ? `grid-cols-1 md:grid-cols-${props.columns}` : '',
    props.class,
  ].join(' ');
});

const selectOption = (value: string | number) => {
  if (props.disabled) return;
  emit('update:modelValue', value);
};

const isSelected = (value: string | number) => props.modelValue === value;

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
        @click="!option.disabled && selectOption(option.value)"
        class="flex items-center gap-3 transition-all duration-200 cursor-pointer group"
        :class="[
          variant === 'card' 
            ? [
                'p-4 rounded-xl border-2',
                isSelected(option.value) 
                  ? 'border-brand-primary bg-brand-primary/5' 
                  : 'border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700'
              ]
            : 'py-2',
          option.disabled || disabled ? 'opacity-50 cursor-not-allowed' : ''
        ]"
      >
        <!-- Radio Circle -->
        <div 
          class="w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200 flex-shrink-0"
          :class="[
            isSelected(option.value) 
              ? 'border-brand-primary' 
              : 'border-neutral-300 dark:border-neutral-700 group-hover:border-neutral-400'
          ]"
        >
          <div 
            class="w-2.5 h-2.5 rounded-full bg-brand-primary transition-transform duration-200"
            :class="[isSelected(option.value) ? 'scale-100' : 'scale-0']"
          ></div>
        </div>

        <div v-if="option.icon && variant === 'card'" class="text-2xl text-neutral-400 group-hover:text-brand-primary transition-colors">
          <i :class="option.icon"></i>
        </div>
        
        <div class="flex-grow select-none">
          <p class="text-sm font-bold text-neutral-900 dark:text-neutral-100">
            {{ option.label }}
          </p>
          <p v-if="option.description" class="text-xs text-neutral-500 mt-0.5">
            {{ option.description }}
          </p>
        </div>
        
        <i v-if="isSelected(option.value) && variant === 'card'" class="ri-checkbox-circle-fill text-brand-primary text-xl"></i>
      </div>
    </div>
  </div>
</template>

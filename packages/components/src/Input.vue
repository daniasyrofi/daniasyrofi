<script setup lang="ts">
import { computed } from 'vue';

export interface InputProps {
  modelValue?: string | number;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean | string;
  label?: string;
  helperText?: string;
  id?: string;
  icon?: string;
  size?: 'sm' | 'md' | 'lg';
  class?: string;
}

const props = withDefaults(defineProps<InputProps>(), {
  type: 'text',
  disabled: false,
  error: false,
  size: 'md',
});

const emit = defineEmits<{
  'update:modelValue': [value: string | number];
}>();

const hasError = computed(() => !!props.error);
const errorMessage = computed(() => typeof props.error === 'string' ? props.error : '');

const inputClasses = computed(() => {
  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3 text-base',
    lg: 'px-5 py-4 text-lg',
  };

  return [
    'w-full rounded-lg border transition-all duration-200',
    'bg-white dark:bg-neutral-900',
    'text-neutral-900 dark:text-neutral-100',
    'placeholder:text-neutral-400 dark:placeholder:text-neutral-500',
    'focus:outline-none focus:ring-2 focus:ring-offset-1',
    hasError.value
      ? 'border-semantic-error focus:ring-semantic-error focus:border-semantic-error'
      : 'border-neutral-300 dark:border-neutral-700 focus:border-brand-primary focus:ring-brand-primary',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-neutral-50 dark:disabled:bg-neutral-800',
    props.icon ? 'pl-11' : '',
    sizes[props.size],
    props.class,
  ].join(' ');
});

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
};
</script>

<template>
  <div class="w-full">
    <label
      v-if="label"
      :for="id"
      class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
    >
      {{ label }}
    </label>
    <div class="relative">
      <div
        v-if="icon"
        class="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 dark:text-neutral-500"
      >
        <i :class="icon" class="text-lg"></i>
      </div>
      <input
        :id="id"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :class="inputClasses"
        @input="handleInput"
      />
    </div>
    <p
      v-if="errorMessage"
      class="mt-1.5 text-sm text-semantic-error"
    >
      {{ errorMessage }}
    </p>
    <p
      v-else-if="helperText"
      class="mt-1.5 text-sm text-neutral-500 dark:text-neutral-400"
    >
      {{ helperText }}
    </p>
  </div>
</template>

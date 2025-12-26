<script setup lang="ts">
import { computed } from 'vue';

export interface TextareaProps {
  modelValue?: string;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean | string;
  label?: string;
  helperText?: string;
  id?: string;
  rows?: number;
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
}

const props = withDefaults(defineProps<TextareaProps>(), {
  disabled: false,
  error: false,
  rows: 4,
  resize: 'vertical',
});

const emit = defineEmits<{
  'update:modelValue': [value: string];
}>();

const hasError = computed(() => !!props.error);
const errorMessage = computed(() => typeof props.error === 'string' ? props.error : '');

const textareaClasses = computed(() => {
  const resizeClasses = {
    none: 'resize-none',
    vertical: 'resize-y',
    horizontal: 'resize-x',
    both: 'resize',
  };

  return [
    'w-full px-4 py-3 rounded-lg border transition-all duration-200',
    'bg-white dark:bg-neutral-900',
    'text-neutral-900 dark:text-neutral-100',
    'placeholder:text-neutral-400 dark:placeholder:text-neutral-500',
    'focus:outline-none focus:ring-2 focus:ring-offset-1',
    hasError.value
      ? 'border-semantic-error focus:ring-semantic-error focus:border-semantic-error'
      : 'border-neutral-300 dark:border-neutral-700 focus:border-brand-primary focus:ring-brand-primary',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-neutral-50 dark:disabled:bg-neutral-800',
    resizeClasses[props.resize],
  ].join(' ');
});

const handleInput = (event: Event) => {
  const target = event.target as HTMLTextAreaElement;
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
    <textarea
      :id="id"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :rows="rows"
      :class="textareaClasses"
      @input="handleInput"
    />
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

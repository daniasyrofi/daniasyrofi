<script setup lang="ts">
import { computed } from 'vue';

export interface InputProps {
  modelValue?: string | number;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  label?: string;
  id?: string;
}

const props = withDefaults(defineProps<InputProps>(), {
  type: 'text',
  disabled: false,
  error: false,
});

const emit = defineEmits<{
  'update:modelValue': [value: string | number];
}>();

const inputClasses = computed(() => {
  return [
    'w-full px-3 py-2 rounded-md border transition-colors',
    'bg-white dark:bg-neutral-900',
    'text-neutral-900 dark:text-neutral-100',
    'placeholder:text-neutral-400 dark:placeholder:text-neutral-600',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    props.error
      ? 'border-semantic-error focus:ring-semantic-error'
      : 'border-neutral-300 dark:border-neutral-700 focus:border-brand-primary focus:ring-brand-primary',
    'disabled:opacity-50 disabled:cursor-not-allowed',
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
      class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5"
    >
      {{ label }}
    </label>
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
</template>

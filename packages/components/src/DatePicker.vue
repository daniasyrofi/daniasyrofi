<script setup lang="ts">
import { computed } from 'vue';
import Input from './Input.vue';

export interface DatePickerProps {
  modelValue?: string;
  label?: string;
  error?: string | boolean;
  disabled?: boolean;
  min?: string;
  max?: string;
  class?: string;
}

const props = defineProps<DatePickerProps>();

const emit = defineEmits<{
  'update:modelValue': [value: string];
}>();

const handleInput = (e: Event) => {
  const target = e.target as HTMLInputElement;
  emit('update:modelValue', target.value);
};
</script>

<template>
  <div :class="['w-full', props.class]">
    <label v-if="label" class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
      {{ label }}
    </label>
    <div class="relative">
      <input
        type="date"
        :value="modelValue"
        :disabled="disabled"
        :min="min"
        :max="max"
        class="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        :class="{ 'border-semantic-error ring-semantic-error': !!error }"
        @input="handleInput"
      />
      <div class="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400">
        <i class="ri-calendar-line text-lg" />
      </div>
    </div>
    <p v-if="typeof error === 'string'" class="mt-1.5 text-sm text-semantic-error">
      {{ error }}
    </p>
  </div>
</template>

<style scoped>
/* Customizing the calendar icon in some browsers */
input[type="date"]::-webkit-calendar-picker-indicator {
  background: transparent;
  bottom: 0;
  color: transparent;
  cursor: pointer;
  height: auto;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: auto;
}
</style>

<script setup lang="ts">
import { computed } from 'vue';

export interface CheckboxProps {
  modelValue?: boolean;
  id?: string;
  label?: string;
  disabled?: boolean;
  error?: boolean;
}

const props = withDefaults(defineProps<CheckboxProps>(), {
  modelValue: false,
  disabled: false,
  error: false,
});

const emit = defineEmits<{
  'update:modelValue': [value: boolean];
}>();

const wrapperClasses = computed(() => [
  'inline-flex items-start gap-3',
  props.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
].join(' '));

const boxClasses = computed(() => [
  'h-5 w-5 rounded-md border transition-all duration-200',
  'flex items-center justify-center',
  'bg-white dark:bg-neutral-900',
  props.error
    ? 'border-semantic-error'
    : 'border-neutral-300 dark:border-neutral-700',
  !props.disabled ? 'hover:border-neutral-400 dark:hover:border-neutral-600' : '',
  'peer-focus-visible:ring-2 peer-focus-visible:ring-brand-primary peer-focus-visible:ring-offset-2 dark:peer-focus-visible:ring-offset-neutral-900',
  props.modelValue ? 'bg-brand-primary border-brand-primary' : '',
].join(' '));

const labelClasses = computed(() => [
  'text-sm leading-relaxed select-none',
  props.error ? 'text-semantic-error' : 'text-neutral-700 dark:text-neutral-300',
].join(' '));

const onChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.checked);
};
</script>

<template>
  <label :class="wrapperClasses">
    <input
      class="peer sr-only"
      type="checkbox"
      :id="id"
      :checked="modelValue"
      :disabled="disabled"
      @change="onChange"
    />
    <span :class="boxClasses" aria-hidden="true">
      <svg
        v-if="modelValue"
        class="h-3.5 w-3.5 text-white"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.667 5L7.5 14.167 3.333 10"
          stroke="currentColor"
          stroke-width="2.2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </span>
    <span v-if="label" :class="labelClasses">
      {{ label }}
    </span>
  </label>
</template>

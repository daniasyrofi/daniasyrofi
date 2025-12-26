<script setup lang="ts">
import { computed } from 'vue';

export interface ToggleProps {
  modelValue?: boolean;
  id?: string;
  label?: string;
  disabled?: boolean;
  size?: 'sm' | 'md';
}

const props = withDefaults(defineProps<ToggleProps>(), {
  modelValue: false,
  disabled: false,
  size: 'md',
});

const emit = defineEmits<{
  'update:modelValue': [value: boolean];
}>();

const wrapperClasses = computed(() => [
  'inline-flex items-center gap-3',
  props.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
].join(' '));

const sizes = {
  sm: {
    track: 'w-9 h-5',
    thumb: 'h-4 w-4',
    translate: 'peer-checked:translate-x-4',
  },
  md: {
    track: 'w-11 h-6',
    thumb: 'h-5 w-5',
    translate: 'peer-checked:translate-x-5',
  },
};

const trackClasses = computed(() => [
  'relative inline-flex flex-shrink-0 rounded-full',
  'transition-colors duration-200',
  'bg-neutral-300 dark:bg-neutral-700 peer-checked:bg-brand-primary',
  'focus-within:ring-2 focus-within:ring-brand-primary focus-within:ring-offset-2 dark:focus-within:ring-offset-neutral-900',
  sizes[props.size].track,
].join(' '));

const thumbClasses = computed(() => [
  'pointer-events-none absolute left-0.5 top-0.5 rounded-full',
  'bg-white shadow-sm transform transition-transform duration-200',
  sizes[props.size].thumb,
  sizes[props.size].translate,
].join(' '));

const onChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.checked);
};
</script>

<template>
  <label :class="wrapperClasses">
    <span :class="trackClasses">
      <input
        class="peer sr-only"
        type="checkbox"
        :id="id"
        :checked="modelValue"
        :disabled="disabled"
        role="switch"
        :aria-checked="modelValue"
        @change="onChange"
      />
      <span :class="thumbClasses" aria-hidden="true" />
    </span>

    <span
      v-if="label"
      class="text-sm font-medium text-neutral-700 dark:text-neutral-300 select-none"
    >
      {{ label }}
    </span>
  </label>
</template>

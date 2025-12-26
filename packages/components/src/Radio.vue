<script setup lang="ts">
import { computed } from 'vue';

export interface RadioProps {
  modelValue?: string | number | boolean;
  value: string | number | boolean;
  name?: string;
  id?: string;
  label?: string;
  disabled?: boolean;
}

const props = withDefaults(defineProps<RadioProps>(), {
  disabled: false,
});

const emit = defineEmits<{
  'update:modelValue': [value: string | number | boolean];
}>();

const isChecked = computed(() => props.modelValue === props.value);

const wrapperClasses = computed(() => [
  'inline-flex items-start gap-3',
  props.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
].join(' '));

const circleClasses = computed(() => [
  'h-5 w-5 rounded-full border-2 transition-all duration-200',
  'flex items-center justify-center',
  'bg-white dark:bg-neutral-900',
  'border-neutral-300 dark:border-neutral-700',
  !props.disabled ? 'hover:border-neutral-400 dark:hover:border-neutral-600' : '',
  'peer-focus-visible:ring-2 peer-focus-visible:ring-brand-primary peer-focus-visible:ring-offset-2 dark:peer-focus-visible:ring-offset-neutral-900',
  isChecked.value ? 'border-brand-primary bg-brand-primary' : '',
].join(' '));

const onChange = () => {
  emit('update:modelValue', props.value);
};
</script>

<template>
  <label :class="wrapperClasses">
    <input
      class="peer sr-only"
      type="radio"
      :id="id"
      :name="name"
      :value="value"
      :checked="isChecked"
      :disabled="disabled"
      @change="onChange"
    />
    <span :class="circleClasses" aria-hidden="true">
      <span
        v-if="isChecked"
        class="h-2 w-2 rounded-full bg-white"
      />
    </span>
    <span
      v-if="label"
      class="text-sm leading-relaxed select-none text-neutral-700 dark:text-neutral-300"
    >
      {{ label }}
    </span>
  </label>
</template>

<script setup lang="ts">
import { computed } from 'vue';

export interface SearchProps {
  modelValue?: string;
  placeholder?: string;
  disabled?: boolean;
  id?: string;
  label?: string;
  clearable?: boolean;
}

const props = withDefaults(defineProps<SearchProps>(), {
  modelValue: '',
  placeholder: 'Search…',
  disabled: false,
  clearable: true,
});

const emit = defineEmits<{
  'update:modelValue': [value: string];
  clear: [];
}>();

const inputClasses = computed(() => [
  'w-full pl-11 pr-10 py-3 rounded-lg border transition-all duration-200',
  'bg-white dark:bg-neutral-900',
  'text-neutral-900 dark:text-neutral-100',
  'placeholder:text-neutral-400 dark:placeholder:text-neutral-500',
  'border-neutral-300 dark:border-neutral-700',
  'focus:outline-none focus:ring-2 focus:ring-offset-1 focus:border-brand-primary focus:ring-brand-primary',
  props.disabled ? 'opacity-50 cursor-not-allowed bg-neutral-50 dark:bg-neutral-800' : 'hover:border-neutral-400 dark:hover:border-neutral-600',
].join(' '));

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
};

const onClear = () => {
  if (props.disabled) return;
  emit('update:modelValue', '');
  emit('clear');
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
      <span class="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 dark:text-neutral-500">
        <i class="ri-search-line text-lg" />
      </span>
      <input
        :id="id"
        type="search"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :class="inputClasses"
        @input="onInput"
      />
      <button
        v-if="clearable && modelValue"
        type="button"
        class="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-md text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
        :disabled="disabled"
        aria-label="Clear search"
        @click="onClear"
      >
        <i class="ri-close-line" />
      </button>
    </div>
  </div>
</template>

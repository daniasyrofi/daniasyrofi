<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import Input from './Input.vue';

export interface ComboboxOption {
  label: string;
  value: string | number;
  disabled?: boolean;
}

export interface ComboboxProps {
  options: ComboboxOption[];
  modelValue?: string | number;
  placeholder?: string;
  disabled?: boolean;
  class?: string;
}

const props = withDefaults(defineProps<ComboboxProps>(), {
  placeholder: 'Select option...',
  disabled: false,
});

const emit = defineEmits<{
  'update:modelValue': [value: string | number];
}>();

const query = ref('');
const isOpen = ref(false);
const comboboxRef = ref<HTMLElement | null>(null);

const filteredOptions = computed(() => {
  if (query.value === '') return props.options;
  return props.options.filter((option) =>
    option.label.toLowerCase().includes(query.value.toLowerCase())
  );
});

const selectedOption = computed(() => 
  props.options.find(opt => opt.value === props.modelValue)
);

const handleSelect = (option: ComboboxOption) => {
  if (option.disabled) return;
  emit('update:modelValue', option.value);
  query.value = '';
  isOpen.value = false;
};

const handleClickOutside = (event: MouseEvent) => {
  if (comboboxRef.value && !comboboxRef.value.contains(event.target as Node)) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
  <div ref="comboboxRef" :class="['relative w-full', props.class]">
    <div class="relative">
      <Input
        v-model="query"
        :placeholder="selectedOption ? selectedOption.label : placeholder"
        :disabled="disabled"
        @focus="isOpen = true"
        icon="ri-search-line"
      />
      <button
        type="button"
        class="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400"
        @click="isOpen = !isOpen"
      >
        <i :class="[isOpen ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line', 'text-lg']" />
      </button>
    </div>

    <Transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <ul
        v-if="isOpen && (filteredOptions.length > 0 || query !== '')"
        class="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-neutral-950 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border border-neutral-200 dark:border-neutral-800 sm:text-sm"
      >
        <li
          v-if="filteredOptions.length === 0"
          class="relative cursor-default select-none py-2 px-4 text-neutral-500"
        >
          No results found.
        </li>
        <li
          v-for="option in filteredOptions"
          :key="option.value"
          :class="[
            'relative cursor-pointer select-none py-2 pl-3 pr-9 transition-colors',
            modelValue === option.value ? 'bg-brand-primary text-white' : 'text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800',
            option.disabled ? 'opacity-50 cursor-not-allowed' : ''
          ]"
          @click="handleSelect(option)"
        >
          <span :class="['block truncate', modelValue === option.value ? 'font-semibold' : 'font-normal']">
            {{ option.label }}
          </span>
          <span
            v-if="modelValue === option.value"
            :class="['absolute inset-y-0 right-0 flex items-center pr-4', modelValue === option.value ? 'text-white' : 'text-brand-primary']"
          >
            <i class="ri-check-line h-5 w-5" />
          </span>
        </li>
      </ul>
    </Transition>
  </div>
</template>

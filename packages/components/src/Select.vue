<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';

export interface SelectOption {
  label: string;
  value: string | number;
  disabled?: boolean;
}

export interface SelectProps {
  modelValue?: string | number | null;
  options: SelectOption[];
  placeholder?: string;
  disabled?: boolean;
  error?: boolean | string;
  label?: string;
  helperText?: string;
  id?: string;
}

const props = withDefaults(defineProps<SelectProps>(), {
  modelValue: null,
  placeholder: 'Select…',
  disabled: false,
  error: false,
});

const emit = defineEmits<{
  'update:modelValue': [value: string | number | null];
}>();

const isOpen = ref(false);
const highlightedIndex = ref<number>(-1);
const rootEl = ref<HTMLElement | null>(null);
const listId = computed(() => props.id ? `${props.id}-listbox` : undefined);

const hasError = computed(() => !!props.error);
const errorMessage = computed(() => typeof props.error === 'string' ? props.error : '');

const selectedOption = computed(() => {
  return props.options.find(o => o.value === props.modelValue) ?? null;
});

const triggerClasses = computed(() => [
  'w-full px-4 py-3 rounded-lg border transition-all duration-200',
  'bg-white dark:bg-neutral-900',
  'text-left text-neutral-900 dark:text-neutral-100',
  'focus:outline-none focus:ring-2 focus:ring-offset-1',
  hasError.value
    ? 'border-semantic-error focus:ring-semantic-error focus:border-semantic-error'
    : 'border-neutral-300 dark:border-neutral-700 focus:border-brand-primary focus:ring-brand-primary',
  props.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:border-neutral-400 dark:hover:border-neutral-600',
].join(' '));

const listClasses = computed(() => [
  'absolute z-20 mt-2 w-full overflow-hidden rounded-xl border',
  'bg-white dark:bg-neutral-950',
  'border-neutral-200 dark:border-neutral-800',
  'shadow-lg',
].join(' '));

const optionClasses = (idx: number, disabled?: boolean) => {
  return [
    'px-4 py-2.5 text-sm flex items-center justify-between',
    disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
    idx === highlightedIndex.value ? 'bg-neutral-100 dark:bg-neutral-800' : '',
  ].join(' ');
};

const open = () => {
  if (props.disabled) return;
  isOpen.value = true;
  const selectedIdx = props.options.findIndex(o => o.value === props.modelValue);
  highlightedIndex.value = selectedIdx >= 0 ? selectedIdx : 0;
};

const close = () => {
  isOpen.value = false;
  highlightedIndex.value = -1;
};

const toggle = () => {
  if (isOpen.value) close();
  else open();
};

const selectIndex = (idx: number) => {
  const option = props.options[idx];
  if (!option || option.disabled) return;
  emit('update:modelValue', option.value);
  close();
};

const onKeydown = (event: KeyboardEvent) => {
  if (props.disabled) return;

  if (!isOpen.value) {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp' || event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      open();
    }
    return;
  }

  if (event.key === 'Escape') {
    event.preventDefault();
    close();
    return;
  }

  if (event.key === 'ArrowDown') {
    event.preventDefault();
    highlightedIndex.value = Math.min(props.options.length - 1, highlightedIndex.value + 1);
    return;
  }

  if (event.key === 'ArrowUp') {
    event.preventDefault();
    highlightedIndex.value = Math.max(0, highlightedIndex.value - 1);
    return;
  }

  if (event.key === 'Enter') {
    event.preventDefault();
    selectIndex(highlightedIndex.value);
  }
};

const onDocumentPointerDown = (event: Event) => {
  if (!rootEl.value) return;
  const target = event.target as Node;
  if (!rootEl.value.contains(target)) close();
};

onMounted(() => {
  document.addEventListener('pointerdown', onDocumentPointerDown);
});

onBeforeUnmount(() => {
  document.removeEventListener('pointerdown', onDocumentPointerDown);
});

watch(() => props.disabled, (disabled) => {
  if (disabled) close();
});
</script>

<template>
  <div ref="rootEl" class="w-full">
    <label
      v-if="label"
      :for="id"
      class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
    >
      {{ label }}
    </label>

    <div class="relative">
      <button
        :id="id"
        type="button"
        role="combobox"
        :aria-expanded="isOpen"
        :aria-controls="listId"
        :class="triggerClasses"
        @click="toggle"
        @keydown="onKeydown"
      >
        <span class="block truncate">
          <span v-if="selectedOption">{{ selectedOption.label }}</span>
          <span v-else class="text-neutral-400 dark:text-neutral-500">{{ placeholder }}</span>
        </span>
        <span class="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 dark:text-neutral-500">
          <i :class="isOpen ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line'" class="text-lg" />
        </span>
      </button>

      <div v-if="isOpen" :id="listId" role="listbox" :class="listClasses">
        <div
          v-for="(option, idx) in options"
          :key="String(option.value)"
          role="option"
          :aria-selected="option.value === modelValue"
          :class="optionClasses(idx, option.disabled)"
          @click="selectIndex(idx)"
          @mousemove="highlightedIndex = idx"
        >
          <span class="truncate">{{ option.label }}</span>
          <i
            v-if="option.value === modelValue"
            class="ri-check-line text-brand-primary"
          />
        </div>
      </div>
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

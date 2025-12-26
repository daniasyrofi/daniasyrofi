<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import Popover from './Popover.vue';
import PopoverContent from './PopoverContent.vue';
import Input from './Input.vue';

export interface ColorPickerProps {
  modelValue?: string;
  label?: string;
  helperText?: string;
  error?: boolean | string;
  disabled?: boolean;
  id?: string;
  presets?: string[];
  class?: string;
}

const props = withDefaults(defineProps<ColorPickerProps>(), {
  modelValue: '#000000',
  disabled: false,
  presets: () => [
    '#D72539', // Brand Primary
    '#1A1A1A',
    '#FFFFFF',
    '#3B82F6',
    '#10B981',
    '#F59E0B',
    '#EF4444',
    '#8B5CF6',
  ],
});

const emit = defineEmits<{
  'update:modelValue': [value: string];
}>();

const colorValue = ref(props.modelValue);

watch(() => props.modelValue, (newVal) => {
  colorValue.value = newVal || '#000000';
});

const updateColor = (val: string) => {
  colorValue.value = val;
  emit('update:modelValue', val);
};

const handleInputChange = (val: string | number) => {
  updateColor(String(val));
};

const triggerClasses = computed(() => {
  return [
    'flex items-center gap-2 px-3 py-2 rounded-lg border transition-all duration-200 w-full text-left',
    'bg-white dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700',
    'hover:border-neutral-400 dark:hover:border-neutral-600',
    props.disabled ? 'opacity-50 cursor-not-allowed bg-neutral-50 dark:bg-neutral-800' : 'cursor-pointer',
    props.class,
  ].join(' ');
});

const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
const isValidHex = computed(() => hexRegex.test(colorValue.value));

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

    <Popover>
      <template #trigger>
        <button
          type="button"
          :disabled="disabled"
          :class="triggerClasses"
        >
          <div
            class="w-6 h-6 rounded border border-neutral-200 dark:border-neutral-800 flex-shrink-0"
            :style="{ backgroundColor: colorValue }"
          ></div>
          <span class="text-neutral-900 dark:text-neutral-100 flex-grow font-mono uppercase">
            {{ colorValue }}
          </span>
          <i class="ri-arrow-down-s-line text-neutral-400"></i>
        </button>
      </template>

      <PopoverContent class="w-64 p-3">
        <div class="space-y-4">
          <div class="grid grid-cols-4 gap-2">
            <button
              v-for="preset in presets"
              :key="preset"
              type="button"
              class="w-full aspect-square rounded-md border border-neutral-200 dark:border-neutral-800 transition-transform hover:scale-110"
              :style="{ backgroundColor: preset }"
              @click="updateColor(preset)"
              :title="preset"
            ></button>
          </div>

          <div class="space-y-2">
            <Input
              label="Hex Color"
              :modelValue="colorValue"
              @update:modelValue="handleInputChange"
              placeholder="#000000"
              size="sm"
            />
            <div class="flex items-center gap-2">
              <input
                type="color"
                :value="colorValue"
                @input="(e) => updateColor((e.target as HTMLInputElement).value)"
                class="w-full h-10 rounded cursor-pointer border-none bg-transparent"
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>

    <p
      v-if="error && typeof error === 'string'"
      class="mt-1.5 text-sm text-semantic-error"
    >
      {{ error }}
    </p>
    <p
      v-else-if="helperText"
      class="mt-1.5 text-sm text-neutral-500 dark:text-neutral-400"
    >
      {{ helperText }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

export interface SliderProps {
  modelValue?: number;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  class?: string;
}

const props = withDefaults(defineProps<SliderProps>(), {
  modelValue: 0,
  min: 0,
  max: 100,
  step: 1,
  disabled: false,
});

const emit = defineEmits<{
  'update:modelValue': [value: number];
}>();

const percentage = computed(() => {
  return ((props.modelValue - props.min) / (props.max - props.min)) * 100;
});

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', parseFloat(target.value));
};
</script>

<template>
  <div :class="['relative flex w-full touch-none select-none items-center', props.class]">
    <div class="relative h-2 w-full grow overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800">
      <div
        class="absolute h-full bg-brand-primary"
        :style="{ width: `${percentage}%` }"
      />
    </div>
    <input
      type="range"
      :min="min"
      :max="max"
      :step="step"
      :value="modelValue"
      :disabled="disabled"
      class="absolute w-full h-2 opacity-0 cursor-pointer disabled:cursor-not-allowed"
      @input="handleInput"
    />
    <div
      class="pointer-events-none absolute h-5 w-5 rounded-full border-2 border-brand-primary bg-white dark:bg-neutral-950 ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
      :style="{ left: `calc(${percentage}% - 10px)` }"
    />
  </div>
</template>

<style scoped>
input[type='range']::-webkit-slider-thumb {
  pointer-events: all;
  width: 20px;
  height: 20px;
  appearance: none;
}
</style>

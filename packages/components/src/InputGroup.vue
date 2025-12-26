<script setup lang="ts">
import { computed } from 'vue';

export interface InputGroupProps {
  size?: 'sm' | 'md' | 'lg';
  class?: string;
}

const props = withDefaults(defineProps<InputGroupProps>(), {
  size: 'md',
});

const classes = computed(() => {
  return [
    'flex items-stretch w-full rounded-lg overflow-hidden border border-neutral-300 dark:border-neutral-700 focus-within:border-brand-primary focus-within:ring-2 focus-within:ring-brand-primary focus-within:ring-offset-1 transition-all duration-200',
    props.class,
  ].join(' ');
});

const addonClasses = computed(() => {
  const sizes = {
    sm: 'px-2.5 text-xs',
    md: 'px-3.5 text-sm',
    lg: 'px-4.5 text-base',
  };

  return [
    'flex items-center justify-center bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 border-neutral-300 dark:border-neutral-700',
    sizes[props.size],
  ].join(' ');
});
</script>

<template>
  <div :class="classes">
    <div v-if="$slots.prefix" :class="[addonClasses, 'border-r']">
      <slot name="prefix" />
    </div>
    
    <div class="flex-grow relative">
      <slot />
    </div>

    <div v-if="$slots.suffix" :class="[addonClasses, 'border-l']">
      <slot name="suffix" />
    </div>
  </div>
</template>

<style scoped>
:deep(input) {
  border: none !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  height: 100% !important;
}
</style>

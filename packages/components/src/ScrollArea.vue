<script setup lang="ts">
import { computed } from 'vue';

export interface ScrollAreaProps {
  height?: string | number;
  maxHeight?: string | number;
  width?: string | number;
  maxWidth?: string | number;
  class?: string;
  orientation?: 'vertical' | 'horizontal' | 'both';
}

const props = withDefaults(defineProps<ScrollAreaProps>(), {
  orientation: 'vertical',
});

const styles = computed(() => {
  const s: any = {};
  if (props.height) s.height = typeof props.height === 'number' ? `${props.height}px` : props.height;
  if (props.maxHeight) s.maxHeight = typeof props.maxHeight === 'number' ? `${props.maxHeight}px` : props.maxHeight;
  if (props.width) s.width = typeof props.width === 'number' ? `${props.width}px` : props.width;
  if (props.maxWidth) s.maxWidth = typeof props.maxWidth === 'number' ? `${props.maxWidth}px` : props.maxWidth;
  return s;
});

const classes = computed(() => {
  return [
    'overflow-auto custom-scrollbar',
    props.orientation === 'vertical' ? 'overflow-x-hidden' : '',
    props.orientation === 'horizontal' ? 'overflow-y-hidden' : '',
    props.class,
  ];
});
</script>

<template>
  <div :class="classes" :style="styles">
    <slot />
  </div>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #e5e7eb;
  border-radius: 3px;
}

.dark .custom-scrollbar::-webkit-scrollbar-thumb {
  background: #374151;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #d1d5db;
}

.dark .custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #4b5563;
}
</style>

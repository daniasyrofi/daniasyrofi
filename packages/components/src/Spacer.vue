<script setup lang="ts">
import { computed } from 'vue';

export interface SpacerProps {
  size?: number | string;
  axis?: 'horizontal' | 'vertical' | 'both';
}

const props = withDefaults(defineProps<SpacerProps>(), {
  axis: 'both',
});

const style = computed(() => {
  if (!props.size) return { flex: '1 1 0%' };
  
  const sizeValue = typeof props.size === 'number' ? `${props.size}px` : props.size;
  
  return {
    width: props.axis === 'vertical' ? '0px' : sizeValue,
    height: props.axis === 'horizontal' ? '0px' : sizeValue,
    minWidth: props.axis === 'vertical' ? '0px' : sizeValue,
    minHeight: props.axis === 'horizontal' ? '0px' : sizeValue,
  };
});
</script>

<template>
  <div :style="style" aria-hidden="true" />
</template>

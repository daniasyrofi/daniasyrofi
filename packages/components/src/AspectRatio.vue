<script setup lang="ts">
import { computed } from 'vue';

export interface AspectRatioProps {
  ratio?: number;
  class?: string;
}

const props = withDefaults(defineProps<AspectRatioProps>(), {
  ratio: 1,
});

const paddingBottom = computed(() => {
  return `${(1 / props.ratio) * 100}%`;
});
</script>

<template>
  <div class="relative w-full" :class="props.class">
    <div :style="{ paddingBottom }" />
    <div class="absolute inset-0">
      <slot />
    </div>
  </div>
</template>

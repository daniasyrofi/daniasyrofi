<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import Skeleton from './Skeleton.vue';

export interface ImageProps {
  src: string;
  alt: string;
  aspectRatio?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  lazy?: boolean;
  class?: string;
  fallback?: string;
}

const props = withDefaults(defineProps<ImageProps>(), {
  objectFit: 'cover',
  lazy: true,
});

const isLoading = ref(true);
const hasError = ref(false);
const imageSrc = ref(props.src);

const handleLoad = () => {
  isLoading.value = false;
};

const handleError = () => {
  isLoading.value = false;
  hasError.value = true;
  if (props.fallback) {
    imageSrc.value = props.fallback;
  }
};

const containerClasses = computed(() => {
  return [
    'relative overflow-hidden bg-neutral-100 dark:bg-neutral-800 rounded-lg transition-all duration-300',
    props.class,
  ].join(' ');
});

const imageClasses = computed(() => {
  return [
    'w-full h-full transition-opacity duration-500',
    props.objectFit === 'cover' ? 'object-cover' : '',
    props.objectFit === 'contain' ? 'object-contain' : '',
    props.objectFit === 'fill' ? 'object-fill' : '',
    props.objectFit === 'none' ? 'object-none' : '',
    props.objectFit === 'scale-down' ? 'object-scale-down' : '',
    isLoading.value ? 'opacity-0' : 'opacity-100',
  ].join(' ');
});

const containerStyle = computed(() => {
  if (!props.aspectRatio) return {};
  
  // Handle common ratios like "16/9", "4/3", "1/1"
  if (props.aspectRatio.includes('/')) {
    const [w, h] = props.aspectRatio.split('/').map(Number);
    return { aspectRatio: `${w} / ${h}` };
  }
  
  return { aspectRatio: props.aspectRatio };
});
</script>

<template>
  <div :class="containerClasses" :style="containerStyle">
    <Skeleton
      v-if="isLoading"
      class="absolute inset-0 w-full h-full"
    />
    
    <div
      v-if="hasError && !fallback"
      class="absolute inset-0 flex flex-col items-center justify-center text-neutral-400 gap-2 p-4"
    >
      <i class="ri-image-line text-3xl"></i>
      <span class="text-xs text-center">Failed to load image</span>
    </div>

    <img
      v-else
      :src="imageSrc"
      :alt="alt"
      :loading="lazy ? 'lazy' : 'eager'"
      :class="imageClasses"
      @load="handleLoad"
      @error="handleError"
    />
  </div>
</template>

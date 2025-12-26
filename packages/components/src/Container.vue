<script setup lang="ts">
import { computed } from 'vue';

export interface ContainerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: boolean;
}

const props = withDefaults(defineProps<ContainerProps>(), {
  size: 'lg',
  padding: true,
});

const containerClasses = computed(() => {
  const sizes = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    xl: 'max-w-[90rem]',
    full: 'max-w-full',
  };

  return [
    'mx-auto w-full',
    sizes[props.size],
    props.padding ? 'px-4 sm:px-6 lg:px-8' : '',
  ].join(' ');
});
</script>

<template>
  <div :class="containerClasses">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

export interface SectionProps {
  padding?: 'none' | 'sm' | 'md' | 'lg';
  background?: 'none' | 'subtle' | 'card';
}

const props = withDefaults(defineProps<SectionProps>(), {
  padding: 'lg',
  background: 'none',
});

const sectionClasses = computed(() => {
  const paddings = {
    none: 'py-0',
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
  };

  const backgrounds = {
    none: '',
    subtle: 'bg-neutral-50 dark:bg-neutral-900',
    card: 'bg-white dark:bg-neutral-950',
  };

  return [
    'w-full',
    paddings[props.padding],
    backgrounds[props.background],
  ].join(' ');
});
</script>

<template>
  <section :class="sectionClasses">
    <slot />
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';

export interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'caption' | 'label';
  as?: string;
}

const props = withDefaults(defineProps<TypographyProps>(), {
  variant: 'body',
});

const component = computed(() => {
  if (props.as) return props.as;
  if (props.variant.startsWith('h')) return props.variant;
  return 'p';
});

const typographyClasses = computed(() => {
  const variants = {
    h1: 'text-6xl font-bold font-heading text-neutral-900 dark:text-neutral-100',
    h2: 'text-5xl font-bold font-heading text-neutral-900 dark:text-neutral-100',
    h3: 'text-4xl font-semibold font-heading text-neutral-900 dark:text-neutral-100',
    h4: 'text-3xl font-semibold font-heading text-neutral-900 dark:text-neutral-100',
    h5: 'text-2xl font-medium font-heading text-neutral-900 dark:text-neutral-100',
    h6: 'text-xl font-medium font-heading text-neutral-900 dark:text-neutral-100',
    body: 'text-base font-body text-neutral-700 dark:text-neutral-300',
    caption: 'text-sm font-body text-neutral-600 dark:text-neutral-400',
    label: 'text-sm font-medium font-body text-neutral-700 dark:text-neutral-300',
  };

  return variants[props.variant];
});
</script>

<template>
  <component :is="component" :class="typographyClasses">
    <slot />
  </component>
</template>

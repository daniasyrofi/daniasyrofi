<script setup lang="ts">
import { computed } from 'vue';

export interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'small' | 'caption' | 'label';
  as?: string;
  muted?: boolean;
}

const props = withDefaults(defineProps<TypographyProps>(), {
  variant: 'body',
  muted: false,
});

const component = computed(() => {
  if (props.as) return props.as;
  if (props.variant.startsWith('h')) return props.variant;
  return 'p';
});

const typographyClasses = computed(() => {
  const variants = {
    h1: 'text-5xl sm:text-6xl font-semibold font-heading tracking-tight text-neutral-900 dark:text-neutral-100',
    h2: 'text-4xl sm:text-5xl font-semibold font-heading tracking-tight text-neutral-900 dark:text-neutral-100',
    h3: 'text-3xl sm:text-4xl font-semibold font-heading tracking-tight text-neutral-900 dark:text-neutral-100',
    h4: 'text-2xl sm:text-3xl font-semibold font-heading tracking-tight text-neutral-900 dark:text-neutral-100',
    h5: 'text-xl sm:text-2xl font-medium font-heading text-neutral-900 dark:text-neutral-100',
    h6: 'text-lg sm:text-xl font-medium font-heading text-neutral-900 dark:text-neutral-100',
    body: 'text-base font-body leading-relaxed text-neutral-700 dark:text-neutral-300',
    small: 'text-sm font-body leading-relaxed text-neutral-700 dark:text-neutral-300',
    caption: 'text-xs font-body leading-relaxed text-neutral-600 dark:text-neutral-400',
    label: 'text-sm font-medium font-body text-neutral-800 dark:text-neutral-200',
  };

  return [
    variants[props.variant],
    props.muted ? 'text-neutral-500 dark:text-neutral-400' : '',
  ].join(' ').trim();
});
</script>

<template>
  <component :is="component" :class="typographyClasses">
    <slot />
  </component>
</template>

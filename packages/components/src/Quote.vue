<script setup lang="ts">
import { computed } from 'vue';

export interface QuoteProps {
  author?: string;
  source?: string;
  variant?: 'default' | 'brand';
  class?: string;
}

const props = withDefaults(defineProps<QuoteProps>(), {
  variant: 'default',
});

const classes = computed(() => {
  return [
    'pl-6 border-l-4 py-1 italic transition-all duration-200',
    props.variant === 'brand' 
      ? 'border-brand-primary text-neutral-800 dark:text-neutral-200' 
      : 'border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400',
    props.class,
  ].join(' ');
});
</script>

<template>
  <blockquote :class="classes">
    <div class="text-lg leading-relaxed mb-3">
      <slot />
    </div>
    <footer v-if="author || source" class="not-italic flex items-center gap-2 text-sm">
      <cite v-if="author" class="font-semibold text-neutral-900 dark:text-neutral-100">
        {{ author }}
      </cite>
      <span v-if="author && source" class="text-neutral-400">—</span>
      <cite v-if="source" class="text-neutral-500 dark:text-neutral-400">
        {{ source }}
      </cite>
    </footer>
  </blockquote>
</template>

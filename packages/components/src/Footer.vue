<script setup lang="ts">
import { computed } from 'vue';
import Container from './Container.vue';

export interface FooterProps {
  bordered?: boolean;
  class?: string;
}

const props = withDefaults(defineProps<FooterProps>(), {
  bordered: true,
});

const classes = computed(() => {
  return [
    'w-full bg-white dark:bg-neutral-900 transition-all duration-200',
    props.bordered ? 'border-t border-neutral-200 dark:border-neutral-800' : '',
    props.class,
  ].join(' ');
});
</script>

<template>
  <footer :class="classes">
    <Container class="py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div class="space-y-4">
          <slot name="brand" />
        </div>
        <slot />
      </div>
      
      <div class="mt-12 pt-8 border-t border-neutral-100 dark:border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-sm text-neutral-500 dark:text-neutral-400">
          <slot name="copyright" />
        </p>
        <div class="flex items-center gap-6">
          <slot name="bottom-links" />
        </div>
      </div>
    </Container>
  </footer>
</template>

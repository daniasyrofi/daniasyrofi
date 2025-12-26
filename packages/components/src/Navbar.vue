<script setup lang="ts">
import { computed } from 'vue';
import Container from './Container.vue';

export interface NavbarProps {
  sticky?: boolean;
  bordered?: boolean;
  class?: string;
}

const props = withDefaults(defineProps<NavbarProps>(), {
  sticky: false,
  bordered: true,
});

const classes = computed(() => {
  return [
    'w-full bg-white dark:bg-neutral-900 transition-all duration-200 z-50',
    props.sticky ? 'sticky top-0' : 'relative',
    props.bordered ? 'border-b border-neutral-200 dark:border-neutral-800' : '',
    props.class,
  ].join(' ');
});
</script>

<template>
  <nav :class="classes">
    <Container class="h-16 flex items-center justify-between gap-4">
      <div class="flex items-center gap-8">
        <slot name="logo" />
        <div class="hidden md:flex items-center gap-1">
          <slot name="links" />
        </div>
      </div>
      
      <div class="flex items-center gap-4">
        <slot name="actions" />
        <div class="md:hidden">
          <slot name="mobile-menu" />
        </div>
      </div>
    </Container>
  </nav>
</template>

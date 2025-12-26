<script setup lang="ts">
import { computed } from 'vue';

export interface SidebarProps {
  collapsed?: boolean;
  width?: string;
  collapsedWidth?: string;
  bordered?: boolean;
  class?: string;
}

const props = withDefaults(defineProps<SidebarProps>(), {
  collapsed: false,
  width: '280px',
  collapsedWidth: '80px',
  bordered: true,
});

const classes = computed(() => {
  return [
    'h-full bg-white dark:bg-neutral-900 transition-all duration-300 overflow-hidden flex flex-col',
    props.bordered ? 'border-r border-neutral-200 dark:border-neutral-800' : '',
    props.class,
  ].join(' ');
});

const style = computed(() => ({
  width: props.collapsed ? props.collapsedWidth : props.width,
}));
</script>

<template>
  <aside :class="classes" :style="style">
    <div class="p-4 border-b border-neutral-100 dark:border-neutral-800">
      <slot name="header" />
    </div>
    
    <div class="flex-grow overflow-y-auto py-4">
      <slot />
    </div>

    <div class="p-4 border-t border-neutral-100 dark:border-neutral-800">
      <slot name="footer" />
    </div>
  </aside>
</template>

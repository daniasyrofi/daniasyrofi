<script setup lang="ts">
import { computed } from 'vue';

export interface ListItemProps {
  class?: string;
  interactive?: boolean;
  active?: boolean;
  disabled?: boolean;
}

const props = withDefaults(defineProps<ListItemProps>(), {
  interactive: false,
  active: false,
  disabled: false,
});

const classes = computed(() => {
  return [
    'flex items-center gap-4 px-4 py-3 transition-colors',
    props.interactive && !props.disabled ? 'cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-900' : '',
    props.active ? 'bg-neutral-100 dark:bg-neutral-900 text-brand-primary font-medium' : 'text-neutral-900 dark:text-neutral-100',
    props.disabled ? 'opacity-50 cursor-not-allowed' : '',
    props.class,
  ];
});
</script>

<template>
  <li :class="classes">
    <div v-if="$slots.icon" class="flex-shrink-0">
      <slot name="icon" />
    </div>
    <div class="flex-1 min-w-0">
      <slot />
    </div>
    <div v-if="$slots.action" class="flex-shrink-0">
      <slot name="action" />
    </div>
  </li>
</template>

<script setup lang="ts">
export interface TableCaptionProps {
  class?: string;
}

defineProps<TableCaptionProps>();
</script>

<template>
  <caption :class="['mt-4 text-sm text-neutral-500 dark:text-neutral-400', $props.class]">
    <slot />
  </caption>
</template>

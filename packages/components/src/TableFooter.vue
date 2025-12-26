<script setup lang="ts">
export interface TableFooterProps {
  class?: string;
}

defineProps<TableFooterProps>();
</script>

<template>
  <tfoot :class="['border-t bg-neutral-100/50 dark:bg-neutral-800/50 font-medium [&>tr]:last:border-b-0', $props.class]">
    <slot />
  </tfoot>
</template>

<script setup lang="ts">
export interface TableRowProps {
  class?: string;
}

defineProps<TableRowProps>();
</script>

<template>
  <tr :class="['border-b border-neutral-200 dark:border-neutral-800 transition-colors hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50 data-[state=selected]:bg-neutral-100 dark:data-[state=selected]:bg-neutral-800', $props.class]">
    <slot />
  </tr>
</template>

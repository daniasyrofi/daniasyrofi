<script setup lang="ts">
export interface TableHeadProps {
  class?: string;
}

defineProps<TableHeadProps>();
</script>

<template>
  <th :class="['h-12 px-4 text-left align-middle font-medium text-neutral-500 dark:text-neutral-400 [&:has([role=checkbox])]:pr-0', $props.class]">
    <slot />
  </th>
</template>

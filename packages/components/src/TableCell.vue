<script setup lang="ts">
export interface TableCellProps {
  class?: string;
}

defineProps<TableCellProps>();
</script>

<template>
  <td :class="['p-4 align-middle [&:has([role=checkbox])]:pr-0', $props.class]">
    <slot />
  </td>
</template>

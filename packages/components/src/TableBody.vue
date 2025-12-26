<script setup lang="ts">
export interface TableBodyProps {
  class?: string;
}

defineProps<TableBodyProps>();
</script>

<template>
  <tbody :class="['[&_tr:last-child]:border-0', $props.class]">
    <slot />
  </tbody>
</template>

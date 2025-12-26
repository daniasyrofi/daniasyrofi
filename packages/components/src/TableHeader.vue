<script setup lang="ts">
export interface TableHeaderProps {
  class?: string;
}

defineProps<TableHeaderProps>();
</script>

<template>
  <thead :class="['[&_tr]:border-b bg-neutral-50/50 dark:bg-neutral-900/50', $props.class]">
    <slot />
  </thead>
</template>

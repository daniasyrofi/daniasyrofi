<script setup lang="ts">
export interface TableProps {
  class?: string;
}

defineProps<TableProps>();
</script>

<template>
  <div class="relative w-full overflow-auto">
    <table :class="['w-full caption-bottom text-sm', $props.class]">
      <slot />
    </table>
  </div>
</template>

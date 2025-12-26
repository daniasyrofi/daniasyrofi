<script setup lang="ts">
export interface DialogBodyProps {
  class?: string;
}

defineProps<DialogBodyProps>();
</script>

<template>
  <div :class="['flex-1 overflow-y-auto px-6 py-4', $props.class]">
    <slot />
  </div>
</template>

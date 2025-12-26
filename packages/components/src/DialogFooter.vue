<script setup lang="ts">
export interface DialogFooterProps {
  class?: string;
}

defineProps<DialogFooterProps>();
</script>

<template>
  <div :class="['flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 px-6 py-4 border-t border-neutral-200 dark:border-neutral-800', $props.class]">
    <slot />
  </div>
</template>

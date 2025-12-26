<script setup lang="ts">
export interface DialogHeaderProps {
  class?: string;
}

defineProps<DialogHeaderProps>();
</script>

<template>
  <div :class="['flex flex-col space-y-1.5 text-center sm:text-left px-6 py-4', $props.class]">
    <slot />
  </div>
</template>

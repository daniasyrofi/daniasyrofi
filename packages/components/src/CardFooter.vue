<script setup lang="ts">
export interface CardFooterProps {
  class?: string;
}

defineProps<CardFooterProps>();
</script>

<template>
  <div :class="['flex items-center p-6 pt-0', $props.class]">
    <slot />
  </div>
</template>

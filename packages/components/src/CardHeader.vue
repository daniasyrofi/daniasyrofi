<script setup lang="ts">
export interface CardHeaderProps {
  class?: string;
}

defineProps<CardHeaderProps>();
</script>

<template>
  <div :class="['flex flex-col space-y-1.5 p-6', $props.class]">
    <slot />
  </div>
</template>

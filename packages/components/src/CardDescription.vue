<script setup lang="ts">
export interface CardDescriptionProps {
  class?: string;
}

defineProps<CardDescriptionProps>();
</script>

<template>
  <p :class="['text-sm text-neutral-500 dark:text-neutral-400', $props.class]">
    <slot />
  </p>
</template>

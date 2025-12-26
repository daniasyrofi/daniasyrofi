<script setup lang="ts">
export interface CardBodyProps {
  class?: string;
}

defineProps<CardBodyProps>();
</script>

<template>
  <div :class="['p-6 pt-0', $props.class]">
    <slot />
  </div>
</template>

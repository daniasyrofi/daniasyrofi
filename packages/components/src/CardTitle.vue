<script setup lang="ts">
export interface CardTitleProps {
  class?: string;
  as?: string;
}

withDefaults(defineProps<CardTitleProps>(), {
  as: 'h3',
});
</script>

<template>
  <component
    :is="as"
    :class="['text-2xl font-semibold leading-none tracking-tight text-neutral-900 dark:text-neutral-100', $props.class]"
  >
    <slot />
  </component>
</template>

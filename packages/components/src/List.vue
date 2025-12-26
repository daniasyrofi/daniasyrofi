<script setup lang="ts">
export interface ListProps {
  class?: string;
  ordered?: boolean;
}

withDefaults(defineProps<ListProps>(), {
  ordered: false,
});
</script>

<template>
  <component
    :is="ordered ? 'ol' : 'ul'"
    :class="[
      'list-none p-0 m-0 divide-y divide-neutral-200 dark:divide-neutral-800 border-y border-neutral-200 dark:border-neutral-800',
      $props.class
    ]"
  >
    <slot />
  </component>
</template>

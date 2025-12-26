<script setup lang="ts">
export interface FormGroupProps {
  title?: string;
  description?: string;
  class?: string;
}

defineProps<FormGroupProps>();
</script>

<template>
  <fieldset :class="['space-y-4', $props.class]">
    <div v-if="title || description" class="space-y-1">
      <legend v-if="title" class="text-lg font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
        {{ title }}
      </legend>
      <p v-if="description" class="text-sm text-neutral-500 dark:text-neutral-400">
        {{ description }}
      </p>
    </div>
    <div class="space-y-4">
      <slot />
    </div>
  </fieldset>
</template>

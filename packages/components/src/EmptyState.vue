<script setup lang="ts">
export interface EmptyStateProps {
  icon?: string;
  title: string;
  description?: string;
}

defineProps<EmptyStateProps>();
</script>

<template>
  <div class="flex flex-col items-center justify-center p-12 text-center">
    <div v-if="icon" class="mb-4 text-5xl text-neutral-300 dark:text-neutral-700">
      <i :class="icon" />
    </div>
    <h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
      {{ title }}
    </h3>
    <p v-if="description" class="text-sm text-neutral-600 dark:text-neutral-400 max-w-md mb-6">
      {{ description }}
    </p>
    <div v-if="$slots.actions">
      <slot name="actions" />
    </div>
  </div>
</template>

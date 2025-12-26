<script setup lang="ts">
import { computed } from 'vue';

export interface FormFieldProps {
  label?: string;
  description?: string;
  error?: string;
  required?: boolean;
  class?: string;
  id?: string;
}

const props = defineProps<FormFieldProps>();

const hasError = computed(() => !!props.error);
</script>

<template>
  <div :class="['space-y-2', props.class]">
    <div v-if="label" class="flex items-center justify-between">
      <label
        :for="id"
        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-neutral-900 dark:text-neutral-100"
      >
        {{ label }}
        <span v-if="required" class="text-destructive">*</span>
      </label>
    </div>
    <div class="relative">
      <slot :id="id" :has-error="hasError" />
    </div>
    <p
      v-if="description && !error"
      class="text-[0.8rem] text-neutral-500 dark:text-neutral-400"
    >
      {{ description }}
    </p>
    <p
      v-if="error"
      class="text-[0.8rem] font-medium text-destructive"
    >
      {{ error }}
    </p>
  </div>
</template>

<script setup lang="ts">
export interface FormProps {
  class?: string;
}

defineProps<FormProps>();

const emit = defineEmits<{
  'submit': [event: Event];
  'reset': [event: Event];
}>();

const handleSubmit = (event: Event) => {
  event.preventDefault();
  emit('submit', event);
};

const handleReset = (event: Event) => {
  emit('reset', event);
};
</script>

<template>
  <form :class="class" @submit="handleSubmit" @reset="handleReset">
    <slot />
  </form>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

export interface CollapsibleProps {
  open?: boolean;
  class?: string;
}

const props = withDefaults(defineProps<CollapsibleProps>(), {
  open: false,
});

const emit = defineEmits<{
  'update:open': [value: boolean];
}>();

const isOpen = ref(props.open);

watch(() => props.open, (val) => {
  isOpen.value = val;
});

const toggle = () => {
  isOpen.value = !isOpen.value;
  emit('update:open', isOpen.value);
};
</script>

<template>
  <div :class="props.class">
    <slot :is-open="isOpen" :toggle="toggle" />
  </div>
</template>

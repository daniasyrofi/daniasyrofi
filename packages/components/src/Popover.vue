<script setup lang="ts">
import { ref, onMounted, onUnmounted, provide } from 'vue';

export interface PopoverProps {
  class?: string;
}

const props = defineProps<PopoverProps>();

const isOpen = ref(false);
const popoverRef = ref<HTMLElement | null>(null);

const toggle = () => {
  isOpen.value = !isOpen.value;
};

const close = () => {
  isOpen.value = false;
};

const handleClickOutside = (event: MouseEvent) => {
  if (popoverRef.value && !popoverRef.value.contains(event.target as Node)) {
    close();
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});

provide('popover', {
  isOpen,
  toggle,
  close,
});
</script>

<template>
  <div ref="popoverRef" :class="['relative inline-block', props.class]">
    <slot :is-open="isOpen" :toggle="toggle" :close="close" />
  </div>
</template>

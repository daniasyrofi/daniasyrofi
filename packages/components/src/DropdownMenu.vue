<script setup lang="ts">
import { ref, onMounted, onUnmounted, provide } from 'vue';

export interface DropdownMenuProps {
  align?: 'left' | 'right';
  class?: string;
}

const props = withDefaults(defineProps<DropdownMenuProps>(), {
  align: 'left',
});

const isOpen = ref(false);
const dropdownRef = ref<HTMLElement | null>(null);

const toggle = () => {
  isOpen.value = !isOpen.value;
};

const close = () => {
  isOpen.value = false;
};

const handleClickOutside = (event: MouseEvent) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    close();
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});

provide('dropdown', {
  isOpen,
  toggle,
  close,
});

defineExpose({
  isOpen,
  toggle,
  close,
});
</script>

<template>
  <div ref="dropdownRef" :class="['relative inline-block text-left', props.class]">
    <slot :is-open="isOpen" :toggle="toggle" :close="close" />
  </div>
</template>

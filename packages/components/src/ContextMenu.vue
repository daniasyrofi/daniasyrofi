<script setup lang="ts">
import { ref, onMounted, onUnmounted, provide } from 'vue';

export interface ContextMenuProps {
  class?: string;
}

const props = defineProps<ContextMenuProps>();

const isOpen = ref(false);
const position = ref({ x: 0, y: 0 });
const menuRef = ref<HTMLElement | null>(null);

const open = (e: MouseEvent) => {
  e.preventDefault();
  position.value = { x: e.clientX, y: e.clientY };
  isOpen.value = true;
};

const close = () => {
  isOpen.value = false;
};

const handleClickOutside = (event: MouseEvent) => {
  if (menuRef.value && !menuRef.value.contains(event.target as Node)) {
    close();
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
  document.addEventListener('scroll', close);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
  document.removeEventListener('scroll', close);
});

provide('context-menu', {
  isOpen,
  close,
});

defineExpose({
  open,
  close,
});
</script>

<template>
  <div @contextmenu="open" :class="props.class">
    <slot />
    
    <Teleport to="body">
      <Transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
      >
        <div
          v-if="isOpen"
          ref="menuRef"
          :style="{
            position: 'fixed',
            left: `${position.x}px`,
            top: `${position.y}px`,
            zIndex: 1000,
          }"
          class="min-w-[8rem] overflow-hidden rounded-md border border-neutral-200 bg-white p-1 text-neutral-950 shadow-md dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50"
        >
          <slot name="menu" :close="close" />
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

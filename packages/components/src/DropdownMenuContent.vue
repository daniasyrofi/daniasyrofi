<script setup lang="ts">
import { inject, computed } from 'vue';

export interface DropdownMenuContentProps {
  align?: 'left' | 'right';
  class?: string;
  width?: string;
}

const props = withDefaults(defineProps<DropdownMenuContentProps>(), {
  align: 'left',
  width: 'w-56',
});

const dropdown = inject<any>('dropdown');

const classes = computed(() => {
  return [
    'absolute z-50 mt-2 origin-top-right rounded-md bg-white dark:bg-neutral-950 p-1 text-neutral-900 dark:text-neutral-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border border-neutral-200 dark:border-neutral-800',
    props.align === 'right' ? 'right-0' : 'left-0',
    props.width,
    props.class,
  ];
});
</script>

<template>
  <Transition
    enter-active-class="transition ease-out duration-100"
    enter-from-class="transform opacity-0 scale-95"
    enter-to-class="transform opacity-100 scale-100"
    leave-active-class="transition ease-in duration-75"
    leave-from-class="transform opacity-100 scale-100"
    leave-to-class="transform opacity-0 scale-95"
  >
    <div v-if="dropdown?.isOpen.value" :class="classes">
      <slot />
    </div>
  </Transition>
</template>

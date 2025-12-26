<script setup lang="ts">
import { inject, computed } from 'vue';

export interface PopoverContentProps {
  align?: 'left' | 'right' | 'center';
  width?: string;
  class?: string;
}

const props = withDefaults(defineProps<PopoverContentProps>(), {
  align: 'center',
  width: 'w-72',
});

const popover = inject<any>('popover');

const alignClasses = {
  left: 'left-0 origin-top-left',
  right: 'right-0 origin-top-right',
  center: 'left-1/2 -translate-x-1/2 origin-top',
};

const classes = computed(() => {
  return [
    'absolute z-50 mt-2 rounded-md bg-white dark:bg-neutral-950 p-4 text-neutral-900 dark:text-neutral-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border border-neutral-200 dark:border-neutral-800',
    alignClasses[props.align],
    props.width,
    props.class,
  ];
});
</script>

<template>
  <Transition
    enter-active-class="transition ease-out duration-200"
    enter-from-class="transform opacity-0 scale-95"
    enter-to-class="transform opacity-100 scale-100"
    leave-active-class="transition ease-in duration-150"
    leave-from-class="transform opacity-100 scale-100"
    leave-to-class="transform opacity-0 scale-95"
  >
    <div v-if="popover?.isOpen.value" :class="classes">
      <slot />
    </div>
  </Transition>
</template>

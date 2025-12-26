<script setup lang="ts">
import { inject } from 'vue';

export interface DropdownMenuItemProps {
  disabled?: boolean;
  class?: string;
  icon?: string;
  inset?: boolean;
}

const props = withDefaults(defineProps<DropdownMenuItemProps>(), {
  disabled: false,
  inset: false,
});

const dropdown = inject<any>('dropdown');

const handleClick = (e: MouseEvent) => {
  if (props.disabled) {
    e.preventDefault();
    return;
  }
  dropdown?.close();
};
</script>

<template>
  <div
    :class="[
      'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:bg-neutral-100 dark:focus:bg-neutral-800 data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      inset && 'pl-8',
      props.class
    ]"
    :data-disabled="disabled ? '' : undefined"
    @click="handleClick"
  >
    <i v-if="icon" :class="[icon, 'mr-2 h-4 w-4']" />
    <slot />
  </div>
</template>

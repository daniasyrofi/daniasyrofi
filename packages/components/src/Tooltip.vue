<script setup lang="ts">
import { computed, ref } from 'vue';

export interface TooltipProps {
  text: string;
  placement?: 'top' | 'bottom' | 'left' | 'right';
}

const props = withDefaults(defineProps<TooltipProps>(), {
  placement: 'top',
});

const open = ref(false);

const tooltipClasses = computed(() => {
  const placement = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  };

  return [
    'absolute z-30 whitespace-nowrap',
    'px-3 py-1.5 rounded-lg text-xs font-medium',
    'bg-neutral-900 text-white shadow-lg',
    'transition-all duration-150',
    placement[props.placement],
    open.value ? 'opacity-100 translate-y-0' : 'opacity-0 pointer-events-none translate-y-0.5',
  ].join(' ');
});
</script>

<template>
  <span
    class="relative inline-flex"
    @mouseenter="open = true"
    @mouseleave="open = false"
    @focusin="open = true"
    @focusout="open = false"
  >
    <slot />
    <span role="tooltip" :class="tooltipClasses">
      {{ text }}
    </span>
  </span>
</template>

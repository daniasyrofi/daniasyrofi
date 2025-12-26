<script setup lang="ts">
import { computed } from 'vue';

export interface AvatarGroupProps {
  max?: number;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  overlap?: 'sm' | 'md' | 'lg';
  class?: string;
}

const props = withDefaults(defineProps<AvatarGroupProps>(), {
  max: 5,
  size: 'md',
  overlap: 'md',
});

const overlapClasses = {
  sm: '-space-x-2',
  md: '-space-x-3',
  lg: '-space-x-4',
};

const classes = computed(() => {
  return [
    'flex items-center',
    overlapClasses[props.overlap],
    props.class,
  ].join(' ');
});

const slots = defineSlots<{
  default(): any;
}>();

// This is a bit tricky in Vue to count slots, but we can use a simpler approach
// by assuming children are Avatar components.
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>

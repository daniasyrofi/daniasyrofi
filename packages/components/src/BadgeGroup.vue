<script setup lang="ts">
import { computed } from 'vue';

export interface BadgeGroupProps {
  gap?: 'sm' | 'md';
  wrap?: boolean;
}

const props = withDefaults(defineProps<BadgeGroupProps>(), {
  gap: 'sm',
  wrap: true,
});

const groupClasses = computed(() => {
  const gaps = {
    sm: 'gap-2',
    md: 'gap-3',
  };

  return [
    'flex items-center',
    props.wrap ? 'flex-wrap' : 'flex-nowrap',
    gaps[props.gap],
  ].join(' ');
});
</script>

<template>
  <div :class="groupClasses">
    <slot />
  </div>
</template>

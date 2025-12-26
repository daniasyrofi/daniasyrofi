<script setup lang="ts">
import { computed } from 'vue';

export interface ResponsiveProps {
  show?: 'sm' | 'md' | 'lg' | 'xl' | 'mobile' | 'desktop';
  hide?: 'sm' | 'md' | 'lg' | 'xl' | 'mobile' | 'desktop';
  class?: string;
}

const props = defineProps<ResponsiveProps>();

const classes = computed(() => {
  const showClasses = {
    sm: 'hidden sm:block',
    md: 'hidden md:block',
    lg: 'hidden lg:block',
    xl: 'hidden xl:block',
    mobile: 'block md:hidden',
    desktop: 'hidden md:block',
  };

  const hideClasses = {
    sm: 'sm:hidden',
    md: 'md:hidden',
    lg: 'lg:hidden',
    xl: 'xl:hidden',
    mobile: 'hidden md:block',
    desktop: 'block md:hidden',
  };

  return [
    props.show ? showClasses[props.show] : '',
    props.hide ? hideClasses[props.hide] : '',
    props.class,
  ].join(' ');
});
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>

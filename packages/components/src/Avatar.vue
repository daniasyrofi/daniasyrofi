<script setup lang="ts">
import { computed } from 'vue';

export interface AvatarProps {
  src?: string;
  alt?: string;
  initials?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

const props = withDefaults(defineProps<AvatarProps>(), {
  size: 'md',
  alt: 'Avatar',
});

const sizes = {
  xs: 'h-6 w-6 text-xs',
  sm: 'h-8 w-8 text-sm',
  md: 'h-10 w-10 text-base',
  lg: 'h-12 w-12 text-lg',
  xl: 'h-16 w-16 text-xl',
  '2xl': 'h-24 w-24 text-3xl',
};

const avatarClasses = computed(() => [
  'inline-flex items-center justify-center rounded-full',
  'bg-neutral-200 dark:bg-neutral-800',
  'text-neutral-700 dark:text-neutral-300',
  'font-medium select-none overflow-hidden',
  sizes[props.size],
].join(' '));

const displayInitials = computed(() => {
  if (!props.initials) return '';
  return props.initials.slice(0, 2).toUpperCase();
});
</script>

<template>
  <div :class="avatarClasses">
    <img
      v-if="src"
      :src="src"
      :alt="alt"
      class="h-full w-full object-cover"
    />
    <span v-else-if="initials">{{ displayInitials }}</span>
    <span v-else>
      <i class="ri-user-line" />
    </span>
  </div>
</template>

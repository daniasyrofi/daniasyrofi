<script setup lang="ts">
import { computed } from 'vue';

export interface LinkProps {
  href?: string;
  to?: string | object;
  external?: boolean;
  variant?: 'default' | 'brand' | 'muted';
  underline?: 'none' | 'hover' | 'always';
  icon?: string;
  iconPosition?: 'left' | 'right';
  class?: string;
}

const props = withDefaults(defineProps<LinkProps>(), {
  external: false,
  variant: 'brand',
  underline: 'hover',
  iconPosition: 'right',
});

const isExternal = computed(() => props.external || (typeof props.href === 'string' && props.href.startsWith('http')));

const classes = computed(() => {
  const variants = {
    default: 'text-neutral-900 dark:text-neutral-100',
    brand: 'text-brand-primary hover:text-brand-dark dark:hover:text-brand-light',
    muted: 'text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200',
  };

  const underlines = {
    none: 'no-underline',
    hover: 'no-underline hover:underline',
    always: 'underline',
  };

  return [
    'inline-flex items-center gap-1 font-medium transition-all duration-200',
    variants[props.variant],
    underlines[props.underline],
    props.class,
  ].join(' ');
});

const componentType = computed(() => {
  if (props.to) return 'router-link';
  return 'a';
});

const linkProps = computed(() => {
  if (props.to) return { to: props.to };
  return {
    href: props.href,
    target: isExternal.value ? '_blank' : undefined,
    rel: isExternal.value ? 'noopener noreferrer' : undefined,
  };
});
</script>

<template>
  <component :is="componentType" v-bind="linkProps" :class="classes">
    <i v-if="icon && iconPosition === 'left'" :class="[icon, 'text-[1.1em]']"></i>
    <slot />
    <i v-if="icon && iconPosition === 'right'" :class="[icon, 'text-[1.1em]']"></i>
    <i v-if="isExternal && !icon" class="ri-external-link-line text-[0.9em] ml-0.5 opacity-70"></i>
  </component>
</template>

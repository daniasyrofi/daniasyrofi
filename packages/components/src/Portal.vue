<script setup lang="ts">
export interface PortalProps {
  to?: string;
  disabled?: boolean;
}

withDefaults(defineProps<PortalProps>(), {
  to: 'body',
  disabled: false,
});
</script>

<template>
  <Teleport :to="to" :disabled="disabled">
    <slot />
  </Teleport>
</template>

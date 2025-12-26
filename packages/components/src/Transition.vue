<script setup lang="ts">
import { computed } from 'vue';

export interface TransitionProps {
  name?: 'fade' | 'slide-up' | 'slide-down' | 'scale' | 'zoom';
  mode?: 'in-out' | 'out-in' | 'default';
  duration?: number;
}

const props = withDefaults(defineProps<TransitionProps>(), {
  name: 'fade',
  mode: 'out-in',
});

const transitionName = computed(() => `v-${props.name}`);
</script>

<template>
  <Transition :name="transitionName" :mode="mode === 'default' ? undefined : mode">
    <slot />
  </Transition>
</template>

<style>
/* Fade */
.v-fade-enter-active,
.v-fade-leave-active {
  transition: opacity 0.2s ease;
}
.v-fade-enter-from,
.v-fade-leave-to {
  opacity: 0;
}

/* Slide Up */
.v-slide-up-enter-active,
.v-slide-up-leave-active {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.v-slide-up-enter-from,
.v-slide-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

/* Slide Down */
.v-slide-down-enter-active,
.v-slide-down-leave-active {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.v-slide-down-enter-from,
.v-slide-down-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Scale */
.v-scale-enter-active,
.v-scale-leave-active {
  transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.v-scale-enter-from,
.v-scale-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

/* Zoom */
.v-zoom-enter-active,
.v-zoom-leave-active {
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.v-zoom-enter-from,
.v-zoom-leave-to {
  opacity: 0;
  transform: scale(1.1);
}
</style>

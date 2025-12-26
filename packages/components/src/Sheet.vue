<script setup lang="ts">
import { onBeforeUnmount, onMounted, watch } from 'vue';

export interface SheetProps {
  open?: boolean;
  side?: 'top' | 'bottom' | 'left' | 'right';
  class?: string;
}

const props = withDefaults(defineProps<SheetProps>(), {
  open: false,
  side: 'right',
});

const emit = defineEmits<{
  'update:open': [value: boolean];
  close: [];
}>();

const sideClasses = {
  top: 'inset-x-0 top-0 border-b',
  bottom: 'inset-x-0 bottom-0 border-t',
  left: 'inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm',
  right: 'inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm',
};

const transitionClasses = {
  top: {
    enter: 'translate-y-[-100%]',
    enterTo: 'translate-y-0',
    leave: 'translate-y-[-100%]',
  },
  bottom: {
    enter: 'translate-y-[100%]',
    enterTo: 'translate-y-0',
    leave: 'translate-y-[100%]',
  },
  left: {
    enter: 'translate-x-[-100%]',
    enterTo: 'translate-x-0',
    leave: 'translate-x-[-100%]',
  },
  right: {
    enter: 'translate-x-[100%]',
    enterTo: 'translate-x-0',
    leave: 'translate-x-[100%]',
  },
};

const onBackdropClick = (event: MouseEvent) => {
  if (event.target === event.currentTarget) {
    emit('update:open', false);
    emit('close');
  }
};

const onEscape = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && props.open) {
    emit('update:open', false);
    emit('close');
  }
};

onMounted(() => {
  document.addEventListener('keydown', onEscape);
});

onBeforeUnmount(() => {
  document.removeEventListener('keydown', onEscape);
});

watch(() => props.open, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}, { immediate: true });
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-300"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="open"
        class="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
        @click="onBackdropClick"
      >
        <Transition
          enter-active-class="transition ease-in-out duration-300"
          :enter-from-class="transitionClasses[side].enter"
          :enter-to-class="transitionClasses[side].enterTo"
          leave-active-class="transition ease-in-out duration-300"
          :leave-from-class="transitionClasses[side].enterTo"
          :leave-to-class="transitionClasses[side].leave"
          appear
        >
          <div
            v-if="open"
            :class="[
              'fixed z-50 bg-white dark:bg-neutral-950 p-6 shadow-2xl transition ease-in-out border-neutral-200 dark:border-neutral-800',
              sideClasses[side],
              props.class
            ]"
            role="dialog"
            aria-modal="true"
            @click.stop
          >
            <button
              type="button"
              class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2 disabled:pointer-events-none dark:ring-offset-neutral-950 dark:focus:ring-neutral-300"
              @click="() => { emit('update:open', false); emit('close'); }"
            >
              <i class="ri-close-line h-5 w-5" />
              <span class="sr-only">Close</span>
            </button>
            <slot />
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

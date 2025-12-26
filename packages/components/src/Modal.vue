<script setup lang="ts">
import { onBeforeUnmount, onMounted, watch } from 'vue';

export interface ModalProps {
  open?: boolean;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  closeOnBackdrop?: boolean;
}

const props = withDefaults(defineProps<ModalProps>(), {
  open: false,
  size: 'md',
  closeOnBackdrop: true,
});

const emit = defineEmits<{
  'update:open': [value: boolean];
  close: [];
}>();

const sizes = {
  sm: 'sm:max-w-sm',
  md: 'sm:max-w-md',
  lg: 'sm:max-w-lg',
  xl: 'sm:max-w-2xl',
  full: 'sm:max-w-full sm:m-4',
};

const onBackdropClick = (event: MouseEvent) => {
  if (!props.closeOnBackdrop) return;
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
      enter-active-class="transition-opacity duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="open"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        @click="onBackdropClick"
      >
        <Transition
          enter-active-class="transition-all duration-200"
          enter-from-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="transition-all duration-150"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
        >
          <div
            v-if="open"
            :class="['w-full bg-white dark:bg-neutral-950 rounded-2xl shadow-2xl flex flex-col max-h-[90vh]', sizes[size]]"
            role="dialog"
            aria-modal="true"
            @click.stop
          >
            <div v-if="title || $slots.header" class="flex items-center justify-between px-6 py-5 border-b border-neutral-200 dark:border-neutral-800">
              <slot name="header">
                <h2 class="text-xl font-semibold font-heading text-neutral-900 dark:text-neutral-100">
                  {{ title }}
                </h2>
              </slot>
              <button
                type="button"
                class="p-2 rounded-lg text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                @click="() => { emit('update:open', false); emit('close'); }"
              >
                <i class="ri-close-line text-xl" />
              </button>
            </div>

            <div class="flex-1 overflow-y-auto px-6 py-6">
              <slot />
            </div>

            <div v-if="$slots.footer" class="px-6 py-4 border-t border-neutral-200 dark:border-neutral-800">
              <slot name="footer" />
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

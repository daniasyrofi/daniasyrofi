<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';

export interface ToastProps {
  open?: boolean;
  title?: string;
  message: string;
  variant?: 'success' | 'warning' | 'error' | 'info';
  duration?: number;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
}

const props = withDefaults(defineProps<ToastProps>(), {
  open: false,
  variant: 'info',
  duration: 5000,
  position: 'top-right',
});

const emit = defineEmits<{
  'update:open': [value: boolean];
  close: [];
}>();

const visible = ref(props.open);

const variants = {
  success: {
    root: 'bg-semantic-success-light text-semantic-success-dark border-semantic-success',
    icon: 'ri-checkbox-circle-line',
  },
  warning: {
    root: 'bg-semantic-warning-light text-semantic-warning-dark border-semantic-warning',
    icon: 'ri-error-warning-line',
  },
  error: {
    root: 'bg-semantic-error-light text-semantic-error-dark border-semantic-error',
    icon: 'ri-close-circle-line',
  },
  info: {
    root: 'bg-semantic-info-light text-semantic-info-dark border-semantic-info',
    icon: 'ri-information-line',
  },
};

const positions = {
  'top-right': 'top-4 right-4',
  'top-left': 'top-4 left-4',
  'bottom-right': 'bottom-4 right-4',
  'bottom-left': 'bottom-4 left-4',
};

const toastClasses = computed(() => [
  'fixed z-50 flex gap-3 items-start',
  'min-w-80 max-w-md p-4 rounded-xl border shadow-lg',
  'transition-all duration-200',
  positions[props.position],
  variants[props.variant].root,
  visible.value ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0',
].join(' '));

const close = () => {
  visible.value = false;
  setTimeout(() => {
    emit('update:open', false);
    emit('close');
  }, 200);
};

let timeoutId: ReturnType<typeof setTimeout> | null = null;

const startTimeout = () => {
  if (timeoutId) clearTimeout(timeoutId);
  if (props.duration > 0) {
    timeoutId = setTimeout(close, props.duration);
  }
};

onMounted(() => {
  visible.value = props.open;
  if (props.open) startTimeout();
});

onBeforeUnmount(() => {
  if (timeoutId) clearTimeout(timeoutId);
});

watch(() => props.open, (isOpen) => {
  visible.value = isOpen;
  if (isOpen) startTimeout();
  else if (timeoutId) clearTimeout(timeoutId);
});
</script>

<template>
  <Teleport to="body">
    <div v-if="open" :class="toastClasses" role="alert">
      <div class="flex-shrink-0 mt-0.5">
        <i :class="variants[variant].icon" class="text-lg" />
      </div>
      <div class="flex-1 min-w-0">
        <h4 v-if="title" class="font-semibold text-sm mb-1">
          {{ title }}
        </h4>
        <p class="text-sm leading-relaxed">
          {{ message }}
        </p>
      </div>
      <button
        type="button"
        class="flex-shrink-0 p-1 rounded-md hover:bg-black/5 transition-colors"
        @click="close"
      >
        <i class="ri-close-line text-lg" />
      </button>
    </div>
  </Teleport>
</template>

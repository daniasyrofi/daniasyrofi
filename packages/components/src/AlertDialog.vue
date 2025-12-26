<script setup lang="ts">
import Modal from './Modal.vue';
import Button from './Button.vue';

export interface AlertDialogProps {
  open?: boolean;
  title: string;
  description: string;
  cancelText?: string;
  actionText?: string;
}

const props = withDefaults(defineProps<AlertDialogProps>(), {
  open: false,
  cancelText: 'Cancel',
  actionText: 'Continue',
});

const emit = defineEmits<{
  'update:open': [value: boolean];
  cancel: [];
  action: [];
}>();

const handleCancel = () => {
  emit('update:open', false);
  emit('cancel');
};

const handleAction = () => {
  emit('action');
};
</script>

<template>
  <Modal :open="open" @update:open="(val) => emit('update:open', val)" size="sm">
    <div class="flex flex-col gap-2">
      <h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100">{{ title }}</h3>
      <p class="text-sm text-neutral-500 dark:text-neutral-400">{{ description }}</p>
    </div>
    <template #footer>
      <div class="flex justify-end gap-3">
        <Button variant="outline" @click="handleCancel">{{ cancelText }}</Button>
        <Button variant="destructive" @click="handleAction">{{ actionText }}</Button>
      </div>
    </template>
  </Modal>
</template>

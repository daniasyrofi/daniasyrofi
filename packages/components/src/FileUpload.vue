<script setup lang="ts">
import { ref } from 'vue';

export interface FileUploadProps {
  accept?: string;
  multiple?: boolean;
  disabled?: boolean;
  label?: string;
  helperText?: string;
  class?: string;
}

const props = withDefaults(defineProps<FileUploadProps>(), {
  multiple: false,
  disabled: false,
});

const emit = defineEmits<{
  'update:modelValue': [files: FileList | null];
  'change': [files: FileList | null];
}>();

const isDragging = ref(false);
const fileInput = ref<HTMLInputElement | null>(null);

const handleDragOver = (e: DragEvent) => {
  if (props.disabled) return;
  e.preventDefault();
  isDragging.value = true;
};

const handleDragLeave = () => {
  isDragging.value = false;
};

const handleDrop = (e: DragEvent) => {
  if (props.disabled) return;
  e.preventDefault();
  isDragging.value = false;
  
  if (e.dataTransfer?.files) {
    emit('update:modelValue', e.dataTransfer.files);
    emit('change', e.dataTransfer.files);
  }
};

const handleChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  if (target.files) {
    emit('update:modelValue', target.files);
    emit('change', target.files);
  }
};

const triggerClick = () => {
  if (props.disabled) return;
  fileInput.value?.click();
};
</script>

<template>
  <div :class="['w-full', props.class]">
    <label v-if="label" class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
      {{ label }}
    </label>
    <div
      :class="[
        'relative flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer transition-colors',
        isDragging ? 'border-brand-primary bg-brand-primary/5' : 'border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-900',
        disabled ? 'opacity-50 cursor-not-allowed bg-neutral-100 dark:bg-neutral-800' : ''
      ]"
      @dragover="handleDragOver"
      @dragleave="handleDragLeave"
      @drop="handleDrop"
      @click="triggerClick"
    >
      <div class="flex flex-col items-center justify-center pt-5 pb-6">
        <i class="ri-upload-cloud-2-line text-3xl text-neutral-400 mb-2" />
        <p class="text-sm text-neutral-500 dark:text-neutral-400">
          <span class="font-semibold">Click to upload</span> or drag and drop
        </p>
      </div>
      <input
        ref="fileInput"
        type="file"
        class="hidden"
        :accept="accept"
        :multiple="multiple"
        :disabled="disabled"
        @change="handleChange"
      />
    </div>
    <p v-if="helperText" class="mt-2 text-xs text-neutral-500 dark:text-neutral-400">
      {{ helperText }}
    </p>
  </div>
</template>

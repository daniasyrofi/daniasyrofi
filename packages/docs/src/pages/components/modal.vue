<script setup lang="ts">
import { Modal, Button } from '@vue-ds/components';
import { ref } from 'vue';

const showModal = ref(false);
const showLargeModal = ref(false);
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-5xl font-bold font-heading text-neutral-900 dark:text-neutral-100 mb-4">
      Modal
    </h1>
    <p class="text-lg text-neutral-600 dark:text-neutral-400 mb-12">
      A modal dialog component for focused interactions and important messages.
    </p>

    <section class="mb-12">
      <h2 class="text-3xl font-semibold font-heading text-neutral-900 dark:text-neutral-100 mb-6">
        Basic Example
      </h2>
      <div class="p-8 bg-white dark:bg-neutral-950 rounded-xl border border-neutral-200 dark:border-neutral-800">
        <Button @click="showModal = true">Open Modal</Button>
        <Modal v-model:open="showModal" title="Example Modal" size="md">
          <p class="text-neutral-700 dark:text-neutral-300 leading-relaxed">
            This is a basic modal dialog. It includes a title, content area, and close button.
            Press Escape or click the backdrop to close.
          </p>
          <template #footer>
            <div class="flex justify-end gap-3">
              <Button variant="outline" @click="showModal = false">Cancel</Button>
              <Button @click="showModal = false">Confirm</Button>
            </div>
          </template>
        </Modal>
      </div>
    </section>

    <section class="mb-12">
      <h2 class="text-3xl font-semibold font-heading text-neutral-900 dark:text-neutral-100 mb-6">
        Sizes
      </h2>
      <div class="p-8 bg-white dark:bg-neutral-950 rounded-xl border border-neutral-200 dark:border-neutral-800">
        <div class="flex flex-wrap gap-4">
          <Button variant="secondary" @click="showLargeModal = true">Large Modal</Button>
          <Modal v-model:open="showLargeModal" title="Large Modal" size="xl">
            <p class="text-neutral-700 dark:text-neutral-300 leading-relaxed">
              This modal uses the 'xl' size prop for wider content. Available sizes: sm, md, lg, xl, full.
            </p>
            <template #footer>
              <Button @click="showLargeModal = false">Close</Button>
            </template>
          </Modal>
        </div>
      </div>
    </section>
  </div>
</template>

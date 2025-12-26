<script setup lang="ts">
import { Tabs, Card } from '@vue-ds/components';
import { ref } from 'vue';

const value = ref('overview');

const items = [
  { label: 'Overview', value: 'overview', icon: 'ri-home-4-line' },
  { label: 'Usage', value: 'usage', icon: 'ri-code-line' },
  { label: 'Settings', value: 'settings', icon: 'ri-settings-3-line' },
];
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-5xl font-bold font-heading text-neutral-900 dark:text-neutral-100 mb-4">
      Tabs
    </h1>
    <p class="text-lg text-neutral-600 dark:text-neutral-400 mb-12">
      Tab navigation with smooth transitions and line/pills variants.
    </p>

    <section class="mb-12">
      <h2 class="text-3xl font-semibold font-heading text-neutral-900 dark:text-neutral-100 mb-6">
        Line Variant
      </h2>
      <Card padding="lg">
        <Tabs v-model="value" :items="items" variant="line" />
        <div class="mt-6 text-neutral-700 dark:text-neutral-300">
          Active tab: <span class="font-mono">{{ value }}</span>
        </div>
      </Card>
    </section>

    <section class="mb-12">
      <h2 class="text-3xl font-semibold font-heading text-neutral-900 dark:text-neutral-100 mb-6">
        Pills Variant
      </h2>
      <Card padding="lg">
        <Tabs v-model="value" :items="items" variant="pills" />
      </Card>
    </section>
  </div>
</template>

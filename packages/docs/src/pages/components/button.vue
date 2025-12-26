<script setup lang="ts">
import { Button } from '@vue-ds/components';
import { ref } from 'vue';

const showCode = ref(false);

const code = `<script setup lang="ts">
import { Button } from '@vue-ds/components';
<\/script>

<template>
  <Button variant="primary">Click me</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="outline">Outline</Button>
  <Button variant="ghost">Ghost</Button>
  <Button variant="destructive">Delete</Button>
</template>`;
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-5xl font-bold font-heading text-neutral-900 dark:text-neutral-100 mb-4">
      Button
    </h1>
    <p class="text-lg text-neutral-600 dark:text-neutral-400 mb-12">
      A versatile button component with multiple variants and sizes.
    </p>

    <section class="mb-12">
      <h2 class="text-3xl font-semibold font-heading text-neutral-900 dark:text-neutral-100 mb-6">
        Variants
      </h2>
      <div class="p-8 bg-white dark:bg-neutral-950 rounded-lg border border-neutral-200 dark:border-neutral-800 mb-4">
        <div class="flex flex-wrap gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      </div>
      <button
        @click="showCode = !showCode"
        class="text-sm text-brand-primary hover:underline mb-2"
      >
        {{ showCode ? 'Hide' : 'Show' }} Code
      </button>
      <div v-if="showCode" class="bg-neutral-900 dark:bg-neutral-950 text-neutral-100 p-4 rounded-lg overflow-x-auto">
        <pre class="text-sm"><code>{{ code }}</code></pre>
      </div>
    </section>

    <section class="mb-12">
      <h2 class="text-3xl font-semibold font-heading text-neutral-900 dark:text-neutral-100 mb-6">
        Sizes
      </h2>
      <div class="p-8 bg-white dark:bg-neutral-950 rounded-lg border border-neutral-200 dark:border-neutral-800">
        <div class="flex flex-wrap items-center gap-4">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </div>
    </section>

    <section class="mb-12">
      <h2 class="text-3xl font-semibold font-heading text-neutral-900 dark:text-neutral-100 mb-6">
        States
      </h2>
      <div class="p-8 bg-white dark:bg-neutral-950 rounded-lg border border-neutral-200 dark:border-neutral-800">
        <div class="flex flex-wrap gap-4">
          <Button>Default</Button>
          <Button disabled>Disabled</Button>
          <Button loading>Loading</Button>
        </div>
      </div>
    </section>

    <section class="mb-12">
      <h2 class="text-3xl font-semibold font-heading text-neutral-900 dark:text-neutral-100 mb-6">
        Props
      </h2>
      <div class="overflow-x-auto">
        <table class="w-full bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-lg">
          <thead>
            <tr class="border-b border-neutral-200 dark:border-neutral-800">
              <th class="px-4 py-3 text-left text-sm font-semibold text-neutral-900 dark:text-neutral-100">Prop</th>
              <th class="px-4 py-3 text-left text-sm font-semibold text-neutral-900 dark:text-neutral-100">Type</th>
              <th class="px-4 py-3 text-left text-sm font-semibold text-neutral-900 dark:text-neutral-100">Default</th>
              <th class="px-4 py-3 text-left text-sm font-semibold text-neutral-900 dark:text-neutral-100">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-neutral-200 dark:border-neutral-800">
              <td class="px-4 py-3 text-sm text-neutral-900 dark:text-neutral-100 font-mono">variant</td>
              <td class="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400 font-mono">string</td>
              <td class="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400 font-mono">'primary'</td>
              <td class="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">Button variant style</td>
            </tr>
            <tr class="border-b border-neutral-200 dark:border-neutral-800">
              <td class="px-4 py-3 text-sm text-neutral-900 dark:text-neutral-100 font-mono">size</td>
              <td class="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400 font-mono">string</td>
              <td class="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400 font-mono">'md'</td>
              <td class="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">Button size</td>
            </tr>
            <tr class="border-b border-neutral-200 dark:border-neutral-800">
              <td class="px-4 py-3 text-sm text-neutral-900 dark:text-neutral-100 font-mono">disabled</td>
              <td class="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400 font-mono">boolean</td>
              <td class="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400 font-mono">false</td>
              <td class="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">Disable button</td>
            </tr>
            <tr>
              <td class="px-4 py-3 text-sm text-neutral-900 dark:text-neutral-100 font-mono">type</td>
              <td class="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400 font-mono">string</td>
              <td class="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400 font-mono">'button'</td>
              <td class="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">HTML button type</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

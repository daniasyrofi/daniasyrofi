<script setup lang="ts">
import { Badge } from '@vue-ds/components';
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-5xl font-bold font-heading text-neutral-900 dark:text-neutral-100 mb-4">
      Badge
    </h1>
    <p class="text-lg text-neutral-600 dark:text-neutral-400 mb-12">
      A small label component with color variants for status and categorization.
    </p>

    <section class="mb-12">
      <h2 class="text-3xl font-semibold font-heading text-neutral-900 dark:text-neutral-100 mb-6">
        Variants
      </h2>
      <div class="p-8 bg-white dark:bg-neutral-950 rounded-lg border border-neutral-200 dark:border-neutral-800">
        <div class="flex flex-wrap gap-4">
          <Badge variant="default">Default</Badge>
          <Badge variant="primary">Primary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="error">Error</Badge>
          <Badge variant="info">Info</Badge>
        </div>
      </div>
    </section>

    <section class="mb-12">
      <h2 class="text-3xl font-semibold font-heading text-neutral-900 dark:text-neutral-100 mb-6">
        Sizes
      </h2>
      <div class="p-8 bg-white dark:bg-neutral-950 rounded-lg border border-neutral-200 dark:border-neutral-800">
        <div class="flex flex-wrap items-center gap-4">
          <Badge size="sm" variant="primary">Small</Badge>
          <Badge size="md" variant="primary">Medium</Badge>
        </div>
      </div>
    </section>

    <section class="mb-12">
      <h2 class="text-3xl font-semibold font-heading text-neutral-900 dark:text-neutral-100 mb-6">
        Usage Examples
      </h2>
      <div class="space-y-4">
        <div class="p-6 bg-white dark:bg-neutral-950 rounded-lg border border-neutral-200 dark:border-neutral-800">
          <div class="flex items-center gap-2">
            <span class="text-neutral-900 dark:text-neutral-100">Status:</span>
            <Badge variant="success">Active</Badge>
          </div>
        </div>
        <div class="p-6 bg-white dark:bg-neutral-950 rounded-lg border border-neutral-200 dark:border-neutral-800">
          <div class="flex items-center gap-2">
            <span class="text-neutral-900 dark:text-neutral-100">Priority:</span>
            <Badge variant="error">High</Badge>
            <Badge variant="warning">Medium</Badge>
            <Badge variant="info">Low</Badge>
          </div>
        </div>
        <div class="p-6 bg-white dark:bg-neutral-950 rounded-lg border border-neutral-200 dark:border-neutral-800">
          <div class="flex items-center gap-2">
            <span class="text-neutral-900 dark:text-neutral-100">Tags:</span>
            <Badge variant="default" size="sm">React</Badge>
            <Badge variant="default" size="sm">Vue</Badge>
            <Badge variant="default" size="sm">TypeScript</Badge>
          </div>
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
              <td class="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400 font-mono">'default'</td>
              <td class="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">Badge color variant</td>
            </tr>
            <tr>
              <td class="px-4 py-3 text-sm text-neutral-900 dark:text-neutral-100 font-mono">size</td>
              <td class="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400 font-mono">string</td>
              <td class="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400 font-mono">'md'</td>
              <td class="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">Badge size</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

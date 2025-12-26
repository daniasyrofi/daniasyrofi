<script setup lang="ts">
import { Alert } from '@vue-ds/components';
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-5xl font-bold font-heading text-neutral-900 dark:text-neutral-100 mb-4">
      Alert
    </h1>
    <p class="text-lg text-neutral-600 dark:text-neutral-400 mb-12">
      Alert messages for success, warning, error, and info states.
    </p>

    <section class="mb-12">
      <h2 class="text-3xl font-semibold font-heading text-neutral-900 dark:text-neutral-100 mb-6">
        Variants
      </h2>
      <div class="space-y-4">
        <Alert variant="success" title="Success">
          Your changes have been saved successfully.
        </Alert>
        <Alert variant="warning" title="Warning">
          This action cannot be undone. Please proceed with caution.
        </Alert>
        <Alert variant="error" title="Error">
          An error occurred while processing your request.
        </Alert>
        <Alert variant="info" title="Information">
          This is an informational message to help guide you.
        </Alert>
      </div>
    </section>

    <section class="mb-12">
      <h2 class="text-3xl font-semibold font-heading text-neutral-900 dark:text-neutral-100 mb-6">
        Without Title
      </h2>
      <div class="space-y-4">
        <Alert variant="success">
          Operation completed successfully!
        </Alert>
        <Alert variant="info">
          Did you know you can customize this component?
        </Alert>
      </div>
    </section>

    <section class="mb-12">
      <h2 class="text-3xl font-semibold font-heading text-neutral-900 dark:text-neutral-100 mb-6">
        With Rich Content
      </h2>
      <Alert variant="warning" title="Update Available">
        <p class="mb-2">
          A new version of the application is available.
        </p>
        <ul class="list-disc list-inside space-y-1">
          <li>Improved performance</li>
          <li>Bug fixes and stability improvements</li>
          <li>New features and enhancements</li>
        </ul>
      </Alert>
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
              <td class="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400 font-mono">'info'</td>
              <td class="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">Alert type variant</td>
            </tr>
            <tr>
              <td class="px-4 py-3 text-sm text-neutral-900 dark:text-neutral-100 font-mono">title</td>
              <td class="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400 font-mono">string</td>
              <td class="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400 font-mono">-</td>
              <td class="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">Alert title (optional)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Typography } from '@vue-ds/components';
import { ref } from 'vue';

const showCode = ref(false);

const code = `<script setup lang="ts">
import { Typography } from '@vue-ds/components';
<\/script>

<template>
  <Typography variant="h1">Main Heading</Typography>
  <Typography variant="body">Body text content.</Typography>
  <Typography variant="caption">Small caption text.</Typography>
</template>`;
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-5xl font-bold font-heading text-neutral-900 dark:text-neutral-100 mb-4">
      Typography Component
    </h1>
    <p class="text-lg text-neutral-600 dark:text-neutral-400 mb-12">
      A utility component for consistent text styling across your application.
    </p>

    <section class="mb-12">
      <h2 class="text-3xl font-semibold font-heading text-neutral-900 dark:text-neutral-100 mb-6">
        Heading Variants
      </h2>
      <button
        @click="showCode = !showCode"
        class="text-sm text-brand-primary hover:underline mb-4"
      >
        {{ showCode ? 'Hide' : 'Show' }} Code
      </button>
      <div v-if="showCode" class="bg-neutral-900 dark:bg-neutral-950 text-neutral-100 p-4 rounded-lg overflow-x-auto mb-4">
        <pre class="text-sm"><code>{{ code }}</code></pre>
      </div>
      <div class="space-y-4">
        <div class="p-6 bg-white dark:bg-neutral-950 rounded-lg border border-neutral-200 dark:border-neutral-800">
          <Typography variant="h1">Heading 1</Typography>
        </div>
        <div class="p-6 bg-white dark:bg-neutral-950 rounded-lg border border-neutral-200 dark:border-neutral-800">
          <Typography variant="h2">Heading 2</Typography>
        </div>
        <div class="p-6 bg-white dark:bg-neutral-950 rounded-lg border border-neutral-200 dark:border-neutral-800">
          <Typography variant="h3">Heading 3</Typography>
        </div>
        <div class="p-6 bg-white dark:bg-neutral-950 rounded-lg border border-neutral-200 dark:border-neutral-800">
          <Typography variant="h4">Heading 4</Typography>
        </div>
        <div class="p-6 bg-white dark:bg-neutral-950 rounded-lg border border-neutral-200 dark:border-neutral-800">
          <Typography variant="h5">Heading 5</Typography>
        </div>
        <div class="p-6 bg-white dark:bg-neutral-950 rounded-lg border border-neutral-200 dark:border-neutral-800">
          <Typography variant="h6">Heading 6</Typography>
        </div>
      </div>
    </section>

    <section class="mb-12">
      <h2 class="text-3xl font-semibold font-heading text-neutral-900 dark:text-neutral-100 mb-6">
        Text Variants
      </h2>
      <div class="space-y-4">
        <div class="p-6 bg-white dark:bg-neutral-950 rounded-lg border border-neutral-200 dark:border-neutral-800">
          <Typography variant="body">
            Body text - This is the default text style used for paragraphs and general content.
            It provides good readability and comfortable reading experience.
          </Typography>
        </div>
        <div class="p-6 bg-white dark:bg-neutral-950 rounded-lg border border-neutral-200 dark:border-neutral-800">
          <Typography variant="caption">
            Caption text - Smaller text used for captions, hints, and supplementary information.
          </Typography>
        </div>
        <div class="p-6 bg-white dark:bg-neutral-950 rounded-lg border border-neutral-200 dark:border-neutral-800">
          <Typography variant="label">
            Label text - Used for form labels and emphasized UI text.
          </Typography>
        </div>
      </div>
    </section>

    <section class="mb-12">
      <h2 class="text-3xl font-semibold font-heading text-neutral-900 dark:text-neutral-100 mb-6">
        Custom Element
      </h2>
      <div class="p-6 bg-white dark:bg-neutral-950 rounded-lg border border-neutral-200 dark:border-neutral-800">
        <Typography variant="h3" as="div">
          This heading is rendered as a div element instead of h3
        </Typography>
      </div>
    </section>

    <section class="mb-12">
      <h2 class="text-3xl font-semibold font-heading text-neutral-900 dark:text-neutral-100 mb-6">
        Usage Example
      </h2>
      <div class="p-6 bg-white dark:bg-neutral-950 rounded-lg border border-neutral-200 dark:border-neutral-800">
        <Typography variant="h2" class="mb-4">Article Title</Typography>
        <Typography variant="caption" class="mb-6">
          Published on December 26, 2024 by John Doe
        </Typography>
        <Typography variant="body" class="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Typography>
        <Typography variant="body">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
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
              <td class="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400 font-mono">'body'</td>
              <td class="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">Typography variant style</td>
            </tr>
            <tr>
              <td class="px-4 py-3 text-sm text-neutral-900 dark:text-neutral-100 font-mono">as</td>
              <td class="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400 font-mono">string</td>
              <td class="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400 font-mono">auto</td>
              <td class="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">HTML element to render as</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

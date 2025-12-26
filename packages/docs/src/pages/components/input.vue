<script setup lang="ts">
import { Input } from '@vue-ds/components';
import { ref } from 'vue';

const value = ref('');
const emailValue = ref('');
const disabledValue = ref('Disabled input');
const errorValue = ref('');

const showCode = ref(false);

const code = `<script setup lang="ts">
import { ref } from 'vue';
import { Input } from '@vue-ds/components';

const email = ref('');
<\/script>

<template>
  <Input
    v-model="email"
    label="Email"
    type="email"
    placeholder="you@example.com"
    id="email"
  />
</template>`;
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-5xl font-bold font-heading text-neutral-900 dark:text-neutral-100 mb-4">
      Input
    </h1>
    <p class="text-lg text-neutral-600 dark:text-neutral-400 mb-12">
      Text input component with label, error states, and more.
    </p>

    <section class="mb-12">
      <h2 class="text-3xl font-semibold font-heading text-neutral-900 dark:text-neutral-100 mb-6">
        Basic
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
      <div class="p-8 bg-white dark:bg-neutral-950 rounded-lg border border-neutral-200 dark:border-neutral-800">
        <div class="max-w-md">
          <Input v-model="value" placeholder="Enter text..." />
        </div>
      </div>
    </section>

    <section class="mb-12">
      <h2 class="text-3xl font-semibold font-heading text-neutral-900 dark:text-neutral-100 mb-6">
        With Label
      </h2>
      <div class="p-8 bg-white dark:bg-neutral-950 rounded-lg border border-neutral-200 dark:border-neutral-800">
        <div class="max-w-md">
          <Input
            v-model="emailValue"
            label="Email"
            type="email"
            placeholder="you@example.com"
            id="email-input"
          />
        </div>
      </div>
    </section>

    <section class="mb-12">
      <h2 class="text-3xl font-semibold font-heading text-neutral-900 dark:text-neutral-100 mb-6">
        States
      </h2>
      <div class="p-8 bg-white dark:bg-neutral-950 rounded-lg border border-neutral-200 dark:border-neutral-800">
        <div class="max-w-md space-y-4">
          <Input
            v-model="disabledValue"
            label="Disabled"
            disabled
          />
          <Input
            v-model="errorValue"
            label="Error"
            error
            placeholder="This field has an error"
          />
        </div>
      </div>
    </section>

    <section class="mb-12">
      <h2 class="text-3xl font-semibold font-heading text-neutral-900 dark:text-neutral-100 mb-6">
        Input Types
      </h2>
      <div class="p-8 bg-white dark:bg-neutral-950 rounded-lg border border-neutral-200 dark:border-neutral-800">
        <div class="max-w-md space-y-4">
          <Input label="Text" type="text" placeholder="Text input" />
          <Input label="Email" type="email" placeholder="email@example.com" />
          <Input label="Password" type="password" placeholder="••••••••" />
          <Input label="Number" type="number" placeholder="123" />
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
              <td class="px-4 py-3 text-sm text-neutral-900 dark:text-neutral-100 font-mono">modelValue</td>
              <td class="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400 font-mono">string | number</td>
              <td class="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400 font-mono">-</td>
              <td class="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">Input value (v-model)</td>
            </tr>
            <tr class="border-b border-neutral-200 dark:border-neutral-800">
              <td class="px-4 py-3 text-sm text-neutral-900 dark:text-neutral-100 font-mono">type</td>
              <td class="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400 font-mono">string</td>
              <td class="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400 font-mono">'text'</td>
              <td class="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">Input type</td>
            </tr>
            <tr class="border-b border-neutral-200 dark:border-neutral-800">
              <td class="px-4 py-3 text-sm text-neutral-900 dark:text-neutral-100 font-mono">placeholder</td>
              <td class="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400 font-mono">string</td>
              <td class="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400 font-mono">-</td>
              <td class="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">Placeholder text</td>
            </tr>
            <tr class="border-b border-neutral-200 dark:border-neutral-800">
              <td class="px-4 py-3 text-sm text-neutral-900 dark:text-neutral-100 font-mono">label</td>
              <td class="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400 font-mono">string</td>
              <td class="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400 font-mono">-</td>
              <td class="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">Label text</td>
            </tr>
            <tr class="border-b border-neutral-200 dark:border-neutral-800">
              <td class="px-4 py-3 text-sm text-neutral-900 dark:text-neutral-100 font-mono">disabled</td>
              <td class="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400 font-mono">boolean</td>
              <td class="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400 font-mono">false</td>
              <td class="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">Disable input</td>
            </tr>
            <tr class="border-b border-neutral-200 dark:border-neutral-800">
              <td class="px-4 py-3 text-sm text-neutral-900 dark:text-neutral-100 font-mono">error</td>
              <td class="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400 font-mono">boolean</td>
              <td class="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400 font-mono">false</td>
              <td class="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">Show error state</td>
            </tr>
            <tr>
              <td class="px-4 py-3 text-sm text-neutral-900 dark:text-neutral-100 font-mono">id</td>
              <td class="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400 font-mono">string</td>
              <td class="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400 font-mono">-</td>
              <td class="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">Input ID</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

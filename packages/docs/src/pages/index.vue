<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="text-center mb-16">
      <h1 class="text-6xl font-bold font-heading text-neutral-900 dark:text-neutral-100 mb-4">
        Vue Design System
      </h1>
      <p class="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
        A modern, accessible, and customizable Vue 3 component library with a copy-paste approach.
        Inspired by wise.design and shadcn/ui.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
      <div class="p-6 bg-white dark:bg-neutral-950 rounded-lg border border-neutral-200 dark:border-neutral-800">
        <div class="text-4xl mb-4">🎨</div>
        <h3 class="text-xl font-semibold font-heading text-neutral-900 dark:text-neutral-100 mb-2">
          Design Tokens
        </h3>
        <p class="text-neutral-600 dark:text-neutral-400">
          Comprehensive design tokens for colors, typography, spacing, and shadows.
        </p>
      </div>

      <div class="p-6 bg-white dark:bg-neutral-950 rounded-lg border border-neutral-200 dark:border-neutral-800">
        <div class="text-4xl mb-4">📦</div>
        <h3 class="text-xl font-semibold font-heading text-neutral-900 dark:text-neutral-100 mb-2">
          Copy-Paste Ready
        </h3>
        <p class="text-neutral-600 dark:text-neutral-400">
          Copy components directly into your project. No dependencies required.
        </p>
      </div>

      <div class="p-6 bg-white dark:bg-neutral-950 rounded-lg border border-neutral-200 dark:border-neutral-800">
        <div class="text-4xl mb-4">🌓</div>
        <h3 class="text-xl font-semibold font-heading text-neutral-900 dark:text-neutral-100 mb-2">
          Dark Mode
        </h3>
        <p class="text-neutral-600 dark:text-neutral-400">
          Full dark mode support with automatic theme switching.
        </p>
      </div>

      <div class="p-6 bg-white dark:bg-neutral-950 rounded-lg border border-neutral-200 dark:border-neutral-800">
        <div class="text-4xl mb-4">⚡</div>
        <h3 class="text-xl font-semibold font-heading text-neutral-900 dark:text-neutral-100 mb-2">
          Vue 3 + TypeScript
        </h3>
        <p class="text-neutral-600 dark:text-neutral-400">
          Built with Vue 3 Composition API and full TypeScript support.
        </p>
      </div>

      <div class="p-6 bg-white dark:bg-neutral-950 rounded-lg border border-neutral-200 dark:border-neutral-800">
        <div class="text-4xl mb-4">♿</div>
        <h3 class="text-xl font-semibold font-heading text-neutral-900 dark:text-neutral-100 mb-2">
          Accessible
        </h3>
        <p class="text-neutral-600 dark:text-neutral-400">
          Components follow accessibility best practices and guidelines.
        </p>
      </div>

      <div class="p-6 bg-white dark:bg-neutral-950 rounded-lg border border-neutral-200 dark:border-neutral-800">
        <div class="text-4xl mb-4">🎯</div>
        <h3 class="text-xl font-semibold font-heading text-neutral-900 dark:text-neutral-100 mb-2">
          Customizable
        </h3>
        <p class="text-neutral-600 dark:text-neutral-400">
          Easy to customize with Tailwind CSS and CSS variables.
        </p>
      </div>
    </div>

    <div class="bg-brand-primary text-white rounded-lg p-12 text-center">
      <h2 class="text-4xl font-bold font-heading mb-4">Get Started</h2>
      <p class="text-lg mb-6 opacity-90">
        Explore our foundations and components to start building.
      </p>
      <div class="flex gap-4 justify-center">
        <RouterLink
          to="/foundations/colors"
          class="px-6 py-3 bg-white text-brand-primary rounded-md font-medium hover:bg-neutral-100 transition-colors"
        >
          View Foundations
        </RouterLink>
        <RouterLink
          to="/components/button"
          class="px-6 py-3 bg-transparent border-2 border-white text-white rounded-md font-medium hover:bg-white hover:text-brand-primary transition-colors"
        >
          View Components
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

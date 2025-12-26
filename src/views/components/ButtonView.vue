<script setup lang="ts">
import { getPageContent, getComponentProps } from '../../content'
import Breadcrumb from '../../components/Breadcrumb.vue'
import PropsTable from '../../components/PropsTable.vue'
import CodeBlock from '../../components/CodeBlock.vue'

const content = getPageContent('/components/button')
const props = getComponentProps('button')

const buttonCode = `
<!-- Primary Button -->
<button class="bg-primary text-white px-4 py-2 rounded-xl hover:bg-primary-hover transition-base">
  Primary Action
</button>

<!-- Secondary Button -->
<button class="bg-surface border border-border text-text px-4 py-2 rounded-xl hover:bg-surface-2 transition-base">
  Secondary Action
</button>

<!-- Disabled Button -->
<button disabled class="bg-neutral-200 text-neutral-500 px-4 py-2 rounded-xl cursor-not-allowed">
  Disabled
</button>

<!-- Loading Button -->
<button disabled class="bg-primary text-white px-4 py-2 rounded-xl flex items-center space-x-2">
  <span>Loading...</span>
  <i class="ri-loader-4-line animate-spin"></i>
</button>
`
</script>

<template>
  <div class="space-y-8">
    <Breadcrumb />

    <div>
      <h1 class="font-heading text-3xl font-bold text-text mb-4">Button</h1>
      <p class="text-muted mb-8">Primary action buttons with multiple variants and states.</p>

      <div class="space-y-12">
        <!-- Overview -->
        <section>
          <h2 class="font-heading text-2xl font-semibold text-text mb-4">Overview</h2>
          <p class="text-muted mb-6">
            Buttons are used for primary actions and calls-to-action. They come in multiple variants 
            and support various states including hover, active, focus, disabled, and loading.
          </p>

          <div class="bg-surface border border-border rounded-xl p-6">
            <p class="text-muted mb-4">
              Button variants include:
            </p>
            <ul class="list-disc list-inside text-muted space-y-2">
              <li>Primary (filled)</li>
              <li>Secondary (outlined)</li>
              <li>Ghost (transparent)</li>
              <li>Destructive (danger)</li>
            </ul>
          </div>
        </section>

        <!-- Variants -->
        <section>
          <h2 class="font-heading text-2xl font-semibold text-text mb-4">Variants</h2>
          <div class="flex flex-wrap gap-4">
            <button class="bg-primary text-white px-4 py-2 rounded-xl">Primary</button>
            <button class="bg-surface border border-border text-text px-4 py-2 rounded-xl">Secondary</button>
            <button class="text-primary px-4 py-2 rounded-xl hover:bg-primary-50 transition-base">Ghost</button>
            <button class="bg-danger text-white px-4 py-2 rounded-xl">Destructive</button>
          </div>
        </section>

        <!-- States -->
        <section>
          <h2 class="font-heading text-2xl font-semibold text-text mb-4">States</h2>
          <div class="grid md:grid-cols-3 gap-4">
            <div class="bg-surface border border-border rounded-xl p-4 text-center">
              <h3 class="font-heading font-semibold text-text mb-2">Default</h3>
              <button class="bg-primary text-white px-4 py-2 rounded-xl">Default</button>
            </div>

            <div class="bg-surface border border-border rounded-xl p-4 text-center">
              <h3 class="font-heading font-semibold text-text mb-2">Hover</h3>
              <button class="bg-primary-hover text-white px-4 py-2 rounded-xl">Hover</button>
            </div>

            <div class="bg-surface border border-border rounded-xl p-4 text-center">
              <h3 class="font-heading font-semibold text-text mb-2">Active</h3>
              <button class="bg-primary-active text-white px-4 py-2 rounded-xl">Active</button>
            </div>

            <div class="bg-surface border border-border rounded-xl p-4 text-center">
              <h3 class="font-heading font-semibold text-text mb-2">Focus</h3>
              <button class="bg-primary text-white px-4 py-2 rounded-xl focus:ring-2 focus:ring-focus-ring">Focus</button>
            </div>

            <div class="bg-surface border border-border rounded-xl p-4 text-center">
              <h3 class="font-heading font-semibold text-text mb-2">Disabled</h3>
              <button disabled class="bg-neutral-200 text-neutral-500 px-4 py-2 rounded-xl cursor-not-allowed">Disabled</button>
            </div>

            <div class="bg-surface border border-border rounded-xl p-4 text-center">
              <h3 class="font-heading font-semibold text-text mb-2">Loading</h3>
              <button disabled class="bg-primary text-white px-4 py-2 rounded-xl flex items-center justify-center">
                <i class="ri-loader-4-line animate-spin"></i>
              </button>
            </div>
          </div>
        </section>

        <!-- Props -->
        <section>
          <h2 class="font-heading text-2xl font-semibold text-text mb-4">Props</h2>
          <PropsTable :props="props" />
        </section>

        <!-- Code Examples -->
        <section>
          <h2 class="font-heading text-2xl font-semibold text-text mb-4">Code Examples</h2>
          <CodeBlock :code="buttonCode" lang="html" />
        </section>

        <!-- Do/Don't -->
        <section>
          <h2 class="font-heading text-2xl font-semibold text-text mb-4">Do/Don't</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-4">
              <h3 class="font-heading font-semibold text-success">Do</h3>
              <ul class="list-disc list-inside text-muted space-y-2">
                <li>Use primary buttons for main actions</li>
                <li>Maintain consistent button sizes</li>
                <li>Provide clear button labels</li>
                <li>Use appropriate button variants</li>
              </ul>
            </div>
            <div class="space-y-4">
              <h3 class="font-heading font-semibold text-danger">Don't</h3>
              <ul class="list-disc list-inside text-muted space-y-2">
                <li>Overuse destructive buttons</li>
                <li>Use buttons for navigation</li>
                <li>Create overly long button labels</li>
                <li>Use multiple primary buttons in one view</li>
              </ul>
            </div>
          </div>
        </section>

        <!-- Accessibility -->
        <section>
          <h2 class="font-heading text-2xl font-semibold text-text mb-4">Accessibility</h2>
          <ul class="list-disc list-inside text-muted space-y-2">
            <li>Ensure buttons have clear, descriptive labels</li>
            <li>Maintain sufficient color contrast</li>
            <li>Provide keyboard navigation support</li>
            <li>Use proper focus states</li>
            <li>Ensure disabled buttons are clearly indicated</li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>
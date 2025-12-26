<script setup lang="ts">
import { getPageContent } from '../../content'
import Breadcrumb from '../../components/Breadcrumb.vue'
import TokenTable from '../../components/TokenTable.vue'
import CodeBlock from '../../components/CodeBlock.vue'

const content = getPageContent('/foundations/colour')

const exampleCode = `
<!-- Good usage -->
<button class="bg-brand-500 text-white px-4 py-2 rounded-xl hover:bg-brand-600 transition-base">
  Primary Action
</button>

<!-- Bad usage - insufficient contrast -->
<button class="bg-brand-500 text-brand-200 px-4 py-2 rounded-xl">
  Bad Contrast
</button>
`
</script>

<template>
  <div class="space-y-8">
    <Breadcrumb />

    <div>
      <h1 class="font-heading text-3xl font-bold text-text mb-4">{{ content.title }}</h1>
      <p class="text-muted mb-8">{{ content.description }}</p>

      <div class="space-y-12">
        <!-- Overview -->
        <section>
          <h2 class="font-heading text-2xl font-semibold text-text mb-4">Overview</h2>
          <p class="text-muted mb-6">{{ content.overview }}</p>

          <div class="bg-surface border border-border rounded-xl p-6">
            <p class="text-muted mb-4">
              The Agentic Design System color palette consists of:
            </p>
            <ul class="list-disc list-inside text-muted space-y-2">
              <li>Brand colors (red spectrum)</li>
              <li>Neutral palette (warm grays)</li>
              <li>Semantic colors (success, warning, info, danger)</li>
            </ul>
          </div>
        </section>

        <!-- Specs -->
        <section>
          <h2 class="font-heading text-2xl font-semibold text-text mb-4">Specs</h2>
          <TokenTable :tokens="content.specs || []" />
        </section>

        <!-- Variants -->
        <section>
          <h2 class="font-heading text-2xl font-semibold text-text mb-4">Variants</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div v-for="variant in content.variants" :key="variant" class="bg-surface border border-border rounded-xl p-4">
              <h3 class="font-heading font-semibold text-text mb-2">{{ variant }}</h3>
              <p class="text-muted text-sm">Example of {{ variant }} color scheme.</p>
            </div>
          </div>
        </section>

        <!-- States -->
        <section>
          <h2 class="font-heading text-2xl font-semibold text-text mb-4">States</h2>
          <div class="grid md:grid-cols-3 gap-4">
            <div v-for="state in content.states" :key="state" class="bg-surface border border-border rounded-xl p-4 text-center">
              <h3 class="font-heading font-semibold text-text mb-2">{{ state }}</h3>
              <div class="w-12 h-12 rounded-full mx-auto mb-2" :class="{
                'bg-brand-500': state === 'Default',
                'bg-brand-600': state === 'Hover',
                'bg-brand-700': state === 'Active',
                'bg-brand-300': state === 'Focus',
                'bg-neutral-200': state === 'Disabled',
              }"></div>
              <p class="text-muted text-sm">{{ state }} state example</p>
            </div>
          </div>
        </section>

        <!-- Content Rules -->
        <section>
          <h2 class="font-heading text-2xl font-semibold text-text mb-4">Content Rules</h2>
          <ul class="list-disc list-inside text-muted space-y-2">
            <li v-for="rule in content.contentRules" :key="rule">{{ rule }}</li>
          </ul>
        </section>

        <!-- Accessibility -->
        <section>
          <h2 class="font-heading text-2xl font-semibold text-text mb-4">Accessibility</h2>
          <ul class="list-disc list-inside text-muted space-y-2">
            <li v-for="item in content.accessibility" :key="item">{{ item }}</li>
          </ul>
        </section>

        <!-- Motion -->
        <section>
          <h2 class="font-heading text-2xl font-semibold text-text mb-4">Motion</h2>
          <ul class="list-disc list-inside text-muted space-y-2">
            <li v-for="item in content.motion" :key="item">{{ item }}</li>
          </ul>
        </section>

        <!-- Do/Don't -->
        <section>
          <h2 class="font-heading text-2xl font-semibold text-text mb-4">Do/Don't</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-4">
              <h3 class="font-heading font-semibold text-success">Do</h3>
              <ul class="list-disc list-inside text-muted space-y-2">
                <li v-for="(item, index) in content.doDont" :key="index" v-if="item.startsWith('Do:')">
                  {{ item.replace('Do: ', '') }}
                </li>
              </ul>
            </div>
            <div class="space-y-4">
              <h3 class="font-heading font-semibold text-danger">Don't</h3>
              <ul class="list-disc list-inside text-muted space-y-2">
                <li v-for="(item, index) in content.doDont" :key="index" v-if="item.startsWith('Don\'t:')">
                  {{ item.replace('Don\'t: ', '') }}
                </li>
              </ul>
            </div>
          </div>
        </section>

        <!-- Examples -->
        <section>
          <h2 class="font-heading text-2xl font-semibold text-text mb-4">Examples</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div v-for="example in content.examples" :key="example.title" class="space-y-4">
              <h3 class="font-heading font-semibold text-text">{{ example.title }}</h3>
              <p class="text-muted text-sm">{{ example.description }}</p>
              <CodeBlock :code="example.code" lang="html" />
              <div class="flex items-center space-x-2">
                <i :class="example.isGood ? 'ri-check-line text-success' : 'ri-close-line text-danger'"></i>
                <span class="text-sm" :class="example.isGood ? 'text-success' : 'text-danger'">
                  {{ example.isGood ? 'Good Example' : 'Bad Example' }}
                </span>
              </div>
            </div>
          </div>
        </section>

        <!-- Additional Code Example -->
        <section>
          <h2 class="font-heading text-2xl font-semibold text-text mb-4">Code Examples</h2>
          <CodeBlock :code="exampleCode" lang="html" />
        </section>
      </div>
    </div>
  </div>
</template>
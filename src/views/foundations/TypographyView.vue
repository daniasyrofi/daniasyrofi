<script setup lang="ts">
import { getPageContent } from '../../content'
import Breadcrumb from '../../components/Breadcrumb.vue'
import TokenTable from '../../components/TokenTable.vue'

const content = getPageContent('/foundations/typography')
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
              The typography system uses two complementary fonts:
            </p>
            <ul class="list-disc list-inside text-muted space-y-2">
              <li><strong>Inclusive Sans</strong> - for headings (h1-h6)</li>
              <li><strong>Outfit</strong> - for body text and UI elements</li>
            </ul>
          </div>
        </section>

        <!-- Specs -->
        <section>
          <h2 class="font-heading text-2xl font-semibold text-text mb-4">Specs</h2>
          <TokenTable :tokens="content.specs || []" />
        </section>

        <!-- Typography Scale -->
        <section>
          <h2 class="font-heading text-2xl font-semibold text-text mb-4">Typography Scale</h2>
          <div class="space-y-6">
            <div class="bg-surface border border-border rounded-xl p-4">
              <h3 class="font-heading text-4xl font-bold text-text mb-2">Heading 1</h3>
              <p class="text-muted text-sm">Font: Inclusive Sans, Weight: 700, Size: 36px</p>
            </div>

            <div class="bg-surface border border-border rounded-xl p-4">
              <h3 class="font-heading text-3xl font-bold text-text mb-2">Heading 2</h3>
              <p class="text-muted text-sm">Font: Inclusive Sans, Weight: 700, Size: 30px</p>
            </div>

            <div class="bg-surface border border-border rounded-xl p-4">
              <h3 class="font-heading text-2xl font-bold text-text mb-2">Heading 3</h3>
              <p class="text-muted text-sm">Font: Inclusive Sans, Weight: 600, Size: 24px</p>
            </div>

            <div class="bg-surface border border-border rounded-xl p-4">
              <h3 class="font-heading text-xl font-semibold text-text mb-2">Heading 4</h3>
              <p class="text-muted text-sm">Font: Inclusive Sans, Weight: 600, Size: 20px</p>
            </div>

            <div class="bg-surface border border-border rounded-xl p-4">
              <h3 class="font-heading text-lg font-semibold text-text mb-2">Heading 5</h3>
              <p class="text-muted text-sm">Font: Inclusive Sans, Weight: 600, Size: 18px</p>
            </div>

            <div class="bg-surface border border-border rounded-xl p-4">
              <h3 class="font-heading text-base font-semibold text-text mb-2">Heading 6</h3>
              <p class="text-muted text-sm">Font: Inclusive Sans, Weight: 600, Size: 16px</p>
            </div>

            <div class="bg-surface border border-border rounded-xl p-4">
              <p class="text-text mb-2">Body Text - Outfit Regular</p>
              <p class="text-muted text-sm">Font: Outfit, Weight: 400, Size: 16px, Line-height: 1.5</p>
            </div>

            <div class="bg-surface border border-border rounded-xl p-4">
              <p class="text-sm text-text mb-2">Small Text - Outfit Regular</p>
              <p class="text-muted text-sm">Font: Outfit, Weight: 400, Size: 14px, Line-height: 1.4</p>
            </div>

            <div class="bg-surface border border-border rounded-xl p-4">
              <p class="text-xs text-text mb-2">Caption Text - Outfit Regular</p>
              <p class="text-muted text-sm">Font: Outfit, Weight: 400, Size: 12px, Line-height: 1.3</p>
            </div>
          </div>
        </section>

        <!-- Variants -->
        <section>
          <h2 class="font-heading text-2xl font-semibold text-text mb-4">Variants</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div v-for="variant in content.variants" :key="variant" class="bg-surface border border-border rounded-xl p-4">
              <h3 class="font-heading font-semibold text-text mb-2">{{ variant }}</h3>
              <p class="text-muted text-sm">Example of {{ variant }} typography.</p>
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
      </div>
    </div>
  </div>
</template>
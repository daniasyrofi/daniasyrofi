<script setup lang="ts">
import Breadcrumb from '../components/Breadcrumb.vue'
</script>

<template>
  <div class="space-y-8">
    <Breadcrumb />

    <div>
      <h1 class="font-heading text-3xl font-bold text-text mb-4">Foundations</h1>
      <p class="text-muted mb-8">
        The fundamental building blocks of the Agentic Design System.
      </p>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <router-link 
          to="/foundations/colour"
          class="bg-surface border border-border rounded-xl p-6 hover:bg-surface-2 transition-base"
        >
          <div class="flex justify-between items-start mb-4">
            <h3 class="font-heading text-xl font-semibold text-text">Colour</h3>
            <i class="ri-palette-line text-primary text-2xl"></i>
          </div>
          <p class="text-muted">Brand and semantic color system with light/dark mode support.</p>
        </router-link>

        <router-link 
          to="/foundations/typography"
          class="bg-surface border border-border rounded-xl p-6 hover:bg-surface-2 transition-base"
        >
          <div class="flex justify-between items-start mb-4">
            <h3 class="font-heading text-xl font-semibold text-text">Typography</h3>
            <i class="ri-font-size-2 text-primary text-2xl"></i>
          </div>
          <p class="text-muted">Font hierarchy using Inclusive Sans and Outfit.</p>
        </router-link>

        <router-link 
          to="/foundations/spacing-layout"
          class="bg-surface border border-border rounded-xl p-6 hover:bg-surface-2 transition-base"
        >
          <div class="flex justify-between items-start mb-4">
            <h3 class="font-heading text-xl font-semibold text-text">Spacing & Layout</h3>
            <i class="ri-layout-grid-line text-primary text-2xl"></i>
          </div>
          <p class="text-muted">Consistent spacing scale and layout principles.</p>
        </router-link>

        <router-link 
          to="/foundations/radius"
          class="bg-surface border border-border rounded-xl p-6 hover:bg-surface-2 transition-base"
        >
          <div class="flex justify-between items-start mb-4">
            <h3 class="font-heading text-xl font-semibold text-text">Radius</h3>
            <i class="ri-corner-up-left-line text-primary text-2xl"></i>
          </div>
          <p class="text-muted">Border radius system for consistent rounded corners.</p>
        </router-link>

        <router-link 
          to="/foundations/elevation-shadow"
          class="bg-surface border border-border rounded-xl p-6 hover:bg-surface-2 transition-base"
        >
          <div class="flex justify-between items-start mb-4">
            <h3 class="font-heading text-xl font-semibold text-text">Elevation & Shadow</h3>
            <i class="ri-shadow-line text-primary text-2xl"></i>
          </div>
          <p class="text-muted">Elevation levels and subtle shadow usage.</p>
        </router-link>

        <router-link 
          to="/foundations/border-stroke"
          class="bg-surface border border-border rounded-xl p-6 hover:bg-surface-2 transition-base"
        >
          <div class="flex justify-between items-start mb-4">
            <h3 class="font-heading text-xl font-semibold text-text">Border & Stroke</h3>
            <i class="ri-border-line text-primary text-2xl"></i>
          </div>
          <p class="text-muted">Border thickness and focus ring styles.</p>
        </router-link>

        <router-link 
          to="/foundations/motion"
          class="bg-surface border border-border rounded-xl p-6 hover:bg-surface-2 transition-base"
        >
          <div class="flex justify-between items-start mb-4">
            <h3 class="font-heading text-xl font-semibold text-text">Motion</h3>
            <i class="ri-motion-line text-primary text-2xl"></i>
          </div>
          <p class="text-muted">Animation and transition guidelines.</p>
        </router-link>

        <router-link 
          to="/foundations/opacity"
          class="bg-surface border border-border rounded-xl p-6 hover:bg-surface-2 transition-base"
        >
          <div class="flex justify-between items-start mb-4">
            <h3 class="font-heading text-xl font-semibold text-text">Opacity</h3>
            <i class="ri-transparency-line text-primary text-2xl"></i>
          </div>
          <p class="text-muted">Opacity and transparency usage.</p>
        </router-link>

        <router-link 
          to="/foundations/breakpoints"
          class="bg-surface border border-border rounded-xl p-6 hover:bg-surface-2 transition-base"
        >
          <div class="flex justify-between items-start mb-4">
            <h3 class="font-heading text-xl font-semibold text-text">Breakpoints</h3>
            <i class="ri-responsive-line text-primary text-2xl"></i>
          </div>
          <p class="text-muted">Responsive design breakpoints.</p>
        </router-link>

        <router-link 
          to="/foundations/accessibility"
          class="bg-surface border border-border rounded-xl p-6 hover:bg-surface-2 transition-base"
        >
          <div class="flex justify-between items-start mb-4">
            <h3 class="font-heading text-xl font-semibold text-text">Accessibility</h3>
            <i class="ri-accessible-line text-primary text-2xl"></i>
          </div>
          <p class="text-muted">Accessibility guidelines and best practices.</p>
        </router-link>

        <router-link 
          to="/foundations/icon-system"
          class="bg-surface border border-border rounded-xl p-6 hover:bg-surface-2 transition-base"
        >
          <div class="flex justify-between items-start mb-4">
            <h3 class="font-heading text-xl font-semibold text-text">Icon System</h3>
            <i class="ri-icons-line text-primary text-2xl"></i>
          </div>
          <p class="text-muted">Icon usage and guidelines.</p>
        </router-link>
      </div>
    </div>
  </div>
</template>
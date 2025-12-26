<script setup lang="ts">
import { navGroups } from '../content'
</script>

<template>
  <div class="space-y-8">
    <div class="text-center py-12">
      <h1 class="font-heading text-4xl md:text-5xl font-bold text-text mb-4">
        Agentic Design System
      </h1>
      <p class="text-xl text-muted max-w-2xl mx-auto">
        A comprehensive Vue 3 design system with Airbnb-inspired aesthetics and Wise-level documentation.
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-8">
      <div v-for="group in navGroups" :key="group.title" class="space-y-4">
        <h2 class="font-heading text-xl font-semibold text-text flex items-center">
          <i :class="group.icon" class="mr-2 text-primary"></i>
          {{ group.title }}
        </h2>
        
        <div class="space-y-2">
          <router-link 
            v-for="item in group.items" 
            :key="item.path" 
            :to="item.path"
            class="block p-3 bg-surface border border-border rounded-xl hover:bg-surface-2 transition-base"
          >
            <div class="flex justify-between items-center">
              <span class="font-medium text-text">{{ item.title }}</span>
              <i class="ri-arrow-right-line text-muted"></i>
            </div>
            <p class="text-sm text-muted mt-1">{{ item.description }}</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
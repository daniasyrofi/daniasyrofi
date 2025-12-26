<script setup lang="ts">
import { ref } from 'vue'
import { navGroups } from '../content'
import { useRoute } from 'vue-router'

const route = useRoute()

const isActive = (path: string) => {
  return route.path === path
}
</script>

<template>
  <aside class="w-64 bg-surface border-r border-border h-screen overflow-y-auto fixed lg:relative z-20">
    <div class="p-4 border-b border-border">
      <h2 class="font-heading text-lg font-semibold text-text">Agentic Design System</h2>
      <p class="text-sm text-muted">v1.1</p>
    </div>
    
    <nav class="p-4 space-y-6">
      <div v-for="group in navGroups" :key="group.title" class="space-y-2">
        <h3 class="font-heading text-sm font-medium text-muted uppercase tracking-wider flex items-center">
          <i :class="group.icon" class="mr-2"></i>
          {{ group.title }}
        </h3>
        
        <div class="space-y-1">
          <router-link 
            v-for="item in group.items" 
            :key="item.path" 
            :to="item.path"
            class="block px-3 py-2 rounded-lg text-sm transition-base"
            :class="{
              'bg-primary text-white': isActive(item.path),
              'text-text hover:bg-surface-2': !isActive(item.path)
            }"
          >
            {{ item.title }}
          </router-link>
        </div>
      </div>
    </nav>
  </aside>
</template>

<style scoped>
.router-link-active {
  background-color: var(--primary);
  color: white;
}
</style>
<script setup lang="ts">
import { ref } from 'vue'
import { useDark } from '@vueuse/core'

const emit = defineEmits(['toggle-sidebar', 'toggle-theme'])
const isDark = useDark()
const searchQuery = ref('')

const toggleSidebar = () => {
  emit('toggle-sidebar')
}

const toggleTheme = () => {
  emit('toggle-theme')
}
</script>

<template>
  <header class="bg-surface border-b border-border px-4 py-3 flex items-center justify-between">
    <div class="flex items-center space-x-4">
      <button @click="toggleSidebar" class="lg:hidden p-2 rounded-lg hover:bg-surface-2 transition-base">
        <i class="ri-menu-line text-xl"></i>
      </button>
      
      <div class="flex items-center">
        <i class="ri-robot-2-line text-primary text-2xl mr-2"></i>
        <span class="font-heading font-semibold text-lg">Agentic</span>
      </div>
    </div>

    <div class="flex items-center space-x-4">
      <div class="relative hidden md:block">
        <input 
          v-model="searchQuery" 
          type="text" 
          placeholder="Search..." 
          class="bg-surface-2 border border-border rounded-xl px-4 py-2 pl-10 w-64 focus:ring-2 focus:ring-primary focus:outline-none transition-base"
        >
        <i class="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-muted"></i>
      </div>

      <button 
        @click="toggleTheme"
        class="p-2 rounded-lg hover:bg-surface-2 transition-base"
        :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
      >
        <i :class="isDark ? 'ri-sun-line' : 'ri-moon-line'" class="text-xl"></i>
      </button>
    </div>
  </header>
</template>
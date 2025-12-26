<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
import Sidebar from './components/Sidebar.vue'
import Topbar from './components/Topbar.vue'
import MobileSidebar from './components/MobileSidebar.vue'

const isDark = useDark()
const toggleDark = useToggle(isDark)
const isMobileSidebarOpen = ref(false)

watchEffect(() => {
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
})
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Topbar 
      @toggle-sidebar="isMobileSidebarOpen = !isMobileSidebarOpen"
      @toggle-theme="toggleDark()"
    />
    
    <div class="flex flex-1">
      <!-- Desktop Sidebar -->
      <Sidebar class="hidden lg:block" />
      
      <!-- Mobile Sidebar -->
      <MobileSidebar 
        v-model="isMobileSidebarOpen"
        @close="isMobileSidebarOpen = false"
      />
      
      <!-- Main Content -->
      <main class="flex-1 p-4 lg:p-8">
        <div class="max-w-7xl mx-auto">
          <router-view />
        </div>
      </main>
    </div>
  </div>
</template>
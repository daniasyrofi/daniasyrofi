<script setup lang="ts">
import { ref, watch } from 'vue'
import { navGroups } from '../content'
import { useRoute } from 'vue-router'

const props = defineProps({
  modelValue: Boolean,
})

const emit = defineEmits(['update:modelValue', 'close'])
const route = useRoute()

const isActive = (path: string) => {
  return route.path === path
}

const closeSidebar = () => {
  emit('update:modelValue', false)
  emit('close')
}

// Close sidebar when route changes
watch(() => route.path, () => {
  closeSidebar()
})
</script>

<template>
  <div 
    class="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden transition-opacity"
    :class="{ 'opacity-0 pointer-events-none': !modelValue }"
    @click="closeSidebar"
  ></div>

  <aside 
    class="fixed inset-y-0 left-0 w-64 bg-surface border-r border-border z-40 lg:hidden transform transition-transform"
    :class="{ '-translate-x-full': !modelValue }"
  >
    <div class="p-4 border-b border-border flex justify-between items-center">
      <h2 class="font-heading text-lg font-semibold text-text">Agentic</h2>
      <button @click="closeSidebar" class="p-2 rounded-lg hover:bg-surface-2 transition-base">
        <i class="ri-close-line text-xl"></i>
      </button>
    </div>

    <nav class="p-4 space-y-6 overflow-y-auto h-[calc(100vh-64px)]">
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
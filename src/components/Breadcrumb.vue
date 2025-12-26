<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const breadcrumbs = computed(() => {
  const pathArray = route.path.split('/').filter(path => path !== '')
  return pathArray.map((path, index) => {
    const routePath = '/' + pathArray.slice(0, index + 1).join('/')
    return {
      name: path.replace(/-/g, ' '),
      path: routePath,
      isLast: index === pathArray.length - 1
    }
  })
})
</script>

<template>
  <nav class="flex items-center space-x-2 text-sm text-muted mb-6">
    <router-link to="/" class="hover:text-primary transition-base">
      <i class="ri-home-4-line"></i>
    </router-link>
    
    <span v-for="(crumb, index) in breadcrumbs" :key="crumb.path" class="flex items-center space-x-2">
      <i class="ri-arrow-right-s-line"></i>
      <router-link 
        :to="crumb.path"
        class="hover:text-primary transition-base"
        :class="{ 'text-primary font-medium': crumb.isLast }"
      >
        {{ crumb.name.charAt(0).toUpperCase() + crumb.name.slice(1) }}
      </router-link>
    </span>
  </nav>
</template>
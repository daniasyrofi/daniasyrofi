<script setup lang="ts">
import { cn } from '@/lib/cn'

interface Props {
  sidebarWidth?: string
}

withDefaults(defineProps<Props>(), {
  sidebarWidth: '320px',
})
</script>

<template>
  <div class="flex h-screen w-full overflow-hidden bg-background">
    <aside
      :class="cn(
        'hidden lg:flex flex-col border-r border-border bg-card',
        sidebarWidth
      )"
    >
      <slot name="sidebar" />
    </aside>
    <main class="flex-1 flex flex-col overflow-hidden">
      <slot />
    </main>
  </div>
</template>

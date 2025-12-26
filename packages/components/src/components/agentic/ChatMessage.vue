<script setup lang="ts">
import { cn } from '@/lib/cn'

interface Props {
  role: 'user' | 'assistant' | 'system' | 'tool'
  content: string
  timestamp?: Date
}

withDefaults(defineProps<Props>(), {
  timestamp: () => new Date(),
})

const roleStyles = {
  user: 'bg-primary text-primary-foreground ml-12',
  assistant: 'bg-muted text-foreground mr-12',
  system: 'bg-accent text-accent-foreground mx-12',
  tool: 'bg-background border border-border text-foreground mx-12 font-mono text-sm',
}

const roleIcons = {
  user: 'ri-user-line',
  assistant: 'ri-robot-line',
  system: 'ri-settings-line',
  tool: 'ri-tools-line',
}
</script>

<template>
  <div class="flex flex-col gap-1 mb-4">
    <div :class="cn('rounded-2xl p-4', roleStyles[role])">
      <div class="flex items-center gap-2 mb-2">
        <i :class="cn('text-lg', roleIcons[role])"></i>
        <span class="text-sm font-medium capitalize">{{ role }}</span>
        <span v-if="timestamp" class="text-xs opacity-70 ml-auto">
          {{ new Date(timestamp).toLocaleTimeString() }}
        </span>
      </div>
      <p class="whitespace-pre-wrap">{{ content }}</p>
    </div>
  </div>
</template>

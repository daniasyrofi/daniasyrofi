<script setup lang="ts">
import { cn } from '@/lib/cn'

interface Props {
  status: 'idle' | 'thinking' | 'running' | 'done' | 'error'
  message?: string
  progress?: number
}

withDefaults(defineProps<Props>(), {
  message: '',
  progress: 0,
})

const statusConfig = {
  idle: { label: 'Idle', icon: 'ri-pause-circle-line', color: 'text-muted-foreground' },
  thinking: { label: 'Thinking', icon: 'ri-loader-4-line animate-spin', color: 'text-warning' },
  running: { label: 'Running', icon: 'ri-play-circle-line animate-pulse', color: 'text-success' },
  done: { label: 'Done', icon: 'ri-checkbox-circle-line', color: 'text-success' },
  error: { label: 'Error', icon: 'ri-error-warning-line', color: 'text-destructive' },
}
</script>

<template>
  <div :class="cn('flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/50')">
    <i :class="cn('text-xl', statusConfig[status].color, statusConfig[status].icon)"></i>
    <div class="flex-1">
      <p class="text-sm font-medium">{{ statusConfig[status].label }}</p>
      <p v-if="message" class="text-xs text-muted-foreground">{{ message }}</p>
      <div v-if="status === 'running' && progress > 0" class="mt-1">
        <div class="w-full bg-muted rounded-full h-1.5 overflow-hidden">
          <div
            class="bg-success h-full transition-all duration-300"
            :style="{ width: `${progress}%` }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

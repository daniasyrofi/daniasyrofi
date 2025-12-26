<script setup lang="ts">
import { cn } from '@/lib/cn'

interface Props {
  name: string
  description?: string
  status?: 'idle' | 'thinking' | 'running' | 'error'
  avatar?: string
}

withDefaults(defineProps<Props>(), {
  description: '',
  status: 'idle',
})

const statusConfig = {
  idle: { label: 'Idle', color: 'bg-muted-foreground', icon: 'ri-moon-line' },
  thinking: { label: 'Thinking', color: 'bg-warning', icon: 'ri-loader-4-line animate-spin' },
  running: { label: 'Running', color: 'bg-success', icon: 'ri-play-circle-line' },
  error: { label: 'Error', color: 'bg-destructive', icon: 'ri-error-warning-line' },
}
</script>

<template>
  <div :class="cn('surface p-4 flex items-center gap-4')">
    <div class="relative">
      <div
        v-if="avatar"
        :class="cn('w-12 h-12 rounded-full overflow-hidden bg-muted')"
      >
        <img :src="avatar" :alt="name" class="w-full h-full object-cover" />
      </div>
      <div
        v-else
        :class="cn('w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold text-lg')"
      >
        {{ name.charAt(0).toUpperCase() }}
      </div>
      <span
        :class="cn(
          'absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-card',
          statusConfig[status].color
        )"
      ></span>
    </div>
    <div class="flex-1">
      <h3 class="text-base font-semibold flex items-center gap-2">
        {{ name }}
        <i :class="cn('text-sm', statusConfig[status].icon)"></i>
      </h3>
      <p v-if="description" class="text-sm text-muted-foreground">{{ description }}</p>
    </div>
    <div :class="cn('flex items-center gap-1 text-xs text-muted-foreground')">
      <span :class="cn('w-2 h-2 rounded-full', statusConfig[status].color)"></span>
      {{ statusConfig[status].label }}
    </div>
  </div>
</template>

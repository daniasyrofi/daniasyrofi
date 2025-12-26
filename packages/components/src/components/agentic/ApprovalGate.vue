<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ')
}

interface Props {
  toolName: string
  arguments?: Record<string, unknown>
}

const props = withDefaults(defineProps<Props>(), {
  arguments: {},
})

const emit = defineEmits<{
  approve: []
  reject: []
}>()
</script>
</script>

<template>
  <div :class="cn('border border-border rounded-lg bg-card p-4')">
    <div class="flex items-start gap-3 mb-3">
      <div :class="cn('w-10 h-10 rounded-full bg-warning/10 flex items-center justify-center')">
        <i class="ri-alert-line text-warning text-xl"></i>
      </div>
      <div class="flex-1">
        <h3 class="font-semibold text-sm">Approval Required</h3>
        <p class="text-sm text-muted-foreground mt-1">
          Agent wants to execute: <code class="bg-muted px-1.5 py-0.5 rounded text-xs">{{ toolName }}</code>
        </p>
      </div>
    </div>
    <div class="bg-muted rounded p-3 mb-4">
      <p class="text-xs font-semibold text-muted-foreground mb-2">Arguments</p>
      <pre class="text-xs font-mono overflow-x-auto">{{ JSON.stringify(arguments, null, 2) }}</pre>
    </div>
    <div class="flex gap-2">
      <button
        @click="emit('reject')"
        :class="cn(
          'flex-1 px-4 py-2 rounded-lg border border-border',
          'text-sm font-medium transition-colors',
          'hover:bg-destructive hover:text-destructive-foreground'
        )"
      >
        Reject
      </button>
      <button
        @click="emit('approve')"
        :class="cn(
          'flex-1 px-4 py-2 rounded-lg bg-success text-success-foreground',
          'text-sm font-medium transition-colors',
          'hover:bg-success/90'
        )"
      >
        Approve
      </button>
    </div>
  </div>
</template>

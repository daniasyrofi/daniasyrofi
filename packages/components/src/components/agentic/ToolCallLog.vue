<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '@/lib/cn'

interface Props {
  toolCalls?: ToolCall[]
}

withDefaults(defineProps<Props>(), {
  toolCalls: () => [],
})

export interface ToolCall {
  id: string
  name: string
  arguments: Record<string, unknown>
  result?: unknown
  status: 'pending' | 'success' | 'error'
  duration?: number
}

const expandedItems = ref<Set<string>>(new Set())

const toggleExpand = (id: string) => {
  if (expandedItems.value.has(id)) {
    expandedItems.value.delete(id)
  } else {
    expandedItems.value.add(id)
  }
}

const statusIcons = {
  pending: 'ri-loader-4-line animate-spin text-warning',
  success: 'ri-checkbox-circle-line text-success',
  error: 'ri-close-circle-line text-destructive',
}

const statusLabels = {
  pending: 'Running',
  success: 'Completed',
  error: 'Failed',
}
</script>

<template>
  <div class="border border-border rounded-lg bg-card">
    <div class="px-4 py-3 border-b border-border">
      <h3 class="text-sm font-semibold">Tool Calls</h3>
    </div>
    <div class="divide-y divide-border">
      <div
        v-for="call in toolCalls"
        :key="call.id"
        class="group"
      >
        <button
          @click="toggleExpand(call.id)"
          :class="cn(
            'w-full px-4 py-3 flex items-center gap-3 text-left',
            'hover:bg-accent transition-colors'
          )"
        >
          <i
            :class="cn(
              'transition-transform',
              expandedItems.has(call.id) ? 'rotate-90' : ''
            )"
            class="ri-arrow-right-s-line text-muted-foreground"
          ></i>
          <i :class="cn(statusIcons[call.status])"></i>
          <span class="flex-1 font-mono text-sm">{{ call.name }}</span>
          <span class="text-xs text-muted-foreground">{{ statusLabels[call.status] }}</span>
          <span v-if="call.duration" class="text-xs text-muted-foreground">
            {{ call.duration }}ms
          </span>
        </button>
        <div
          v-if="expandedItems.has(call.id)"
          class="px-4 py-3 bg-muted/50 border-t border-border"
        >
          <div class="space-y-2">
            <div>
              <p class="text-xs font-semibold text-muted-foreground mb-1">Arguments</p>
              <pre class="text-xs font-mono bg-background p-2 rounded overflow-x-auto">{{ JSON.stringify(call.arguments, null, 2) }}</pre>
            </div>
            <div v-if="call.result">
              <p class="text-xs font-semibold text-muted-foreground mb-1">Result</p>
              <pre class="text-xs font-mono bg-background p-2 rounded overflow-x-auto">{{ JSON.stringify(call.result, null, 2) }}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

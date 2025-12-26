<script setup lang="ts">
import { cn } from '@/lib/cn'

export interface ToolCall {
  id: string
  name: string
  arguments: Record<string, unknown>
  result?: unknown
  status: 'pending' | 'success' | 'error'
  duration?: number
}

interface Props {
  toolCalls?: ToolCall[]
  shortTermMemory?: string[]
  longTermMemory?: string[]
  status?: 'idle' | 'thinking' | 'running' | 'done' | 'error'
  statusMessage?: string
}

withDefaults(defineProps<Props>(), {
  toolCalls: () => [],
  shortTermMemory: () => [],
  longTermMemory: () => [],
  status: 'idle',
  statusMessage: '',
})

const emit = defineEmits<{
  removeShortMemory: [index: number]
  removeLongMemory: [index: number]
}>()
</script>

<template>
  <div :class="cn('border border-border rounded-lg bg-card overflow-hidden')">
    <div class="px-4 py-3 border-b border-border flex items-center gap-2">
      <i class="ri-terminal-box-line text-muted-foreground"></i>
      <h3 class="text-sm font-semibold">Agent Console</h3>
    </div>
    <div class="divide-y divide-border">
      <RunStatusIndicator
        v-if="status !== 'idle'"
        :status="status"
        :message="statusMessage"
      />
      <div v-if="shortTermMemory.length > 0 || longTermMemory.length > 0" class="p-4">
        <MemoryChips
          :short-term="shortTermMemory"
          :long-term="longTermMemory"
          @remove-short="emit('removeShortMemory', $event)"
          @remove-long="emit('removeLongMemory', $event)"
        />
      </div>
      <div v-if="toolCalls.length > 0" class="p-4">
        <ToolCallLog :tool-calls="toolCalls" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import RunStatusIndicator from './RunStatusIndicator.vue'
import MemoryChips from './MemoryChips.vue'
import ToolCallLog from './ToolCallLog.vue'

export default {
  components: {
    RunStatusIndicator,
    MemoryChips,
    ToolCallLog,
  },
}
</script>

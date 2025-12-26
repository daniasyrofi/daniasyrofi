<script setup lang="ts">
import { cn } from '@/lib/cn'

interface Props {
  conversations?: Conversation[]
  activeId?: string
}

withDefaults(defineProps<Props>(), {
  conversations: () => [],
  activeId: '',
})

export interface Conversation {
  id: string
  title: string
  lastMessage: string
  timestamp: Date
  unread?: boolean
}

const emit = defineEmits<{
  select: [id: string]
  delete: [id: string]
}>()
</script>

<template>
  <div class="flex flex-col h-full">
    <div class="p-4 border-b border-border">
      <slot name="header">
        <h2 class="text-h5">Conversations</h2>
      </slot>
    </div>
    <div class="flex-1 overflow-y-auto">
      <ul class="divide-y divide-border">
        <li
          v-for="conv in conversations"
          :key="conv.id"
          :class="cn(
            'px-4 py-3 cursor-pointer transition-colors',
            'hover:bg-accent hover:text-accent-foreground',
            activeId === conv.id ? 'bg-accent' : ''
          )"
          @click="emit('select', conv.id)"
        >
          <div class="flex items-start justify-between gap-2">
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium truncate">{{ conv.title }}</p>
              <p class="text-xs text-muted-foreground truncate mt-1">{{ conv.lastMessage }}</p>
            </div>
            <div class="flex flex-col items-end gap-1">
              <span class="text-xs text-muted-foreground">
                {{ new Date(conv.timestamp).toLocaleDateString() }}
              </span>
              <button
                @click.stop="emit('delete', conv.id)"
                class="text-muted-foreground hover:text-destructive opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <i class="ri-delete-bin-line text-sm"></i>
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

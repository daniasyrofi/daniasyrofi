<script setup lang="ts">
import { ref, nextTick } from 'vue'
import { cn } from '@/lib/cn'

interface Props {
  placeholder?: string
  disabled?: boolean
  maxRows?: number
}

withDefaults(defineProps<Props>(), {
  placeholder: 'Type your message...',
  disabled: false,
  maxRows: 8,
})

const emit = defineEmits<{
  send: [message: string]
}>()

const message = ref('')
const textareaRef = ref<HTMLTextAreaElement>()

const handleInput = () => {
  const textarea = textareaRef.value
  if (!textarea) return

  textarea.style.height = 'auto'
  const newHeight = Math.min(textarea.scrollHeight, maxRows * 24)
  textarea.style.height = `${newHeight}px`
}

const handleSend = () => {
  if (!message.value.trim()) return
  emit('send', message.value)
  message.value = ''
  nextTick(() => {
    if (textareaRef.value) {
      textareaRef.value.style.height = 'auto'
    }
  })
}

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault()
    handleSend()
  }
}
</script>

<template>
  <div class="border-t border-border bg-card p-4">
    <div class="flex gap-2 items-end">
      <textarea
        ref="textareaRef"
        v-model="message"
        :placeholder="placeholder"
        :disabled="disabled"
        rows="1"
        :max-rows="maxRows"
        @input="handleInput"
        @keydown="handleKeyDown"
        :class="cn(
          'flex-1 resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          'placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
          'min-h-[48px] max-h-[200px]'
        )"
      ></textarea>
      <button
        :disabled="disabled || !message.trim()"
        @click="handleSend"
        :class="cn(
          'flex h-[48px] w-[48px] items-center justify-center rounded-lg bg-primary text-primary-foreground',
          'transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
          'disabled:cursor-not-allowed disabled:opacity-50',
          'hover:bg-primary/90'
        )"
      >
        <i class="ri-send-plane-fill text-xl"></i>
      </button>
    </div>
  </div>
</template>

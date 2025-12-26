<script setup lang="ts">
import { ref } from 'vue'
import { useClipboard } from '@vueuse/core'

const props = defineProps({
  code: String,
  lang: {
    type: String,
    default: 'html'
  }
})

const { copy, copied } = useClipboard()
const isCopied = ref(false)

const copyCode = () => {
  copy(props.code || '')
  isCopied.value = true
  setTimeout(() => {
    isCopied.value = false
  }, 2000)
}
</script>

<template>
  <div class="relative">
    <div class="bg-surface border border-border rounded-xl overflow-hidden">
      <div class="flex items-center justify-between px-4 py-2 bg-surface-2 border-b border-border">
        <span class="text-sm font-mono text-muted">{{ lang }}</span>
        <button 
          @click="copyCode"
          class="flex items-center space-x-2 text-sm text-muted hover:text-primary transition-base"
        >
          <i :class="isCopied ? 'ri-check-line' : 'ri-file-copy-line'"></i>
          <span>{{ isCopied ? 'Copied!' : 'Copy' }}</span>
        </button>
      </div>
      
      <pre class="p-4 overflow-x-auto font-mono text-sm"><code>{{ code }}</code></pre>
    </div>
  </div>
</template>
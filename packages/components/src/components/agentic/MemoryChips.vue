<script setup lang="ts">
import { cn } from '@/lib/cn'

interface Props {
  shortTerm?: string[]
  longTerm?: string[]
}

withDefaults(defineProps<Props>(), {
  shortTerm: () => [],
  longTerm: () => [],
})

const emit = defineEmits<{
  removeShort: [index: number]
  removeLong: [index: number]
}>()
</script>

<template>
  <div class="space-y-3">
    <div v-if="shortTerm.length > 0">
      <p class="text-xs font-semibold text-muted-foreground mb-2">Short-term Memory</p>
      <div class="flex flex-wrap gap-2">
        <span
          v-for="(item, index) in shortTerm"
          :key="index"
          :class="cn(
            'inline-flex items-center gap-1 px-2.5 py-1 rounded-full',
            'bg-accent text-accent-foreground text-xs'
          )"
        >
          <i class="ri-brain-line text-xs"></i>
          {{ item }}
          <button
            @click="emit('removeShort', index)"
            class="hover:text-destructive transition-colors"
          >
            <i class="ri-close-line"></i>
          </button>
        </span>
      </div>
    </div>
    <div v-if="longTerm.length > 0">
      <p class="text-xs font-semibold text-muted-foreground mb-2">Long-term Memory</p>
      <div class="flex flex-wrap gap-2">
        <span
          v-for="(item, index) in longTerm"
          :key="index"
          :class="cn(
            'inline-flex items-center gap-1 px-2.5 py-1 rounded-full',
            'bg-muted text-muted-foreground text-xs'
          )"
        >
          <i class="ri-database-2-line text-xs"></i>
          {{ item }}
          <button
            @click="emit('removeLong', index)"
            class="hover:text-destructive transition-colors"
          >
            <i class="ri-close-line"></i>
          </button>
        </span>
      </div>
    </div>
  </div>
</template>

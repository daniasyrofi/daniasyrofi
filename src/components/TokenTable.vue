<script setup lang="ts">
import { Token } from '../content'

defineProps({
  tokens: {
    type: Array as () => Token[],
    required: true
  }
})
</script>

<template>
  <div class="overflow-x-auto border border-border rounded-xl">
    <table class="w-full">
      <thead class="bg-surface-2">
        <tr>
          <th class="px-4 py-3 text-left text-sm font-medium text-muted uppercase tracking-wider">Token</th>
          <th class="px-4 py-3 text-left text-sm font-medium text-muted uppercase tracking-wider">Value</th>
          <th class="px-4 py-3 text-left text-sm font-medium text-muted uppercase tracking-wider">Description</th>
        </tr>
      </thead>
      <tbody class="bg-surface divide-y divide-border">
        <tr v-for="token in tokens" :key="token.name">
          <td class="px-4 py-3 whitespace-nowrap">
            <code class="text-sm font-mono">{{ token.name }}</code>
          </td>
          <td class="px-4 py-3">
            <div class="flex items-center space-x-2">
              <div class="w-4 h-4 rounded-full" :style="{ backgroundColor: token.value }"></div>
              <code class="text-sm font-mono">{{ token.value }}</code>
            </div>
          </td>
          <td class="px-4 py-3 text-sm text-muted">{{ token.description }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
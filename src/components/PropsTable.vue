<script setup lang="ts">
import { ComponentProps } from '../content'

defineProps({
  props: {
    type: Array as () => ComponentProps[],
    required: true
  }
})
</script>

<template>
  <div class="overflow-x-auto border border-border rounded-xl">
    <table class="w-full">
      <thead class="bg-surface-2">
        <tr>
          <th class="px-4 py-3 text-left text-sm font-medium text-muted uppercase tracking-wider">Prop</th>
          <th class="px-4 py-3 text-left text-sm font-medium text-muted uppercase tracking-wider">Type</th>
          <th class="px-4 py-3 text-left text-sm font-medium text-muted uppercase tracking-wider">Required</th>
          <th class="px-4 py-3 text-left text-sm font-medium text-muted uppercase tracking-wider">Default</th>
          <th class="px-4 py-3 text-left text-sm font-medium text-muted uppercase tracking-wider">Description</th>
        </tr>
      </thead>
      <tbody class="bg-surface divide-y divide-border">
        <tr v-for="prop in props" :key="prop.name">
          <td class="px-4 py-3 whitespace-nowrap">
            <code class="text-sm font-mono">{{ prop.name }}</code>
          </td>
          <td class="px-4 py-3">
            <code class="text-sm font-mono">{{ prop.type }}</code>
          </td>
          <td class="px-4 py-3">
            <span v-if="prop.required" class="text-success">
              <i class="ri-check-line"></i>
            </span>
            <span v-else class="text-muted">
              <i class="ri-close-line"></i>
            </span>
          </td>
          <td class="px-4 py-3">
            <code class="text-sm font-mono">{{ prop.default }}</code>
          </td>
          <td class="px-4 py-3 text-sm text-muted">{{ prop.description }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
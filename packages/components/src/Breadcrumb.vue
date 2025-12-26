<script setup lang="ts">
export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

defineProps<BreadcrumbProps>();
</script>

<template>
  <nav aria-label="Breadcrumb">
    <ol class="flex items-center flex-wrap gap-2 text-sm text-neutral-600 dark:text-neutral-400">
      <li v-for="(item, idx) in items" :key="idx" class="flex items-center gap-2">
        <a
          v-if="item.href && idx !== items.length - 1"
          :href="item.href"
          class="hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors"
        >
          {{ item.label }}
        </a>
        <span v-else class="text-neutral-900 dark:text-neutral-100 font-medium">
          {{ item.label }}
        </span>
        <i v-if="idx !== items.length - 1" class="ri-arrow-right-s-line text-neutral-400" aria-hidden="true" />
      </li>
    </ol>
  </nav>
</template>

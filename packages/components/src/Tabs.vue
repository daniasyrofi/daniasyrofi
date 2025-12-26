<script setup lang="ts">
import { computed } from 'vue';

export interface TabItem {
  label: string;
  value: string;
  disabled?: boolean;
  icon?: string;
}

export interface TabsProps {
  modelValue: string;
  items: TabItem[];
  variant?: 'line' | 'pills';
}

const props = withDefaults(defineProps<TabsProps>(), {
  variant: 'line',
});

const emit = defineEmits<{
  'update:modelValue': [value: string];
}>();

const wrapperClasses = computed(() => {
  if (props.variant === 'pills') {
    return 'inline-flex gap-1 p-1 bg-neutral-100 dark:bg-neutral-900 rounded-lg';
  }
  return 'flex gap-6 border-b border-neutral-200 dark:border-neutral-800';
});

const tabClasses = (item: TabItem) => {
  const isActive = props.modelValue === item.value;

  if (props.variant === 'pills') {
    return [
      'px-4 py-2 rounded-md text-sm font-medium transition-all duration-200',
      isActive
        ? 'bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 shadow-sm'
        : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200',
      item.disabled
        ? 'opacity-50 cursor-not-allowed'
        : 'cursor-pointer',
    ].join(' ');
  }

  return [
    'px-1 py-3 text-sm font-medium border-b-2 transition-all duration-200',
    isActive
      ? 'text-brand-primary border-brand-primary'
      : 'text-neutral-600 dark:text-neutral-400 border-transparent hover:text-neutral-900 dark:hover:text-neutral-200 hover:border-neutral-300 dark:hover:border-neutral-700',
    item.disabled
      ? 'opacity-50 cursor-not-allowed'
      : 'cursor-pointer',
  ].join(' ');
};

const selectTab = (item: TabItem) => {
  if (item.disabled) return;
  emit('update:modelValue', item.value);
};
</script>

<template>
  <div :class="wrapperClasses" role="tablist">
    <button
      v-for="item in items"
      :key="item.value"
      :class="tabClasses(item)"
      :aria-selected="modelValue === item.value"
      :aria-disabled="item.disabled"
      role="tab"
      type="button"
      @click="selectTab(item)"
    >
      <i v-if="item.icon" :class="item.icon" class="mr-2" />
      {{ item.label }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { inject, computed } from 'vue';

export interface AccordionItemProps {
  value: string;
  title: string;
  disabled?: boolean;
  class?: string;
}

const props = defineProps<AccordionItemProps>();

const accordion = inject<any>('accordion');

const isOpen = computed(() => accordion?.activeItems.value.includes(props.value));

const toggle = () => {
  if (props.disabled) return;
  accordion?.toggleItem(props.value);
};
</script>

<template>
  <div :class="['border-b border-neutral-200 dark:border-neutral-800', props.class]">
    <button
      type="button"
      class="flex w-full items-center justify-between py-4 text-left font-medium transition-all hover:underline disabled:opacity-50"
      :aria-expanded="isOpen"
      :disabled="disabled"
      @click="toggle"
    >
      {{ title }}
      <i
        class="ri-arrow-down-s-line h-4 w-4 shrink-0 transition-transform duration-200"
        :class="{ 'rotate-180': isOpen }"
      />
    </button>
    <div
      v-if="isOpen"
      class="overflow-hidden text-sm transition-all pb-4"
    >
      <slot />
    </div>
  </div>
</template>

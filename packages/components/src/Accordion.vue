<script setup lang="ts">
import { ref, provide } from 'vue';

export interface AccordionProps {
  type?: 'single' | 'multiple';
  collapsible?: boolean;
  class?: string;
}

const props = withDefaults(defineProps<AccordionProps>(), {
  type: 'single',
  collapsible: false,
});

const activeItems = ref<string[]>([]);

const toggleItem = (value: string) => {
  if (props.type === 'single') {
    if (activeItems.value.includes(value)) {
      if (props.collapsible) {
        activeItems.value = [];
      }
    } else {
      activeItems.value = [value];
    }
  } else {
    if (activeItems.value.includes(value)) {
      activeItems.value = activeItems.value.filter(item => item !== value);
    } else {
      activeItems.value.push(value);
    }
  }
};

provide('accordion', {
  activeItems,
  toggleItem,
});
</script>

<template>
  <div :class="['w-full', props.class]">
    <slot />
  </div>
</template>

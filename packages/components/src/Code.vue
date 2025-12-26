<script setup lang="ts">
import { computed, ref } from 'vue';

export interface CodeProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  inline?: boolean;
  class?: string;
}

const props = withDefaults(defineProps<CodeProps>(), {
  language: 'text',
  showLineNumbers: false,
  inline: false,
});

const copied = ref(false);

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(props.code);
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2000);
  } catch (err) {
    console.error('Failed to copy code:', err);
  }
};

const lines = computed(() => props.code.trim().split('\n'));

const containerClasses = computed(() => {
  if (props.inline) {
    return 'px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 font-mono text-sm';
  }
  return [
    'relative group rounded-xl bg-neutral-900 dark:bg-black border border-neutral-800 transition-all duration-200 overflow-hidden',
    props.class,
  ].join(' ');
});

</script>

<template>
  <code v-if="inline" :class="containerClasses">
    {{ code }}
  </code>
  <div v-else :class="containerClasses">
    <div class="flex items-center justify-between px-4 py-2 border-b border-neutral-800 bg-neutral-800/50">
      <span class="text-xs font-medium text-neutral-400 uppercase tracking-wider">{{ language }}</span>
      <button
        @click="copyToClipboard"
        class="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-100 hover:bg-neutral-700 transition-all duration-200"
        title="Copy code"
      >
        <i :class="copied ? 'ri-check-line text-semantic-success' : 'ri-file-copy-line'"></i>
      </button>
    </div>
    <div class="overflow-x-auto p-4 font-mono text-sm text-neutral-300">
      <table class="w-full border-collapse">
        <tbody>
          <tr v-for="(line, index) in lines" :key="index">
            <td
              v-if="showLineNumbers"
              class="w-10 pr-4 text-neutral-600 text-right select-none"
            >
              {{ index + 1 }}
            </td>
            <td class="whitespace-pre">
              {{ line }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

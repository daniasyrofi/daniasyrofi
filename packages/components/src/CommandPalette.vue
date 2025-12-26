<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';

export interface CommandItem {
  id: string;
  title: string;
  description?: string;
  icon?: string;
  category?: string;
  action: () => void;
}

export interface CommandPaletteProps {
  open?: boolean;
  items: CommandItem[];
  placeholder?: string;
}

const props = withDefaults(defineProps<CommandPaletteProps>(), {
  open: false,
  placeholder: 'Type a command or search...',
});

const emit = defineEmits<{
  'update:open': [value: boolean];
}>();

const query = ref('');
const selectedIndex = ref(0);

const filteredItems = computed(() => {
  const search = query.value.toLowerCase();
  return props.items.filter(item => 
    item.title.toLowerCase().includes(search) || 
    item.description?.toLowerCase().includes(search) ||
    item.category?.toLowerCase().includes(search)
  );
});

const categories = computed(() => {
  const cats = new Set(filteredItems.value.map(item => item.category || 'General'));
  return Array.from(cats);
});

const itemsByCategory = (category: string) => {
  return filteredItems.value.filter(item => (item.category || 'General') === category);
};

const close = () => {
  emit('update:open', false);
  query.value = '';
};

const handleSelect = (item: CommandItem) => {
  item.action();
  close();
};

const onKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    close();
  } else if (e.key === 'ArrowDown') {
    selectedIndex.value = (selectedIndex.value + 1) % filteredItems.value.length;
  } else if (e.key === 'ArrowUp') {
    selectedIndex.value = (selectedIndex.value - 1 + filteredItems.value.length) % filteredItems.value.length;
  } else if (e.key === 'Enter') {
    if (filteredItems.value[selectedIndex.value]) {
      handleSelect(filteredItems.value[selectedIndex.value]);
    }
  }
};

onMounted(() => {
  window.addEventListener('keydown', (e) => {
    if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      emit('update:open', !props.open);
    }
  });
});
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="open"
        class="fixed inset-0 z-50 flex items-start justify-center p-4 pt-[10vh] bg-black/50 backdrop-blur-sm"
        @click="close"
      >
        <div
          class="w-full max-w-2xl bg-white dark:bg-neutral-950 rounded-xl shadow-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800"
          @click.stop
        >
          <div class="flex items-center px-4 border-b border-neutral-200 dark:border-neutral-800">
            <i class="ri-search-line text-neutral-400 mr-2" />
            <input
              v-model="query"
              class="w-full py-4 bg-transparent outline-none text-neutral-900 dark:text-neutral-100"
              :placeholder="placeholder"
              @keydown="onKeyDown"
              autofocus
            />
            <div class="flex items-center gap-1 ml-2">
              <kbd class="px-2 py-1 text-xs font-sans font-medium text-neutral-400 bg-neutral-100 dark:bg-neutral-800 rounded">ESC</kbd>
            </div>
          </div>

          <div class="max-h-[60vh] overflow-y-auto p-2">
            <div v-if="filteredItems.length === 0" class="py-12 text-center text-neutral-500">
              No results found.
            </div>
            
            <div v-for="category in categories" :key="category" class="mb-4 last:mb-0">
              <h3 class="px-2 mb-2 text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                {{ category }}
              </h3>
              <div class="space-y-1">
                <div
                  v-for="item in itemsByCategory(category)"
                  :key="item.id"
                  :class="[
                    'flex items-center px-3 py-2 rounded-lg cursor-pointer transition-colors',
                    filteredItems.indexOf(item) === selectedIndex ? 'bg-neutral-100 dark:bg-neutral-800 text-brand-primary' : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-900'
                  ]"
                  @click="handleSelect(item)"
                  @mouseenter="selectedIndex = filteredItems.indexOf(item)"
                >
                  <i v-if="item.icon" :class="[item.icon, 'mr-3 text-lg opacity-70']" />
                  <div class="flex-1">
                    <div class="font-medium">{{ item.title }}</div>
                    <div v-if="item.description" class="text-xs opacity-60">{{ item.description }}</div>
                  </div>
                  <i v-if="filteredItems.indexOf(item) === selectedIndex" class="ri-arrow-right-line opacity-50" />
                </div>
              </div>
            </div>
          </div>
          
          <div class="px-4 py-3 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 flex items-center justify-between text-xs text-neutral-500">
            <div class="flex items-center gap-4">
              <span class="flex items-center gap-1"><kbd class="px-1.5 py-0.5 bg-white dark:bg-neutral-800 border rounded">↑↓</kbd> to navigate</span>
              <span class="flex items-center gap-1"><kbd class="px-1.5 py-0.5 bg-white dark:bg-neutral-800 border rounded">Enter</kbd> to select</span>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

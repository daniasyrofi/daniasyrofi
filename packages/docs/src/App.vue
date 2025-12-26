<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';

const isDark = ref(false);

onMounted(() => {
  const stored = localStorage.getItem('theme');
  if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    isDark.value = true;
    document.documentElement.classList.add('dark');
  }
});

const toggleTheme = () => {
  isDark.value = !isDark.value;
  if (isDark.value) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
};
</script>

<template>
  <div class="min-h-screen bg-neutral-50 dark:bg-neutral-900">
    <nav class="bg-white dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <RouterLink to="/" class="flex items-center text-2xl font-bold font-heading text-brand-primary">
              Vue DS
            </RouterLink>
            <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
              <div class="relative group">
                <button class="inline-flex items-center px-1 pt-1 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100">
                  Foundations
                </button>
                <div class="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-neutral-800 ring-1 ring-black ring-opacity-5 hidden group-hover:block z-10">
                  <div class="py-1">
                    <RouterLink to="/foundations/colors" class="block px-4 py-2 text-sm text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700">
                      Colors
                    </RouterLink>
                    <RouterLink to="/foundations/typography" class="block px-4 py-2 text-sm text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700">
                      Typography
                    </RouterLink>
                    <RouterLink to="/foundations/spacing" class="block px-4 py-2 text-sm text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700">
                      Spacing
                    </RouterLink>
                  </div>
                </div>
              </div>
              <div class="relative group">
                <button class="inline-flex items-center px-1 pt-1 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100">
                  Components
                </button>
                <div class="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-neutral-800 ring-1 ring-black ring-opacity-5 hidden group-hover:block z-10">
                  <div class="py-1">
                    <RouterLink to="/components/button" class="block px-4 py-2 text-sm text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700">
                      Button
                    </RouterLink>
                    <RouterLink to="/components/input" class="block px-4 py-2 text-sm text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700">
                      Input
                    </RouterLink>
                    <RouterLink to="/components/card" class="block px-4 py-2 text-sm text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700">
                      Card
                    </RouterLink>
                    <RouterLink to="/components/badge" class="block px-4 py-2 text-sm text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700">
                      Badge
                    </RouterLink>
                    <RouterLink to="/components/alert" class="block px-4 py-2 text-sm text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700">
                      Alert
                    </RouterLink>
                    <RouterLink to="/components/typography" class="block px-4 py-2 text-sm text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700">
                      Typography
                    </RouterLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center">
            <button
              @click="toggleTheme"
              class="p-2 rounded-md text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800"
            >
              <span v-if="isDark">☀️</span>
              <span v-else>🌙</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isDark = ref(false)

onMounted(() => {
  const stored = localStorage.getItem('theme')
  if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    isDark.value = true
    document.documentElement.classList.add('dark')
  }
})

const toggleTheme = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}
</script>

<template>
  <div class="max-w-5xl mx-auto px-4 py-8">
    <div class="mb-8">
      <h1 class="text-4xl font-bold mb-4 font-heading">Themes</h1>
      <p class="text-lg text-muted-foreground">
        Customize your design system with light and dark mode support.
      </p>
    </div>

    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4">Theme Toggle</h2>
      <p class="text-muted-foreground mb-6">
        Switch between light and dark themes. The preference is saved to localStorage.
      </p>
      <div class="surface p-6">
        <div class="flex items-center justify-between mb-4">
          <span class="font-medium">Current Theme</span>
          <span class="text-muted-foreground">{{ isDark ? 'Dark' : 'Light' }}</span>
        </div>
        <button
          @click="toggleTheme"
          class="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          {{ isDark ? '☀️ Switch to Light' : '🌙 Switch to Dark' }}
        </button>
      </div>
    </section>

    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4">Color Tokens</h2>
      <p class="text-muted-foreground mb-6">
        All semantic colors use HSL values for easy theming.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="surface p-6">
          <h3 class="font-semibold mb-4">Primary Colors</h3>
          <div class="space-y-3">
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded bg-primary"></div>
              <div>
                <p class="font-medium">Primary</p>
                <p class="text-xs text-muted-foreground">hsl(var(--primary))</p>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded bg-primary/90"></div>
              <div>
                <p class="font-medium">Primary Hover</p>
                <p class="text-xs text-muted-foreground">hsl(var(--primary) / 0.9)</p>
              </div>
            </div>
          </div>
        </div>

        <div class="surface p-6">
          <h3 class="font-semibold mb-4">Semantic Colors</h3>
          <div class="space-y-3">
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded bg-success"></div>
              <div>
                <p class="font-medium">Success</p>
                <p class="text-xs text-muted-foreground">hsl(var(--success))</p>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded bg-warning"></div>
              <div>
                <p class="font-medium">Warning</p>
                <p class="text-xs text-muted-foreground">hsl(var(--warning))</p>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded bg-destructive"></div>
              <div>
                <p class="font-medium">Destructive</p>
                <p class="text-xs text-muted-foreground">hsl(var(--destructive))</p>
              </div>
            </div>
          </div>
        </div>

        <div class="surface p-6">
          <h3 class="font-semibold mb-4">Surface Colors</h3>
          <div class="space-y-3">
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded bg-background border border-border"></div>
              <div>
                <p class="font-medium">Background</p>
                <p class="text-xs text-muted-foreground">hsl(var(--background))</p>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded bg-card border border-border"></div>
              <div>
                <p class="font-medium">Card</p>
                <p class="text-xs text-muted-foreground">hsl(var(--card))</p>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded bg-muted"></div>
              <div>
                <p class="font-medium">Muted</p>
                <p class="text-xs text-muted-foreground">hsl(var(--muted))</p>
              </div>
            </div>
          </div>
        </div>

        <div class="surface p-6">
          <h3 class="font-semibold mb-4">Border Colors</h3>
          <div class="space-y-3">
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded bg-background border border-border"></div>
              <div>
                <p class="font-medium">Border</p>
                <p class="text-xs text-muted-foreground">hsl(var(--border))</p>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded bg-input border border-input"></div>
              <div>
                <p class="font-medium">Input</p>
                <p class="text-xs text-muted-foreground">hsl(var(--input))</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4">Radius Tokens</h2>
      <p class="text-muted-foreground mb-6">
        Border radius tokens for consistent rounded corners.
      </p>
      <div class="surface p-6">
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div class="text-center">
            <div class="w-16 h-16 mx-auto mb-2 bg-primary rounded-sm"></div>
            <p class="text-sm font-medium">sm</p>
            <p class="text-xs text-muted-foreground">10px</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 mx-auto mb-2 bg-primary rounded"></div>
            <p class="text-sm font-medium">md</p>
            <p class="text-xs text-muted-foreground">16px</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 mx-auto mb-2 bg-primary rounded-lg"></div>
            <p class="text-sm font-medium">lg</p>
            <p class="text-xs text-muted-foreground">20px</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 mx-auto mb-2 bg-primary rounded-xl"></div>
            <p class="text-sm font-medium">xl</p>
            <p class="text-xs text-muted-foreground">30px</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 mx-auto mb-2 bg-primary rounded-2xl"></div>
            <p class="text-sm font-medium">2xl</p>
            <p class="text-xs text-muted-foreground">40px</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 mx-auto mb-2 bg-primary rounded-full"></div>
            <p class="text-sm font-medium">full</p>
            <p class="text-xs text-muted-foreground">9999px</p>
          </div>
        </div>
      </div>
    </section>

    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4">Shadow Tokens</h2>
      <p class="text-muted-foreground mb-6">
        Shadow tokens for depth and elevation.
      </p>
      <div class="surface p-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="text-center">
            <div class="w-32 h-32 mx-auto mb-2 bg-card rounded shadow-sm flex items-center justify-center">
              <span class="text-sm">sm</span>
            </div>
            <p class="text-sm font-medium">Small</p>
          </div>
          <div class="text-center">
            <div class="w-32 h-32 mx-auto mb-2 bg-card rounded shadow-md flex items-center justify-center">
              <span class="text-sm">md</span>
            </div>
            <p class="text-sm font-medium">Medium</p>
          </div>
          <div class="text-center">
            <div class="w-32 h-32 mx-auto mb-2 bg-card rounded shadow-lg flex items-center justify-center">
              <span class="text-sm">lg</span>
            </div>
            <p class="text-sm font-medium">Large</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

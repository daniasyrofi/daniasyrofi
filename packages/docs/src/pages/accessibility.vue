<script setup lang="ts">
import { cn } from '@/lib/cn'

const checklist = [
  {
    category: 'Keyboard Navigation',
    items: [
      { status: true, description: 'All interactive elements keyboard accessible (Tab/Shift+Tab navigation)' },
      { status: true, description: 'Focus-visible ring on all buttons, inputs, tabs, menu items' },
      { status: true, description: 'Focus ring color = --ring (primary)' },
      { status: true, description: 'Dropdown/Menu: arrow keys navigate items (up/down), enter/space selects' },
      { status: true, description: 'Dialog: ESC closes, proper focus management' },
    ],
  },
  {
    category: 'Focus Management',
    items: [
      { status: true, description: 'Dialog: focus trap (focus cycles within dialog)' },
      { status: true, description: 'Modal: backdrop click optional for closing' },
      { status: true, description: 'Tabs: arrow key navigation between tabs' },
      { status: true, description: 'Visible focus indicators on all interactive elements' },
    ],
  },
  {
    category: 'Form Accessibility',
    items: [
      { status: true, description: 'Label htmlFor linked to input id' },
      { status: true, description: 'Proper error message association with inputs' },
      { status: true, description: 'Required field indicators' },
      { status: true, description: 'Form validation with clear error messages' },
    ],
  },
  {
    category: 'Semantic HTML',
    items: [
      { status: true, description: 'Button has type="button" (no type=submit unless form)' },
      { status: true, description: 'Proper ARIA roles where needed' },
      { status: true, description: 'Table: thead/tbody/tfoot structure' },
      { status: true, description: 'Headings use proper h1-h6 hierarchy' },
    ],
  },
  {
    category: 'Color & Contrast',
    items: [
      { status: true, description: 'Foreground/background min 4.5:1 for body text' },
      { status: true, description: 'UI components min 3:1 contrast ratio' },
      { status: true, description: 'No color-only information (use icons/text + color)' },
      { status: true, description: 'Focus indicators have sufficient contrast' },
    ],
  },
  {
    category: 'ARIA Attributes',
    items: [
      { status: true, description: 'Proper aria-label for icon-only buttons' },
      { status: true, description: 'aria-expanded for collapsible elements' },
      { status: true, description: 'aria-selected for active tabs/items' },
      { status: true, description: 'aria-hidden for decorative icons' },
    ],
  },
  {
    category: 'Motion & Animation',
    items: [
      { status: true, description: 'Respects prefers-reduced-motion (no animations if user prefers)' },
      { status: true, description: 'Transition durations are appropriate (150ms-300ms)' },
      { status: true, description: 'Smooth easing functions (cubic-bezier)' },
    ],
  },
]

const keyboardShortcuts = [
  { key: 'Tab', action: 'Move focus to next element' },
  { key: 'Shift + Tab', action: 'Move focus to previous element' },
  { key: 'Enter / Space', action: 'Activate button or link' },
  { key: 'Escape', action: 'Close modal or dismiss overlay' },
  { key: 'Arrow Up/Down', action: 'Navigate menu items or tabs' },
  { key: 'Arrow Left/Right', action: 'Navigate horizontal tabs' },
  { key: 'Home', action: 'Jump to first item in list' },
  { key: 'End', action: 'Jump to last item in list' },
]
</script>

<template>
  <div class="max-w-5xl mx-auto px-4 py-8">
    <div class="mb-8">
      <h1 class="text-4xl font-bold mb-4 font-heading">Accessibility</h1>
      <p class="text-lg text-muted-foreground">
        Our design system is built with accessibility in mind. All components follow WCAG 2.1 guidelines.
      </p>
    </div>

    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4">Accessibility Checklist</h2>
      <p class="text-muted-foreground mb-6">
        Comprehensive checklist of accessibility features implemented across all components.
      </p>

      <div class="space-y-6">
        <div v-for="category in checklist" :key="category.category" class="surface">
          <div class="px-6 py-4 border-b border-border">
            <h3 class="text-lg font-semibold">{{ category.category }}</h3>
          </div>
          <ul class="divide-y divide-border">
            <li
              v-for="(item, index) in category.items"
              :key="index"
              class="px-6 py-4 flex items-start gap-3"
            >
              <span
                :class="cn(
                  'flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm',
                  item.status ? 'bg-success text-success-foreground' : 'bg-destructive text-destructive-foreground'
                )"
              >
                {{ item.status ? '✓' : '✗' }}
              </span>
              <span :class="item.status ? '' : 'text-muted-foreground line-through'">
                {{ item.description }}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4">Keyboard Shortcuts</h2>
      <p class="text-muted-foreground mb-6">
        Standard keyboard shortcuts for navigating the interface.
      </p>

      <div class="surface">
        <table class="w-full">
          <thead>
            <tr class="border-b border-border">
              <th class="text-left px-6 py-3 font-semibold">Key Combination</th>
              <th class="text-left px-6 py-3 font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(shortcut, index) in keyboardShortcuts"
              :key="index"
              class="border-b border-border last:border-0"
            >
              <td class="px-6 py-3">
                <kbd class="px-2 py-1 bg-muted rounded text-sm font-mono">
                  {{ shortcut.key }}
                </kbd>
              </td>
              <td class="px-6 py-3">{{ shortcut.action }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4">WCAG Compliance</h2>
      <p class="text-muted-foreground mb-6">
        Our components meet the following WCAG 2.1 Level AA criteria.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="surface p-6">
          <h3 class="font-semibold mb-4 flex items-center gap-2">
            <span class="w-8 h-8 rounded-full bg-success flex items-center justify-center text-success-foreground text-sm">✓</span>
            Perceivable
          </h3>
          <ul class="space-y-2 text-sm">
            <li>• Text alternatives for non-text content</li>
            <li>• Captions and other alternatives for multimedia</li>
            <li>• Content can be presented in different ways</li>
            <li>• Content is easier to see and hear</li>
          </ul>
        </div>

        <div class="surface p-6">
          <h3 class="font-semibold mb-4 flex items-center gap-2">
            <span class="w-8 h-8 rounded-full bg-success flex items-center justify-center text-success-foreground text-sm">✓</span>
            Operable
          </h3>
          <ul class="space-y-2 text-sm">
            <li>• All functionality is available from a keyboard</li>
            <li>• Users have enough time to read and use content</li>
            <li>• Content does not cause seizures or physical reactions</li>
            <li>• Users can navigate, find content, and determine where they are</li>
          </ul>
        </div>

        <div class="surface p-6">
          <h3 class="font-semibold mb-4 flex items-center gap-2">
            <span class="w-8 h-8 rounded-full bg-success flex items-center justify-center text-success-foreground text-sm">✓</span>
            Understandable
          </h3>
          <ul class="space-y-2 text-sm">
            <li>• Text is readable and understandable</li>
            <li>• Content appears and operates in predictable ways</li>
            <li>• Users are helped to avoid and correct mistakes</li>
          </ul>
        </div>

        <div class="surface p-6">
          <h3 class="font-semibold mb-4 flex items-center gap-2">
            <span class="w-8 h-8 rounded-full bg-success flex items-center justify-center text-success-foreground text-sm">✓</span>
            Robust
          </h3>
          <ul class="space-y-2 text-sm">
            <li>• Content is compatible with current and future user agents</li>
            <li>• Assistive technologies are compatible</li>
            <li>• Proper semantic HTML structure</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

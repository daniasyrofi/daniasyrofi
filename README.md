# Agentic Design System

A production-ready, accessible Vue 3 design system inspired by Wise.design and shadcn/ui, featuring token-based theming, comprehensive component library, and specialized agentic UI components.

## Features

- 🎨 **Token-Based Theming**: HSL color system for easy light/dark mode customization
- 📦 **Copy-Paste Ready**: Components can be copied directly into your project
- 🌓 **Dark Mode**: Full dark mode support with localStorage persistence
- 🤖 **Agentic Components**: Specialized UI for AI agent interfaces (chat, tool logs, approval gates)
- ⚡ **Vue 3 + TypeScript**: Built with Vue 3 Composition API and full TypeScript support
- ♿ **Fully Accessible**: WCAG 2.1 AA compliant with keyboard navigation and focus management
- 🎯 **Customizable**: Easy to customize with Tailwind CSS and CSS variables

## Tree Structure

```
agentic-design-system/
├── packages/
│   ├── tokens/                      # Design tokens package
│   │   ├── src/
│   │   │   ├── tokens.css          # HSL color tokens (light/dark)
│   │   │   ├── globals.css         # Global styles & typography
│   │   │   ├── colors.json         # Color palette data
│   │   │   ├── typography.json     # Typography scale data
│   │   │   ├── spacing.json       # Spacing scale data
│   │   │   ├── shadows.json       # Shadow definitions
│   │   │   └── index.ts          # Token exports
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── components/                 # Vue component library
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── Button.vue
│   │   │   │   ├── Input.vue
│   │   │   │   ├── Card.vue
│   │   │   │   ├── Badge.vue
│   │   │   │   ├── Alert.vue
│   │   │   │   ├── Typography.vue
│   │   │   │   ├── Avatar.vue
│   │   │   │   ├── Checkbox.vue
│   │   │   │   ├── Radio.vue
│   │   │   │   ├── Toggle.vue
│   │   │   │   ├── Select.vue
│   │   │   │   ├── Textarea.vue
│   │   │   │   ├── Tabs.vue
│   │   │   │   ├── Modal.vue
│   │   │   │   ├── Tooltip.vue
│   │   │   │   ├── DropdownMenu.vue
│   │   │   │   ├── Popover.vue
│   │   │   │   ├── Sheet.vue
│   │   │   │   ├── Table.vue
│   │   │   │   ├── Separator.vue
│   │   │   │   ├── Skeleton.vue
│   │   │   │   ├── Spinner.vue
│   │   │   │   ├── Progress.vue
│   │   │   │   ├── EmptyState.vue
│   │   │   │   ├── Divider.vue
│   │   │   │   ├── Container.vue
│   │   │   │   ├── Grid.vue
│   │   │   │   ├── Flex.vue
│   │   │   │   ├── Stack.vue
│   │   │   │   └── agentic/      # Agentic-specific components
│   │   │   │       ├── ChatLayout.vue
│   │   │   │       ├── ConversationList.vue
│   │   │   │       ├── ConversationItem.vue
│   │   │   │       ├── ChatMessage.vue
│   │   │   │       ├── MessageComposer.vue
│   │   │   │       ├── AgentCard.vue
│   │   │   │       ├── ToolCallLog.vue
│   │   │   │       ├── RunStatusIndicator.vue
│   │   │   │       ├── ApprovalGate.vue
│   │   │   │       ├── MemoryChips.vue
│   │   │   │       └── AgentConsolePanel.vue
│   │   │   ├── lib/
│   │   │   │   └── cn.ts        # clsx + tailwind-merge utility
│   │   │   └── index.ts         # Component exports
│   │   ├── tailwind.config.ts     # Tailwind config with HSL tokens
│   │   ├── vite.config.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── docs/                      # Documentation site
│       ├── src/
│       │   ├── pages/
│       │   │   ├── index.vue     # Home page
│       │   │   ├── themes.vue    # Theme showcase
│       │   │   ├── accessibility.vue
│       │   │   ├── foundations/   # Token documentation
│       │   │   ├── components/   # Component docs
│       │   │   └── agentic/      # Agentic component demos
│       │   │       ├── chat.vue   # Full chat demo
│       │   │       └── components.vue
│       │   ├── styles/
│       │   │   └── global.css    # Imports tokens.css
│       │   ├── App.vue
│       │   └── main.ts           # Router configuration
│       ├── tailwind.config.ts     # Tailwind config for docs
│       ├── vite.config.ts
│       ├── package.json
│       └── tsconfig.json
├── .gitignore
├── package.json                  # Root package with monorepo scripts
├── pnpm-workspace.yaml          # Workspace configuration
├── tailwind.config.ts           # Shared root Tailwind config
└── README.md                   # This file
```

## How to Run

### Prerequisites

- Node.js >= 18.0.0
- pnpm >= 8.0.0

### Installation

```bash
# Install all dependencies
pnpm install

# Start documentation site (dev server)
pnpm dev

# Build all packages
pnpm build

# Build individual packages
pnpm build:tokens
pnpm build:components
pnpm build:docs
```

The documentation site will be available at `http://localhost:5173`.

## Tokens & Theme Location

- **Color Tokens**: `packages/tokens/src/tokens.css` (HSL-based)
- **Global Styles**: `packages/tokens/src/globals.css`
- **Tailwind Config**: `packages/components/tailwind.config.ts`
- **Docs Tailwind**: `packages/docs/tailwind.config.ts`
- **Theme Toggle**: `packages/docs/src/pages/themes.vue` with localStorage persistence

## Design Tokens

### HSL Color System

All colors use HSL format for easy theming:

```css
:root {
  --primary: 353.3 70.6% 49.4%;        /* #D72539 */
  --success: 150 76% 48%;               /* Green */
  --warning: 38 92% 50%;               /* Amber */
  --destructive: 0 84.2% 60.2%;       /* Red */
  --info: 217 91% 60%;                /* Blue */
  --background: 0 0% 100%;
  --foreground: 0 0% 13%;
  /* ... more tokens */
}

.dark {
  --background: 0 0% 8%;
  --foreground: 0 0% 95%;
  /* ... dark mode overrides */
}
```

### Radius Tokens

```css
--radius-sm: 10px;
--radius-md: 16px;
--radius-lg: 20px;
--radius-xl: 30px;
--radius-2xl: 40px;
```

### Shadow Tokens

```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
```

## Component Template

Here's the template for creating new components:

```vue
<script setup lang="ts">
import { cn } from '@/lib/cn'

interface Props {
  variant?: 'default' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'md',
})

const classes = computed(() =>
  cn(
    'base-classes',
    {
      'variant-default': props.variant === 'default',
      'variant-secondary': props.variant === 'secondary',
    },
    {
      'size-sm': props.size === 'sm',
      'size-md': props.size === 'md',
      'size-lg': props.size === 'lg',
    },
  )
)
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>
```

## Core UI Components

### Button
Variants: default, secondary, outline, ghost, destructive, link
Sizes: sm, md, lg, icon
Features: Loading state, focus ring

### Input
Features: Label, error state, helper text, focus ring

### Card
Components: Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter

### Badge
Variants: default, secondary, outline, destructive, success, warning, info
Sizes: sm, md, lg

### Alert
Variants: default, success, warning, error, info

### Typography
Variants: h1-h6, body, small, caption, label

### Tabs
Features: Arrow key navigation, keyboard accessible

### Modal
Features: Focus trap, ESC close, backdrop click optional

### Form Controls
Checkbox, Radio, Toggle, Select, Textarea with full accessibility

## Agentic UI Components

### ChatLayout
Two-column layout with sidebar (responsive drawer on mobile)

### ConversationList
List of conversations with active state and unread indicators

### ChatMessage
Message bubbles with role variants (user/assistant/system/tool)

### MessageComposer
Auto-resizing textarea with send button

### AgentCard
Agent profile with status badge (idle/thinking/running/error)

### ToolCallLog
Expandable accordion list of tool invocations with status

### RunStatusIndicator
Animated status display with optional progress bar

### ApprovalGate
Human-in-the-loop approval panel

### MemoryChips
Short-term and long-term memory display as removable chips

### AgentConsolePanel
Combined tool log, memory display, and status indicator

## Accessibility Checklist

### Keyboard Navigation
- ✅ All interactive elements keyboard accessible (Tab/Shift+Tab navigation)
- ✅ Focus-visible ring on all buttons, inputs, tabs, menu items
- ✅ Focus ring color = --ring (primary)
- ✅ Dropdown/Menu: arrow keys navigate items (up/down), enter/space selects
- ✅ Dialog: ESC closes, proper focus management

### Focus Management
- ✅ Dialog: focus trap (focus cycles within dialog)
- ✅ Modal: backdrop click optional for closing
- ✅ Tabs: arrow key navigation between tabs
- ✅ Visible focus indicators on all interactive elements

### Form Accessibility
- ✅ Label htmlFor linked to input id
- ✅ Proper error message association with inputs
- ✅ Required field indicators
- ✅ Form validation with clear error messages

### Semantic HTML
- ✅ Button has type="button" (no type=submit unless form)
- ✅ Proper ARIA roles where needed
- ✅ Table: thead/tbody/tfoot structure
- ✅ Headings use proper h1-h6 hierarchy

### Color & Contrast
- ✅ Foreground/background min 4.5:1 for body text
- ✅ UI components min 3:1 contrast ratio
- ✅ No color-only information (use icons/text + color)
- ✅ Focus indicators have sufficient contrast

### ARIA Attributes
- ✅ Proper aria-label for icon-only buttons
- ✅ aria-expanded for collapsible elements
- ✅ aria-selected for active tabs/items
- ✅ aria-hidden for decorative icons

### Motion & Animation
- ✅ Respects prefers-reduced-motion (no animations if user prefers)
- ✅ Transition durations are appropriate (150ms-300ms)
- ✅ Smooth easing functions (cubic-bezier)

## Theme Toggle Implementation

```vue
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
  <button @click="toggleTheme">
    {{ isDark ? '☀️' : '🌙' }}
  </button>
</template>
```

## Documentation Pages

### Home
Overview of the design system with quick links

### Foundations
- Colors: Color palette preview with HSL values
- Typography: Font samples and scale
- Spacing: Visual spacing scale
- Radius: Border radius showcase
- Shadows: Shadow samples

### Components
Gallery of all UI components with props table and code samples

### Agentic
Full chat demo with:
- Conversation list with active state
- Message stream with role-based styling
- Tool call logs with expandable details
- Agent console with status and memory
- Approval gate demo

### Themes
Light/dark theme preview with all tokens visualized

### Accessibility
WCAG checklist with status indicators
Keyboard shortcuts reference

## Copy-Paste Approach

Following shadcn/ui philosophy, components can be copied directly:

1. Copy component file from `packages/components/src/`
2. Copy `cn.ts` utility to your `lib/` folder
3. Ensure Tailwind is configured with same theme
4. Import tokens CSS in your global styles

## Brand

- **Primary Color**: #D72539 (HSL: 353.3 70.6% 49.4%)
- **Headings Font**: Inclusive Sans
- **Body Font**: Outfit
- **Base Spacing**: 4px units
- **Border Radius**: 10px-40px (sm-2xl)

## Scripts

- `pnpm dev` - Start all packages in development mode
- `pnpm build` - Build all packages
- `pnpm build:tokens` - Build tokens package
- `pnpm build:components` - Build components package
- `pnpm build:docs` - Build documentation site
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier
- `pnpm type-check` - Run TypeScript type checking

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

## Resources

- [Vue 3 Documentation](https://vuejs.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [wise.design](https://wise.design/)
- [shadcn/ui](https://ui.shadcn.com/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

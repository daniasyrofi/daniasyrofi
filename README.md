# Vue Design System

A modern, accessible, and customizable Vue 3 component library with a copy-paste approach, inspired by wise.design and shadcn/ui.

## Features

- 🎨 **Design Tokens**: Comprehensive design tokens for colors, typography, spacing, and shadows
- 📦 **Copy-Paste Ready**: Components can be copied directly into your project
- 🌓 **Dark Mode**: Full dark mode support with automatic theme switching
- ⚡ **Vue 3 + TypeScript**: Built with Vue 3 Composition API and full TypeScript support
- ♿ **Accessible**: Components follow accessibility best practices
- 🎯 **Customizable**: Easy to customize with Tailwind CSS and CSS variables

## Monorepo Structure

```
vue-design-system/
├── packages/
│   ├── tokens/          # Design tokens (colors, typography, spacing, shadows)
│   ├── components/      # Vue component library
│   └── docs/           # Documentation site
├── tailwind.config.ts  # Shared Tailwind configuration
└── pnpm-workspace.yaml # pnpm workspace configuration
```

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- pnpm >= 8.0.0

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd vue-design-system
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the documentation site:
```bash
pnpm dev
```

The documentation site will be available at `http://localhost:5173`.

## Design Tokens

Design tokens are defined in the `packages/tokens` package and include:

- **Colors**: Primary brand color (#D72539), semantic colors, neutral grayscale, dark mode variants
- **Typography**: Inclusive Sans for headings, Outfit for body text, comprehensive font scale
- **Spacing**: 12-step spacing scale based on 4px units
- **Shadows**: Subtle to prominent shadow scales for light and dark modes

### Using Tokens

```typescript
import { tokens } from '@vue-ds/tokens';

// Access color tokens
console.log(tokens.colors.brand.primary); // #D72539

// Access typography tokens
console.log(tokens.typography.fontFamilies.heading); // Inclusive Sans

// Access spacing tokens
console.log(tokens.spacing.scale['4']); // 16px
```

## Components

The component library includes six foundational components:

### Button

```vue
<script setup>
import { Button } from '@vue-ds/components';
</script>

<template>
  <Button variant="primary">Click me</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="outline" size="sm">Small Outline</Button>
</template>
```

### Input

```vue
<script setup>
import { Input } from '@vue-ds/components';
import { ref } from 'vue';

const email = ref('');
</script>

<template>
  <Input
    v-model="email"
    label="Email"
    type="email"
    placeholder="you@example.com"
  />
</template>
```

### Card

```vue
<script setup>
import { Card } from '@vue-ds/components';
</script>

<template>
  <Card variant="elevated" padding="lg">
    <h3>Card Title</h3>
    <p>Card content goes here.</p>
  </Card>
</template>
```

### Badge

```vue
<script setup>
import { Badge } from '@vue-ds/components';
</script>

<template>
  <Badge variant="success">Active</Badge>
  <Badge variant="error">Error</Badge>
  <Badge variant="warning" size="sm">Warning</Badge>
</template>
```

### Alert

```vue
<script setup>
import { Alert } from '@vue-ds/components';
</script>

<template>
  <Alert variant="success" title="Success">
    Your changes have been saved.
  </Alert>
</template>
```

### Typography

```vue
<script setup>
import { Typography } from '@vue-ds/components';
</script>

<template>
  <Typography variant="h1">Main Heading</Typography>
  <Typography variant="body">Body text content.</Typography>
  <Typography variant="caption">Small caption text.</Typography>
</template>
```

## Copy-Paste Approach

Following the shadcn/ui philosophy, you can copy individual component files directly into your project:

1. Copy the component file from `packages/components/src/`
2. Copy the relevant design tokens
3. Ensure you have Tailwind CSS configured with the same theme
4. Use the component in your application

## Dark Mode

Dark mode is implemented using CSS variables and a class-based approach:

```vue
<script setup>
import { ref } from 'vue';

const isDark = ref(false);

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
  <button @click="toggleTheme">
    {{ isDark ? '☀️' : '🌙' }}
  </button>
</template>
```

## Tailwind Configuration

The design system uses a shared Tailwind configuration at the root level. To use it in your project:

```typescript
import config from './tailwind.config';

export default {
  ...config,
  content: [
    // Add your content paths
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
};
```

## Building for Production

Build all packages:
```bash
pnpm build
```

Build individual packages:
```bash
pnpm build:tokens
pnpm build:components
pnpm build:docs
```

## Scripts

- `pnpm dev` - Start the documentation site in development mode
- `pnpm build` - Build all packages
- `pnpm build:tokens` - Build the tokens package
- `pnpm build:components` - Build the components package
- `pnpm build:docs` - Build the documentation site
- `pnpm preview` - Preview the built documentation site

## Fonts

The design system uses two fonts:

- **Inclusive Sans**: Used for headings (loaded from GitHub)
- **Outfit**: Used for body text (loaded from Google Fonts)

Fonts are automatically loaded in the documentation site via `global.css`.

## Customization

### Colors

Modify `packages/tokens/src/colors.json` to change the color palette. The primary brand color is `#D72539`.

### Typography

Edit `packages/tokens/src/typography.json` to adjust font families, sizes, weights, and line heights.

### Spacing

Update `packages/tokens/src/spacing.json` to modify the spacing scale.

### Component Styles

Components use Tailwind utility classes with CSS variables. You can customize them by:

1. Modifying the CSS variables in `packages/docs/src/styles/global.css`
2. Editing the component files directly
3. Overriding styles in your own CSS

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Resources

- [Vue 3 Documentation](https://vuejs.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [wise.design](https://wise.design/)
- [shadcn/ui](https://ui.shadcn.com/)

# Component Copy-Paste Guide

This guide explains how to copy components from this design system into your own project, following the shadcn/ui philosophy.

## Prerequisites

1. Vue 3 project set up
2. Tailwind CSS installed and configured
3. CSS variables set up (see below)

## Setup

### 1. Install Tailwind CSS

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 2. Configure Tailwind

Copy the configuration from `tailwind.config.ts` and add your content paths:

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss';

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          primary: 'var(--color-brand-primary)',
          // ... rest of colors
        },
        // ... rest of theme
      },
    },
  },
  plugins: [],
} satisfies Config;
```

### 3. Add CSS Variables

Create a `global.css` file and copy the CSS variables from `packages/docs/src/styles/global.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Brand Colors */
    --color-brand-primary: #D72539;
    /* ... rest of variables */
  }

  .dark {
    /* Dark mode variables */
  }
}
```

### 4. Add Fonts (Optional)

Add these font imports to your global CSS:

```css
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');

@font-face {
  font-family: 'Inclusive Sans';
  src: url('https://raw.githubusercontent.com/olivking/Inclusive-Sans/main/fonts/webfonts/InclusiveSans-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

## Copying Components

### Button Component

**File:** `packages/components/src/Button.vue`

1. Copy the entire `Button.vue` file to your `src/components/` directory
2. Use it in your app:

```vue
<script setup>
import Button from './components/Button.vue';
</script>

<template>
  <Button variant="primary" size="md">
    Click me
  </Button>
</template>
```

### Input Component

**File:** `packages/components/src/Input.vue`

1. Copy the entire `Input.vue` file to your `src/components/` directory
2. Use it with v-model:

```vue
<script setup>
import { ref } from 'vue';
import Input from './components/Input.vue';

const email = ref('');
</script>

<template>
  <Input
    v-model="email"
    label="Email"
    type="email"
    placeholder="Enter your email"
  />
</template>
```

### Card Component

**File:** `packages/components/src/Card.vue`

1. Copy the entire `Card.vue` file to your `src/components/` directory
2. Use it as a container:

```vue
<script setup>
import Card from './components/Card.vue';
</script>

<template>
  <Card variant="elevated" padding="lg">
    <h2>Card Title</h2>
    <p>Card content goes here.</p>
  </Card>
</template>
```

### Badge Component

**File:** `packages/components/src/Badge.vue`

Simple to copy and use for status indicators:

```vue
<script setup>
import Badge from './components/Badge.vue';
</script>

<template>
  <Badge variant="success">Active</Badge>
  <Badge variant="error">Failed</Badge>
</template>
```

### Alert Component

**File:** `packages/components/src/Alert.vue`

Copy for notification messages:

```vue
<script setup>
import Alert from './components/Alert.vue';
</script>

<template>
  <Alert variant="warning" title="Warning">
    This action cannot be undone.
  </Alert>
</template>
```

### Typography Component

**File:** `packages/components/src/Typography.vue`

For consistent text styling:

```vue
<script setup>
import Typography from './components/Typography.vue';
</script>

<template>
  <Typography variant="h1">Main Heading</Typography>
  <Typography variant="body">Body text content.</Typography>
</template>
```

## Customization

After copying a component, you can:

1. **Modify variants**: Add or remove variant options in the computed classes
2. **Change colors**: Update the CSS variables in your global.css
3. **Adjust sizes**: Modify the size mappings in the component
4. **Add features**: Extend the component with new props or functionality

### Example: Adding a new Button variant

```vue
<script setup lang="ts">
// In Button.vue, add to variants object:
const variants = {
  primary: '...',
  secondary: '...',
  custom: 'bg-purple-500 hover:bg-purple-600 text-white', // Your custom variant
};
</script>
```

## Dark Mode Setup

Add a theme toggle to your app:

```vue
<script setup>
import { ref, onMounted } from 'vue';

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
  <button @click="toggleTheme">
    {{ isDark ? '☀️ Light' : '🌙 Dark' }}
  </button>
</template>
```

## TypeScript Support

All components include TypeScript types. If you're using TypeScript, the props interfaces are exported:

```typescript
import type { ButtonProps } from './components/Button.vue';

const buttonProps: ButtonProps = {
  variant: 'primary',
  size: 'md',
  disabled: false,
};
```

## Tips

1. **Copy only what you need**: Don't copy all components at once, start with what you need
2. **Customize freely**: These components are meant to be modified for your specific needs
3. **Keep CSS variables**: They make theming and dark mode much easier
4. **Version control**: Keep your copied components in version control so you can track changes
5. **Remove unused variants**: If you don't need all variants, remove them to reduce bundle size

## Troubleshooting

### Styles not applying

- Ensure Tailwind is properly configured with the correct content paths
- Check that CSS variables are defined in your global CSS
- Verify that global CSS is imported in your main.ts/js

### Dark mode not working

- Add `darkMode: 'class'` to your Tailwind config
- Ensure the `.dark` class is being added to the `<html>` element
- Check that dark mode CSS variables are defined

### Fonts not loading

- Verify font URLs are accessible
- Check browser console for 404 errors
- Consider hosting fonts locally if external URLs are blocked

## Next Steps

1. Copy the components you need
2. Customize colors and variants for your brand
3. Add new components following the same patterns
4. Share your customizations with the community!

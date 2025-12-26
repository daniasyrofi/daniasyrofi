# Usage Examples

This document provides practical examples of using the Vue Design System components in real-world scenarios.

## Complete Form Example

```vue
<script setup lang="ts">
import { ref } from 'vue';
import { Button, Input, Card, Alert } from '@vue-ds/components';

const email = ref('');
const password = ref('');
const showSuccess = ref(false);
const errors = ref({
  email: false,
  password: false,
});

const handleSubmit = () => {
  errors.value.email = !email.value.includes('@');
  errors.value.password = password.value.length < 8;
  
  if (!errors.value.email && !errors.value.password) {
    showSuccess.value = true;
    setTimeout(() => showSuccess.value = false, 3000);
  }
};
</script>

<template>
  <Card variant="elevated" padding="lg" class="max-w-md mx-auto">
    <h2 class="text-2xl font-heading font-bold mb-6">Sign In</h2>
    
    <Alert v-if="showSuccess" variant="success" title="Success" class="mb-4">
      You have successfully signed in!
    </Alert>
    
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <Input
        v-model="email"
        label="Email"
        type="email"
        placeholder="you@example.com"
        :error="errors.email"
      />
      
      <Input
        v-model="password"
        label="Password"
        type="password"
        placeholder="••••••••"
        :error="errors.password"
      />
      
      <div class="flex gap-2 pt-2">
        <Button type="submit" variant="primary" class="flex-1">
          Sign In
        </Button>
        <Button type="button" variant="outline">
          Cancel
        </Button>
      </div>
    </form>
  </Card>
</template>
```

## Dashboard with Status Badges

```vue
<script setup lang="ts">
import { Badge, Card, Typography } from '@vue-ds/components';

const projects = [
  { name: 'Website Redesign', status: 'active', priority: 'high' },
  { name: 'Mobile App', status: 'pending', priority: 'medium' },
  { name: 'API Integration', status: 'completed', priority: 'low' },
];

const getStatusVariant = (status: string) => {
  const variants = {
    active: 'success',
    pending: 'warning',
    completed: 'info',
  };
  return variants[status] || 'default';
};

const getPriorityVariant = (priority: string) => {
  const variants = {
    high: 'error',
    medium: 'warning',
    low: 'info',
  };
  return variants[priority] || 'default';
};
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <Typography variant="h1" class="mb-8">Projects Dashboard</Typography>
    
    <div class="grid gap-4">
      <Card
        v-for="project in projects"
        :key="project.name"
        variant="bordered"
        padding="md"
      >
        <div class="flex items-center justify-between">
          <div>
            <Typography variant="h5" class="mb-2">
              {{ project.name }}
            </Typography>
            <div class="flex gap-2">
              <Badge :variant="getStatusVariant(project.status)" size="sm">
                {{ project.status }}
              </Badge>
              <Badge :variant="getPriorityVariant(project.priority)" size="sm">
                {{ project.priority }} priority
              </Badge>
            </div>
          </div>
          <Button variant="ghost" size="sm">
            View Details →
          </Button>
        </div>
      </Card>
    </div>
  </div>
</template>
```

## Notification System

```vue
<script setup lang="ts">
import { ref } from 'vue';
import { Alert, Button } from '@vue-ds/components';

interface Notification {
  id: number;
  variant: 'success' | 'warning' | 'error' | 'info';
  title: string;
  message: string;
}

const notifications = ref<Notification[]>([]);
let nextId = 1;

const addNotification = (variant: Notification['variant'], title: string, message: string) => {
  const notification = {
    id: nextId++,
    variant,
    title,
    message,
  };
  
  notifications.value.push(notification);
  
  setTimeout(() => {
    removeNotification(notification.id);
  }, 5000);
};

const removeNotification = (id: number) => {
  const index = notifications.value.findIndex(n => n.id === id);
  if (index > -1) {
    notifications.value.splice(index, 1);
  }
};
</script>

<template>
  <div>
    <!-- Notification Triggers -->
    <div class="flex gap-2 mb-8">
      <Button
        variant="primary"
        @click="addNotification('success', 'Success', 'Operation completed successfully')"
      >
        Success
      </Button>
      <Button
        variant="secondary"
        @click="addNotification('warning', 'Warning', 'Please review your settings')"
      >
        Warning
      </Button>
      <Button
        variant="destructive"
        @click="addNotification('error', 'Error', 'Something went wrong')"
      >
        Error
      </Button>
      <Button
        variant="outline"
        @click="addNotification('info', 'Info', 'New features available')"
      >
        Info
      </Button>
    </div>
    
    <!-- Notification Stack -->
    <div class="fixed top-4 right-4 space-y-2 max-w-md">
      <TransitionGroup name="notification">
        <Alert
          v-for="notification in notifications"
          :key="notification.id"
          :variant="notification.variant"
          :title="notification.title"
        >
          {{ notification.message }}
        </Alert>
      </TransitionGroup>
    </div>
  </div>
</template>

<style scoped>
.notification-enter-active,
.notification-leave-active {
  transition: all 0.3s ease;
}

.notification-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.notification-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
```

## Settings Panel with Dark Mode

```vue
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Card, Typography, Button, Badge } from '@vue-ds/components';

const isDark = ref(false);
const notificationsEnabled = ref(true);

onMounted(() => {
  const stored = localStorage.getItem('theme');
  isDark.value = stored === 'dark';
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

const toggleNotifications = () => {
  notificationsEnabled.value = !notificationsEnabled.value;
};
</script>

<template>
  <div class="max-w-2xl mx-auto">
    <Typography variant="h2" class="mb-6">Settings</Typography>
    
    <div class="space-y-4">
      <!-- Theme Setting -->
      <Card variant="bordered" padding="md">
        <div class="flex items-center justify-between">
          <div class="flex-1">
            <Typography variant="h6" class="mb-1">
              Theme
            </Typography>
            <Typography variant="caption">
              Choose between light and dark mode
            </Typography>
          </div>
          <div class="flex items-center gap-3">
            <Badge :variant="isDark ? 'primary' : 'default'">
              {{ isDark ? 'Dark' : 'Light' }}
            </Badge>
            <Button
              variant="outline"
              size="sm"
              @click="toggleTheme"
            >
              {{ isDark ? '☀️' : '🌙' }} Toggle
            </Button>
          </div>
        </div>
      </Card>
      
      <!-- Notifications Setting -->
      <Card variant="bordered" padding="md">
        <div class="flex items-center justify-between">
          <div class="flex-1">
            <Typography variant="h6" class="mb-1">
              Notifications
            </Typography>
            <Typography variant="caption">
              Receive notifications about updates
            </Typography>
          </div>
          <div class="flex items-center gap-3">
            <Badge :variant="notificationsEnabled ? 'success' : 'default'">
              {{ notificationsEnabled ? 'On' : 'Off' }}
            </Badge>
            <Button
              variant="outline"
              size="sm"
              @click="toggleNotifications"
            >
              Toggle
            </Button>
          </div>
        </div>
      </Card>
      
      <!-- Actions -->
      <div class="flex gap-2 pt-4">
        <Button variant="primary">
          Save Changes
        </Button>
        <Button variant="ghost">
          Reset to Defaults
        </Button>
      </div>
    </div>
  </div>
</template>
```

## Product Card Grid

```vue
<script setup lang="ts">
import { Card, Badge, Button, Typography } from '@vue-ds/components';

const products = [
  {
    id: 1,
    name: 'Premium Plan',
    price: '$29',
    period: '/month',
    features: ['10 Projects', 'Unlimited Users', '24/7 Support'],
    popular: true,
  },
  {
    id: 2,
    name: 'Business Plan',
    price: '$99',
    period: '/month',
    features: ['Unlimited Projects', 'Advanced Analytics', 'Priority Support'],
    popular: false,
  },
  {
    id: 3,
    name: 'Enterprise Plan',
    price: 'Custom',
    period: '',
    features: ['Custom Solutions', 'Dedicated Manager', 'SLA Guarantee'],
    popular: false,
  },
];
</script>

<template>
  <div class="max-w-6xl mx-auto">
    <div class="text-center mb-12">
      <Typography variant="h1" class="mb-4">Choose Your Plan</Typography>
      <Typography variant="body">
        Select the perfect plan for your needs
      </Typography>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card
        v-for="product in products"
        :key="product.id"
        :variant="product.popular ? 'elevated' : 'bordered'"
        padding="lg"
        class="relative"
      >
        <Badge
          v-if="product.popular"
          variant="primary"
          class="absolute top-4 right-4"
        >
          Popular
        </Badge>
        
        <Typography variant="h4" class="mb-2">
          {{ product.name }}
        </Typography>
        
        <div class="flex items-baseline mb-6">
          <Typography variant="h2" class="text-brand-primary">
            {{ product.price }}
          </Typography>
          <Typography variant="body" class="ml-1">
            {{ product.period }}
          </Typography>
        </div>
        
        <ul class="space-y-3 mb-8">
          <li
            v-for="feature in product.features"
            :key="feature"
            class="flex items-center text-neutral-700 dark:text-neutral-300"
          >
            <span class="text-semantic-success mr-2">✓</span>
            {{ feature }}
          </li>
        </ul>
        
        <Button
          :variant="product.popular ? 'primary' : 'outline'"
          class="w-full"
        >
          Get Started
        </Button>
      </Card>
    </div>
  </div>
</template>
```

## Data Table with Actions

```vue
<script setup lang="ts">
import { Badge, Button, Card } from '@vue-ds/components';

const users = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', status: 'active' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'User', status: 'active' },
  { id: 3, name: 'Carol Davis', email: 'carol@example.com', role: 'User', status: 'inactive' },
];

const getStatusVariant = (status: string) => {
  return status === 'active' ? 'success' : 'default';
};

const getRoleBadgeVariant = (role: string) => {
  return role === 'Admin' ? 'primary' : 'default';
};
</script>

<template>
  <Card variant="bordered" padding="none">
    <div class="overflow-x-auto">
      <table class="w-full">
        <thead class="bg-neutral-50 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
          <tr>
            <th class="px-6 py-3 text-left text-sm font-semibold text-neutral-900 dark:text-neutral-100">
              Name
            </th>
            <th class="px-6 py-3 text-left text-sm font-semibold text-neutral-900 dark:text-neutral-100">
              Email
            </th>
            <th class="px-6 py-3 text-left text-sm font-semibold text-neutral-900 dark:text-neutral-100">
              Role
            </th>
            <th class="px-6 py-3 text-left text-sm font-semibold text-neutral-900 dark:text-neutral-100">
              Status
            </th>
            <th class="px-6 py-3 text-right text-sm font-semibold text-neutral-900 dark:text-neutral-100">
              Actions
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-neutral-200 dark:divide-neutral-800">
          <tr
            v-for="user in users"
            :key="user.id"
            class="hover:bg-neutral-50 dark:hover:bg-neutral-900"
          >
            <td class="px-6 py-4 text-sm font-medium text-neutral-900 dark:text-neutral-100">
              {{ user.name }}
            </td>
            <td class="px-6 py-4 text-sm text-neutral-600 dark:text-neutral-400">
              {{ user.email }}
            </td>
            <td class="px-6 py-4">
              <Badge :variant="getRoleBadgeVariant(user.role)" size="sm">
                {{ user.role }}
              </Badge>
            </td>
            <td class="px-6 py-4">
              <Badge :variant="getStatusVariant(user.status)" size="sm">
                {{ user.status }}
              </Badge>
            </td>
            <td class="px-6 py-4 text-right space-x-2">
              <Button variant="ghost" size="sm">Edit</Button>
              <Button variant="ghost" size="sm">Delete</Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </Card>
</template>
```

## Tips for Integration

1. **Composables**: Create Vue composables for common functionality like notifications
2. **Transitions**: Use Vue transitions for smooth animations
3. **Layouts**: Combine cards and typography for consistent layouts
4. **Forms**: Use Input components with validation libraries like VeeValidate
5. **State Management**: Integrate with Pinia or Vuex for complex state
6. **Routing**: Use with Vue Router for multi-page applications
7. **API Integration**: Combine with Axios or Fetch for data fetching
8. **Testing**: Components are easy to test with Vue Test Utils

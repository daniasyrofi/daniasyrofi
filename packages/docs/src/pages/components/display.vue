<script setup lang="ts">
import { 
  Well, 
  Code, 
  Quote, 
  Link, 
  Tag, 
  StatusIndicator, 
  Chip, 
  Callout, 
  Image, 
  Avatar, 
  AvatarGroup,
  Card,
  Divider,
  Stack,
  Flex
} from '@vue-ds/components';
import { ref } from 'vue';

const sampleCode = `function hello() {
  console.log("Hello, Anthropic!");
}

// This is a comment
const color = "#D72539";`;

const isChipSelected = ref(true);
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-5xl font-bold font-heading text-neutral-900 dark:text-neutral-100 mb-4">
      Display Components
    </h1>
    <p class="text-lg text-neutral-600 dark:text-neutral-400 mb-12">
      Components for presenting content, status, and media.
    </p>

    <section class="mb-12">
      <h2 class="text-3xl font-semibold font-heading text-neutral-900 dark:text-neutral-100 mb-6">
        Well & Callout
      </h2>
      <div class="space-y-6">
        <Well>This is a default well container for secondary content.</Well>
        <Callout title="Pro Tip" variant="info">
          Use the Command + K shortcut to quickly search through the documentation.
        </Callout>
        <Callout title="Success" variant="success">
          Your changes have been successfully saved to the cloud.
        </Callout>
      </div>
    </section>

    <section class="mb-12">
      <h2 class="text-3xl font-semibold font-heading text-neutral-900 dark:text-neutral-100 mb-6">
        Code & Quote
      </h2>
      <div class="space-y-6">
        <Code :code="sampleCode" language="typescript" showLineNumbers />
        <Quote author="Dario Amodei" source="Anthropic CEO" variant="brand">
          We want to build systems that are reliable, interpretable, and steerable.
        </Quote>
      </div>
    </section>

    <section class="mb-12">
      <h2 class="text-3xl font-semibold font-heading text-neutral-900 dark:text-neutral-100 mb-6">
        Status & Labels
      </h2>
      <Card padding="lg">
        <div class="space-y-8">
          <div class="flex flex-wrap gap-4">
            <Tag label="Beta" variant="brand" />
            <Tag label="New" variant="success" />
            <Tag label="Archived" variant="default" removable />
          </div>
          
          <div class="flex flex-wrap gap-8">
            <StatusIndicator status="online" label="Online" pulse />
            <StatusIndicator status="away" label="Away" />
            <StatusIndicator status="busy" label="Busy" />
            <StatusIndicator status="offline" label="Offline" />
          </div>

          <div class="flex flex-wrap gap-3">
            <Chip label="Vue.js" icon="ri-vuejs-line" v-model:selected="isChipSelected" />
            <Chip label="TypeScript" icon="ri-code-s-slash-line" />
            <Chip label="Tailwind" icon="ri-css3-line" removable />
          </div>
        </div>
      </Card>
    </section>

    <section class="mb-12">
      <h2 class="text-3xl font-semibold font-heading text-neutral-900 dark:text-neutral-100 mb-6">
        Media & Avatars
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Image 
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800" 
          alt="Abstract Art" 
          aspectRatio="16/9"
        />
        <div class="space-y-6">
          <h3 class="text-lg font-bold">Avatar Groups</h3>
          <AvatarGroup>
            <Avatar src="https://i.pravatar.cc/150?u=1" />
            <Avatar src="https://i.pravatar.cc/150?u=2" />
            <Avatar src="https://i.pravatar.cc/150?u=3" />
            <Avatar src="https://i.pravatar.cc/150?u=4" />
            <Avatar name="+5" />
          </AvatarGroup>
          
          <h3 class="text-lg font-bold">Links</h3>
          <div class="flex flex-col gap-2">
            <Link href="#">Documentation</Link>
            <Link href="https://anthropic.com" external>Visit Anthropic</Link>
            <Link href="#" variant="muted" icon="ri-arrow-right-line">Learn more</Link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

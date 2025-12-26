<script setup lang="ts">
import { 
  Navbar, 
  Sidebar, 
  Footer, 
  Stepper, 
  Breadcrumb, 
  Pagination,
  Button,
  IconButton,
  Container,
  Stack,
  DefinitionList
} from '@vue-ds/components';
import { ref } from 'vue';

const currentStep = ref(1);
const currentPage = ref(1);

const steps = [
  { title: 'Project Info', description: 'Basic details', icon: 'ri-information-line' },
  { title: 'Configuration', description: 'Set up your environment', icon: 'ri-settings-line' },
  { title: 'Review', description: 'Final check', icon: 'ri-eye-line' },
];

const details = [
  { term: 'Package Name', details: '@vue-ds/core' },
  { term: 'Version', details: '2.0.0-beta.1' },
  { term: 'License', details: 'MIT' },
  { term: 'Author', details: 'Anthropic Design Team' },
];
</script>

<template>
  <div class="space-y-12 pb-20">
    <section>
      <Navbar>
        <template #logo>
          <div class="flex items-center gap-2 font-bold text-xl">
            <div class="w-8 h-8 bg-brand-primary rounded flex items-center justify-center text-white">A</div>
            <span>Anthropic</span>
          </div>
        </template>
        <template #links>
          <Button variant="ghost">Products</Button>
          <Button variant="ghost">Developers</Button>
          <Button variant="ghost">Pricing</Button>
        </template>
        <template #actions>
          <Button variant="outline" size="sm">Sign In</Button>
          <Button size="sm">Get Started</Button>
        </template>
      </Navbar>
    </section>

    <Container class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-5xl font-bold font-heading text-neutral-900 dark:text-neutral-100 mb-4">
        Navigation & Layout
      </h1>
      <p class="text-lg text-neutral-600 dark:text-neutral-400 mb-12">
        Components for structuring your application and guiding users.
      </p>

      <section class="mb-20">
        <h2 class="text-3xl font-semibold font-heading text-neutral-900 dark:text-neutral-100 mb-6">
          Stepper
        </h2>
        <div class="bg-white dark:bg-neutral-900 p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800">
          <Stepper :steps="steps" v-model:currentStep="currentStep" />
          <div class="mt-12 flex justify-center gap-4">
            <Button 
              variant="outline" 
              :disabled="currentStep === 0" 
              @click="currentStep--"
            >
              Previous
            </Button>
            <Button 
              :disabled="currentStep === steps.length - 1" 
              @click="currentStep++"
            >
              Next
            </Button>
          </div>
        </div>
      </section>

      <section class="mb-20">
        <h2 class="text-3xl font-semibold font-heading text-neutral-900 dark:text-neutral-100 mb-6">
          Definition List & Breadcrumb
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div class="space-y-6">
            <h3 class="text-xl font-bold">Definition List</h3>
            <DefinitionList :items="details" striped />
          </div>
          <div class="space-y-8">
            <div>
              <h3 class="text-xl font-bold mb-4">Breadcrumb</h3>
              <Breadcrumb :items="[
                { label: 'Home', href: '#' },
                { label: 'Components', href: '#' },
                { label: 'Navigation', current: true }
              ]" />
            </div>
            <div>
              <h3 class="text-xl font-bold mb-4">Pagination</h3>
              <Pagination :total="100" v-model:currentPage="currentPage" :pageSize="10" />
            </div>
          </div>
        </div>
      </section>
    </Container>

    <Footer>
      <template #brand>
        <div class="flex items-center gap-2 font-bold text-xl mb-4">
          <div class="w-8 h-8 bg-brand-primary rounded flex items-center justify-center text-white">A</div>
          <span>Anthropic</span>
        </div>
        <p class="text-sm text-neutral-500 max-w-xs">
          Building safer, more reliable AI systems through better design and engineering.
        </p>
      </template>
      <div class="space-y-4">
        <h4 class="font-bold">Product</h4>
        <ul class="space-y-2 text-sm text-neutral-500">
          <li><a href="#" class="hover:text-brand-primary">Claude</a></li>
          <li><a href="#" class="hover:text-brand-primary">API</a></li>
          <li><a href="#" class="hover:text-brand-primary">Team Plan</a></li>
        </ul>
      </div>
      <div class="space-y-4">
        <h4 class="font-bold">Company</h4>
        <ul class="space-y-2 text-sm text-neutral-500">
          <li><a href="#" class="hover:text-brand-primary">About</a></li>
          <li><a href="#" class="hover:text-brand-primary">Careers</a></li>
          <li><a href="#" class="hover:text-brand-primary">Research</a></li>
        </ul>
      </div>
      <div class="space-y-4">
        <h4 class="font-bold">Legal</h4>
        <ul class="space-y-2 text-sm text-neutral-500">
          <li><a href="#" class="hover:text-brand-primary">Privacy</a></li>
          <li><a href="#" class="hover:text-brand-primary">Terms</a></li>
        </ul>
      </div>
      <template #copyright>
        © 2024 Anthropic PBC. All rights reserved.
      </template>
      <template #bottom-links>
        <IconButton icon="ri-twitter-x-line" label="Twitter" variant="ghost" rounded />
        <IconButton icon="ri-github-line" label="GitHub" variant="ghost" rounded />
        <IconButton icon="ri-linkedin-line" label="LinkedIn" variant="ghost" rounded />
      </template>
    </Footer>
  </div>
</template>

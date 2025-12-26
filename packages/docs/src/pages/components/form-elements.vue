<script setup lang="ts">
import { Input, Textarea, Checkbox, Radio, Toggle, Select, Search, Button, Card } from '@vue-ds/components';
import { ref } from 'vue';

const inputValue = ref('');
const textareaValue = ref('');
const checkboxValue = ref(false);
const radioValue = ref('option1');
const toggleValue = ref(false);
const selectValue = ref(null);
const searchValue = ref('');

const selectOptions = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
  { label: 'Disabled Option', value: '4', disabled: true },
];
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-5xl font-bold font-heading text-neutral-900 dark:text-neutral-100 mb-4">
      Form Elements
    </h1>
    <p class="text-lg text-neutral-600 dark:text-neutral-400 mb-12">
      Complete form components with labels, validation, and accessibility.
    </p>

    <section class="mb-12">
      <h2 class="text-3xl font-semibold font-heading text-neutral-900 dark:text-neutral-100 mb-6">
        Input
      </h2>
      <Card padding="lg">
        <div class="space-y-6 max-w-md">
          <Input
            v-model="inputValue"
            label="Email"
            type="email"
            placeholder="Enter your email"
            helperText="We'll never share your email."
          />
          <Input
            v-model="inputValue"
            label="Search"
            icon="ri-mail-line"
            placeholder="With icon"
          />
          <Input
            label="Error State"
            error="This field is required"
            placeholder="Required field"
          />
        </div>
      </Card>
    </section>

    <section class="mb-12">
      <h2 class="text-3xl font-semibold font-heading text-neutral-900 dark:text-neutral-100 mb-6">
        Textarea
      </h2>
      <Card padding="lg">
        <div class="max-w-md">
          <Textarea
            v-model="textareaValue"
            label="Description"
            placeholder="Enter a description..."
            :rows="4"
          />
        </div>
      </Card>
    </section>

    <section class="mb-12">
      <h2 class="text-3xl font-semibold font-heading text-neutral-900 dark:text-neutral-100 mb-6">
        Checkbox & Radio
      </h2>
      <Card padding="lg">
        <div class="space-y-6">
          <div>
            <h3 class="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3">Checkboxes</h3>
            <div class="space-y-3">
              <Checkbox v-model="checkboxValue" label="Accept terms and conditions" />
              <Checkbox label="Subscribe to newsletter" />
              <Checkbox label="Disabled option" disabled />
            </div>
          </div>

          <div>
            <h3 class="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3">Radio Buttons</h3>
            <div class="space-y-3">
              <Radio v-model="radioValue" value="option1" label="Option 1" name="example" />
              <Radio v-model="radioValue" value="option2" label="Option 2" name="example" />
              <Radio v-model="radioValue" value="option3" label="Option 3 (Disabled)" name="example" disabled />
            </div>
          </div>
        </div>
      </Card>
    </section>

    <section class="mb-12">
      <h2 class="text-3xl font-semibold font-heading text-neutral-900 dark:text-neutral-100 mb-6">
        Toggle & Select
      </h2>
      <Card padding="lg">
        <div class="space-y-6 max-w-md">
          <Toggle v-model="toggleValue" label="Enable notifications" />
          <Toggle v-model="toggleValue" label="Small size" size="sm" />
          <Select
            v-model="selectValue"
            label="Choose an option"
            :options="selectOptions"
            placeholder="Select..."
            helperText="Select one of the available options"
          />
        </div>
      </Card>
    </section>

    <section class="mb-12">
      <h2 class="text-3xl font-semibold font-heading text-neutral-900 dark:text-neutral-100 mb-6">
        Search
      </h2>
      <Card padding="lg">
        <div class="max-w-md">
          <Search
            v-model="searchValue"
            label="Search"
            placeholder="Search anything..."
          />
        </div>
      </Card>
    </section>
  </div>
</template>

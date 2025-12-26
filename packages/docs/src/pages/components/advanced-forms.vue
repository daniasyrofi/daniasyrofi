<script setup lang="ts">
import { 
  ColorPicker, 
  SegmentedControl, 
  CheckboxGroup, 
  RadioGroup, 
  FileUpload, 
  DatePicker, 
  TimePicker, 
  Combobox,
  Card,
  Button
} from '@vue-ds/components';
import { ref } from 'vue';

const color = ref('#D72539');
const segmented = ref('option1');
const checkboxGroup = ref(['1']);
const radioGroup = ref('1');
const dateValue = ref(new Date().toISOString().split('T')[0]);
const timeValue = ref('12:00');
const comboboxValue = ref(null);

const options = [
  { label: 'Option 1', value: 'option1', icon: 'ri-home-line' },
  { label: 'Option 2', value: 'option2', icon: 'ri-user-line' },
  { label: 'Option 3', value: 'option3', icon: 'ri-settings-line' },
];

const groupOptions = [
  { label: 'Standard', value: '1', description: 'Basic features included' },
  { label: 'Pro', value: '2', description: 'Advanced features for professionals' },
  { label: 'Enterprise', value: '3', description: 'Custom solutions for large teams' },
];

const cardOptions = [
  { label: 'Economy', value: '1', description: '$10/mo', icon: 'ri-leaf-line' },
  { label: 'Business', value: '2', description: '$30/mo', icon: 'ri-briefcase-line' },
  { label: 'First Class', value: '3', description: '$100/mo', icon: 'ri-vip-diamond-line' },
];

const comboOptions = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Cherry', value: 'cherry' },
  { label: 'Date', value: 'date' },
  { label: 'Elderberry', value: 'elderberry' },
];
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-5xl font-bold font-heading text-neutral-900 dark:text-neutral-100 mb-4">
      Advanced Forms
    </h1>
    <p class="text-lg text-neutral-600 dark:text-neutral-400 mb-12">
      Complex selection and input components for specialized use cases.
    </p>

    <section class="mb-12">
      <h2 class="text-3xl font-semibold font-heading text-neutral-900 dark:text-neutral-100 mb-6">
        Color Picker
      </h2>
      <Card padding="lg">
        <div class="max-w-md">
          <ColorPicker v-model="color" label="Pick a color" helperText="Choose a color for your project" />
        </div>
      </Card>
    </section>

    <section class="mb-12">
      <h2 class="text-3xl font-semibold font-heading text-neutral-900 dark:text-neutral-100 mb-6">
        Segmented Control
      </h2>
      <Card padding="lg">
        <div class="space-y-6">
          <SegmentedControl v-model="segmented" :options="options" />
          <SegmentedControl v-model="segmented" :options="options" size="sm" />
          <SegmentedControl v-model="segmented" :options="options" size="lg" fullWidth />
        </div>
      </Card>
    </section>

    <section class="mb-12">
      <h2 class="text-3xl font-semibold font-heading text-neutral-900 dark:text-neutral-100 mb-6">
        Checkbox Group
      </h2>
      <Card padding="lg">
        <CheckboxGroup 
          v-model="checkboxGroup" 
          label="Choose plans" 
          :options="groupOptions" 
          columns="3"
        />
      </Card>
    </section>

    <section class="mb-12">
      <h2 class="text-3xl font-semibold font-heading text-neutral-900 dark:text-neutral-100 mb-6">
        Radio Group (Card Variant)
      </h2>
      <Card padding="lg">
        <RadioGroup 
          v-model="radioGroup" 
          label="Subscription Tier" 
          :options="cardOptions" 
          variant="card"
          columns="3"
        />
      </Card>
    </section>

    <section class="mb-12">
      <h2 class="text-3xl font-semibold font-heading text-neutral-900 dark:text-neutral-100 mb-6">
        Date & Time Pickers
      </h2>
      <Card padding="lg">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
          <DatePicker v-model="dateValue" label="Event Date" />
          <TimePicker v-model="timeValue" label="Start Time" />
        </div>
      </Card>
    </section>

    <section class="mb-12">
      <h2 class="text-3xl font-semibold font-heading text-neutral-900 dark:text-neutral-100 mb-6">
        Combobox & File Upload
      </h2>
      <Card padding="lg">
        <div class="space-y-8 max-w-md">
          <Combobox 
            v-model="comboboxValue" 
            label="Search Fruits" 
            :options="comboOptions" 
            placeholder="Type to search..."
          />
          <FileUpload label="Upload Documents" helperText="PDF, DOCX up to 10MB" />
        </div>
      </Card>
    </section>
  </div>
</template>

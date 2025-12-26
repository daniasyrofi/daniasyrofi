<script setup lang="ts">
import { computed } from 'vue';

export interface Step {
  title: string;
  description?: string;
  icon?: string;
  disabled?: boolean;
}

export interface StepperProps {
  steps: Step[];
  currentStep: number;
  class?: string;
}

const props = withDefaults(defineProps<StepperProps>(), {
  currentStep: 0,
});

const emit = defineEmits<{
  'update:currentStep': [value: number];
}>();

const handleStepClick = (index: number) => {
  if (props.steps[index].disabled) return;
  emit('update:currentStep', index);
};

const getStepStatus = (index: number) => {
  if (index < props.currentStep) return 'complete';
  if (index === props.currentStep) return 'active';
  return 'pending';
};
</script>

<template>
  <div :class="['w-full', class]">
    <div class="flex items-start">
      <template v-for="(step, index) in steps" :key="index">
        <div 
          class="flex flex-col items-center flex-1 relative"
          :class="[step.disabled ? 'cursor-not-allowed' : 'cursor-pointer']"
          @click="handleStepClick(index)"
        >
          <!-- Line connector -->
          <div 
            v-if="index < steps.length - 1"
            class="absolute top-5 left-1/2 w-full h-[2px] bg-neutral-200 dark:bg-neutral-800 -z-10"
          >
            <div 
              class="h-full bg-brand-primary transition-all duration-500"
              :style="{ width: getStepStatus(index) === 'complete' ? '100%' : '0%' }"
            ></div>
          </div>

          <!-- Step circle -->
          <div 
            class="w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 bg-white dark:bg-neutral-900"
            :class="[
              getStepStatus(index) === 'complete' ? 'border-brand-primary bg-brand-primary text-white' : 
              getStepStatus(index) === 'active' ? 'border-brand-primary text-brand-primary ring-4 ring-brand-primary/10' : 
              'border-neutral-200 dark:border-neutral-800 text-neutral-400'
            ]"
          >
            <i v-if="getStepStatus(index) === 'complete'" class="ri-check-line text-xl"></i>
            <i v-else-if="step.icon" :class="[step.icon, 'text-xl']"></i>
            <span v-else class="font-bold">{{ index + 1 }}</span>
          </div>

          <!-- Step labels -->
          <div class="mt-3 text-center px-2">
            <h4 
              class="text-sm font-bold transition-colors"
              :class="[getStepStatus(index) !== 'pending' ? 'text-neutral-900 dark:text-neutral-100' : 'text-neutral-400']"
            >
              {{ step.title }}
            </h4>
            <p v-if="step.description" class="text-xs text-neutral-500 mt-1 max-w-[120px] mx-auto">
              {{ step.description }}
            </p>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-5xl font-bold font-heading text-neutral-900 dark:text-neutral-100 mb-4">
      Typography
    </h1>
    <p class="text-lg text-neutral-600 dark:text-neutral-400 mb-12">
      Our typography system uses Inclusive Sans for headings and Outfit for body text.
    </p>

    <section class="mb-12">
      <h2 class="text-3xl font-semibold font-heading text-neutral-900 dark:text-neutral-100 mb-6">
        Font Families
      </h2>
      <div class="space-y-4">
        <div class="p-6 bg-white dark:bg-neutral-950 rounded-lg border border-neutral-200 dark:border-neutral-800">
          <p class="text-sm text-neutral-600 dark:text-neutral-400 mb-2">Heading</p>
          <p class="text-3xl font-heading text-neutral-900 dark:text-neutral-100">
            Inclusive Sans
          </p>
          <p class="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
            Used for all headings (h1-h6)
          </p>
        </div>
        <div class="p-6 bg-white dark:bg-neutral-950 rounded-lg border border-neutral-200 dark:border-neutral-800">
          <p class="text-sm text-neutral-600 dark:text-neutral-400 mb-2">Body</p>
          <p class="text-3xl font-body text-neutral-900 dark:text-neutral-100">
            Outfit
          </p>
          <p class="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
            Used for body text, labels, and UI elements
          </p>
        </div>
      </div>
    </section>

    <section class="mb-12">
      <h2 class="text-3xl font-semibold font-heading text-neutral-900 dark:text-neutral-100 mb-6">
        Font Sizes
      </h2>
      <div class="space-y-4">
        <div class="p-4 bg-white dark:bg-neutral-950 rounded-lg border border-neutral-200 dark:border-neutral-800">
          <div class="flex items-baseline justify-between">
            <p class="text-6xl font-heading text-neutral-900 dark:text-neutral-100">Heading 1</p>
            <span class="text-sm text-neutral-600 dark:text-neutral-400">56px / 3.5rem</span>
          </div>
        </div>
        <div class="p-4 bg-white dark:bg-neutral-950 rounded-lg border border-neutral-200 dark:border-neutral-800">
          <div class="flex items-baseline justify-between">
            <p class="text-5xl font-heading text-neutral-900 dark:text-neutral-100">Heading 2</p>
            <span class="text-sm text-neutral-600 dark:text-neutral-400">48px / 3rem</span>
          </div>
        </div>
        <div class="p-4 bg-white dark:bg-neutral-950 rounded-lg border border-neutral-200 dark:border-neutral-800">
          <div class="flex items-baseline justify-between">
            <p class="text-4xl font-heading text-neutral-900 dark:text-neutral-100">Heading 3</p>
            <span class="text-sm text-neutral-600 dark:text-neutral-400">36px / 2.25rem</span>
          </div>
        </div>
        <div class="p-4 bg-white dark:bg-neutral-950 rounded-lg border border-neutral-200 dark:border-neutral-800">
          <div class="flex items-baseline justify-between">
            <p class="text-3xl font-heading text-neutral-900 dark:text-neutral-100">Heading 4</p>
            <span class="text-sm text-neutral-600 dark:text-neutral-400">30px / 1.875rem</span>
          </div>
        </div>
        <div class="p-4 bg-white dark:bg-neutral-950 rounded-lg border border-neutral-200 dark:border-neutral-800">
          <div class="flex items-baseline justify-between">
            <p class="text-2xl font-heading text-neutral-900 dark:text-neutral-100">Heading 5</p>
            <span class="text-sm text-neutral-600 dark:text-neutral-400">24px / 1.5rem</span>
          </div>
        </div>
        <div class="p-4 bg-white dark:bg-neutral-950 rounded-lg border border-neutral-200 dark:border-neutral-800">
          <div class="flex items-baseline justify-between">
            <p class="text-xl font-heading text-neutral-900 dark:text-neutral-100">Heading 6</p>
            <span class="text-sm text-neutral-600 dark:text-neutral-400">20px / 1.25rem</span>
          </div>
        </div>
        <div class="p-4 bg-white dark:bg-neutral-950 rounded-lg border border-neutral-200 dark:border-neutral-800">
          <div class="flex items-baseline justify-between">
            <p class="text-base font-body text-neutral-900 dark:text-neutral-100">Body Text</p>
            <span class="text-sm text-neutral-600 dark:text-neutral-400">16px / 1rem</span>
          </div>
        </div>
        <div class="p-4 bg-white dark:bg-neutral-950 rounded-lg border border-neutral-200 dark:border-neutral-800">
          <div class="flex items-baseline justify-between">
            <p class="text-sm font-body text-neutral-900 dark:text-neutral-100">Small Text</p>
            <span class="text-sm text-neutral-600 dark:text-neutral-400">14px / 0.875rem</span>
          </div>
        </div>
        <div class="p-4 bg-white dark:bg-neutral-950 rounded-lg border border-neutral-200 dark:border-neutral-800">
          <div class="flex items-baseline justify-between">
            <p class="text-xs font-body text-neutral-900 dark:text-neutral-100">Extra Small Text</p>
            <span class="text-sm text-neutral-600 dark:text-neutral-400">12px / 0.75rem</span>
          </div>
        </div>
      </div>
    </section>

    <section class="mb-12">
      <h2 class="text-3xl font-semibold font-heading text-neutral-900 dark:text-neutral-100 mb-6">
        Font Weights
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="p-4 bg-white dark:bg-neutral-950 rounded-lg border border-neutral-200 dark:border-neutral-800">
          <p class="text-2xl font-light text-neutral-900 dark:text-neutral-100 mb-2">Light</p>
          <p class="text-sm text-neutral-600 dark:text-neutral-400">300</p>
        </div>
        <div class="p-4 bg-white dark:bg-neutral-950 rounded-lg border border-neutral-200 dark:border-neutral-800">
          <p class="text-2xl font-normal text-neutral-900 dark:text-neutral-100 mb-2">Normal</p>
          <p class="text-sm text-neutral-600 dark:text-neutral-400">400</p>
        </div>
        <div class="p-4 bg-white dark:bg-neutral-950 rounded-lg border border-neutral-200 dark:border-neutral-800">
          <p class="text-2xl font-medium text-neutral-900 dark:text-neutral-100 mb-2">Medium</p>
          <p class="text-sm text-neutral-600 dark:text-neutral-400">500</p>
        </div>
        <div class="p-4 bg-white dark:bg-neutral-950 rounded-lg border border-neutral-200 dark:border-neutral-800">
          <p class="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Semibold</p>
          <p class="text-sm text-neutral-600 dark:text-neutral-400">600</p>
        </div>
        <div class="p-4 bg-white dark:bg-neutral-950 rounded-lg border border-neutral-200 dark:border-neutral-800">
          <p class="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">Bold</p>
          <p class="text-sm text-neutral-600 dark:text-neutral-400">700</p>
        </div>
        <div class="p-4 bg-white dark:bg-neutral-950 rounded-lg border border-neutral-200 dark:border-neutral-800">
          <p class="text-2xl font-extrabold text-neutral-900 dark:text-neutral-100 mb-2">Extrabold</p>
          <p class="text-sm text-neutral-600 dark:text-neutral-400">800</p>
        </div>
      </div>
    </section>
  </div>
</template>

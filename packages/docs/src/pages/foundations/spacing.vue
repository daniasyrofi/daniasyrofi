<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-5xl font-bold font-heading text-neutral-900 dark:text-neutral-100 mb-4">
      Spacing
    </h1>
    <p class="text-lg text-neutral-600 dark:text-neutral-400 mb-12">
      Our spacing system uses a 4px base unit with a 12-step scale for consistent layouts.
    </p>

    <section class="mb-12">
      <h2 class="text-3xl font-semibold font-heading text-neutral-900 dark:text-neutral-100 mb-6">
        Spacing Scale
      </h2>
      <div class="space-y-4">
        <div class="flex items-center gap-4">
          <div class="w-20 text-sm font-medium text-neutral-900 dark:text-neutral-100">0</div>
          <div class="h-8 bg-brand-primary" style="width: 0px;"></div>
          <div class="text-sm text-neutral-600 dark:text-neutral-400">0px</div>
        </div>
        <div class="flex items-center gap-4">
          <div class="w-20 text-sm font-medium text-neutral-900 dark:text-neutral-100">1</div>
          <div class="h-8 bg-brand-primary" style="width: 4px;"></div>
          <div class="text-sm text-neutral-600 dark:text-neutral-400">4px</div>
        </div>
        <div class="flex items-center gap-4">
          <div class="w-20 text-sm font-medium text-neutral-900 dark:text-neutral-100">2</div>
          <div class="h-8 bg-brand-primary" style="width: 8px;"></div>
          <div class="text-sm text-neutral-600 dark:text-neutral-400">8px</div>
        </div>
        <div class="flex items-center gap-4">
          <div class="w-20 text-sm font-medium text-neutral-900 dark:text-neutral-100">3</div>
          <div class="h-8 bg-brand-primary" style="width: 12px;"></div>
          <div class="text-sm text-neutral-600 dark:text-neutral-400">12px</div>
        </div>
        <div class="flex items-center gap-4">
          <div class="w-20 text-sm font-medium text-neutral-900 dark:text-neutral-100">4</div>
          <div class="h-8 bg-brand-primary" style="width: 16px;"></div>
          <div class="text-sm text-neutral-600 dark:text-neutral-400">16px</div>
        </div>
        <div class="flex items-center gap-4">
          <div class="w-20 text-sm font-medium text-neutral-900 dark:text-neutral-100">5</div>
          <div class="h-8 bg-brand-primary" style="width: 20px;"></div>
          <div class="text-sm text-neutral-600 dark:text-neutral-400">20px</div>
        </div>
        <div class="flex items-center gap-4">
          <div class="w-20 text-sm font-medium text-neutral-900 dark:text-neutral-100">6</div>
          <div class="h-8 bg-brand-primary" style="width: 24px;"></div>
          <div class="text-sm text-neutral-600 dark:text-neutral-400">24px</div>
        </div>
        <div class="flex items-center gap-4">
          <div class="w-20 text-sm font-medium text-neutral-900 dark:text-neutral-100">7</div>
          <div class="h-8 bg-brand-primary" style="width: 28px;"></div>
          <div class="text-sm text-neutral-600 dark:text-neutral-400">28px</div>
        </div>
        <div class="flex items-center gap-4">
          <div class="w-20 text-sm font-medium text-neutral-900 dark:text-neutral-100">8</div>
          <div class="h-8 bg-brand-primary" style="width: 32px;"></div>
          <div class="text-sm text-neutral-600 dark:text-neutral-400">32px</div>
        </div>
        <div class="flex items-center gap-4">
          <div class="w-20 text-sm font-medium text-neutral-900 dark:text-neutral-100">9</div>
          <div class="h-8 bg-brand-primary" style="width: 36px;"></div>
          <div class="text-sm text-neutral-600 dark:text-neutral-400">36px</div>
        </div>
        <div class="flex items-center gap-4">
          <div class="w-20 text-sm font-medium text-neutral-900 dark:text-neutral-100">10</div>
          <div class="h-8 bg-brand-primary" style="width: 40px;"></div>
          <div class="text-sm text-neutral-600 dark:text-neutral-400">40px</div>
        </div>
        <div class="flex items-center gap-4">
          <div class="w-20 text-sm font-medium text-neutral-900 dark:text-neutral-100">12</div>
          <div class="h-8 bg-brand-primary" style="width: 48px;"></div>
          <div class="text-sm text-neutral-600 dark:text-neutral-400">48px</div>
        </div>
        <div class="flex items-center gap-4">
          <div class="w-20 text-sm font-medium text-neutral-900 dark:text-neutral-100">14</div>
          <div class="h-8 bg-brand-primary" style="width: 56px;"></div>
          <div class="text-sm text-neutral-600 dark:text-neutral-400">56px</div>
        </div>
        <div class="flex items-center gap-4">
          <div class="w-20 text-sm font-medium text-neutral-900 dark:text-neutral-100">16</div>
          <div class="h-8 bg-brand-primary" style="width: 64px;"></div>
          <div class="text-sm text-neutral-600 dark:text-neutral-400">64px</div>
        </div>
      </div>
    </section>

    <section class="mb-12">
      <h2 class="text-3xl font-semibold font-heading text-neutral-900 dark:text-neutral-100 mb-6">
        Usage Examples
      </h2>
      <div class="space-y-6">
        <div class="p-6 bg-white dark:bg-neutral-950 rounded-lg border border-neutral-200 dark:border-neutral-800">
          <h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-4">Padding</h3>
          <div class="space-y-3">
            <div class="inline-block p-2 bg-brand-primary-light dark:bg-brand-primary-dark rounded">
              <div class="bg-brand-primary text-white px-3 py-1.5 rounded text-sm">p-2 (8px)</div>
            </div>
            <div class="inline-block p-4 bg-brand-primary-light dark:bg-brand-primary-dark rounded">
              <div class="bg-brand-primary text-white px-3 py-1.5 rounded text-sm">p-4 (16px)</div>
            </div>
            <div class="inline-block p-6 bg-brand-primary-light dark:bg-brand-primary-dark rounded">
              <div class="bg-brand-primary text-white px-3 py-1.5 rounded text-sm">p-6 (24px)</div>
            </div>
            <div class="inline-block p-8 bg-brand-primary-light dark:bg-brand-primary-dark rounded">
              <div class="bg-brand-primary text-white px-3 py-1.5 rounded text-sm">p-8 (32px)</div>
            </div>
          </div>
        </div>

        <div class="p-6 bg-white dark:bg-neutral-950 rounded-lg border border-neutral-200 dark:border-neutral-800">
          <h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-4">Gap</h3>
          <div class="flex gap-2 mb-3">
            <div class="bg-brand-primary text-white px-3 py-1.5 rounded text-sm">gap-2</div>
            <div class="bg-brand-primary text-white px-3 py-1.5 rounded text-sm">8px</div>
          </div>
          <div class="flex gap-4 mb-3">
            <div class="bg-brand-primary text-white px-3 py-1.5 rounded text-sm">gap-4</div>
            <div class="bg-brand-primary text-white px-3 py-1.5 rounded text-sm">16px</div>
          </div>
          <div class="flex gap-6">
            <div class="bg-brand-primary text-white px-3 py-1.5 rounded text-sm">gap-6</div>
            <div class="bg-brand-primary text-white px-3 py-1.5 rounded text-sm">24px</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

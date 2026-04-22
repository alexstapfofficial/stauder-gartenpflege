<script setup lang="ts">
// Text content via named slots (#eyebrow, #headline, #lead)
// ProcessSectionItem components go into #steps
</script>

<template>
  <section id="ablauf" class="relative py-20 lg:py-28 bg-accent">
    <!-- Botanical decoration -->
    <div class="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <svg class="absolute top-0 right-0 w-48 h-48 opacity-10" viewBox="0 0 200 200" fill="none">
        <path d="M160 20 C160 20, 120 60, 100 100 C80 140, 90 180, 120 190" stroke="var(--color-accent-ink)" stroke-width="3" stroke-linecap="round" />
        <path d="M100 100 C100 100, 70 80, 50 90" stroke="var(--color-accent-ink)" stroke-width="2" stroke-linecap="round" />
        <path d="M120 130 C120 130, 150 120, 160 100" stroke="var(--color-accent-ink)" stroke-width="2" stroke-linecap="round" />
      </svg>
    </div>

    <div class="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <!-- Section header -->
      <div class="text-center mb-14 lg:mb-20">
        <div class="mb-4">
          <span class="eyebrow eyebrow-sun"><slot name="eyebrow" /></span>
        </div>
        <h2 class="display text-4xl lg:text-5xl mb-4 text-accent-ink">
          <slot name="headline" />
        </h2>
        <p class="text-lg max-w-md mx-auto text-accent-ink/70">
          <slot name="lead" />
        </p>
      </div>

      <!-- ProcessSectionItem components via #steps slot -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <slot name="steps" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Text content via named slots (#eyebrow, #headline, #lead)
// GallerySectionItem components go into #items (each manages its own slider state)
</script>

<template>
  <section id="galerie" class="py-20 lg:py-28 bg-bg">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <!-- Section header -->
      <div class="mb-12 lg:mb-16">
        <div class="mb-4">
          <span class="eyebrow"><slot name="eyebrow" /></span>
        </div>
        <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <h2 class="display text-4xl lg:text-5xl text-ink">
            <slot name="headline" />
          </h2>
          <p class="text-base max-w-sm text-muted">
            <slot name="lead" />
          </p>
        </div>
      </div>

      <!-- GallerySectionItem components via #items slot -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <slot name="items" />
      </div>
    </div>
  </section>
</template>

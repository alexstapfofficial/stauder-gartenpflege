<script setup lang="ts">
// Text content via named slots (#eyebrow, #headline, #lead)
// ServicesSectionItem components go into #items
</script>

<template>
  <section id="leistungen" class="py-20 lg:py-28 bg-bg">
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

      <!-- ServicesSectionItem components via #items slot -->
      <div class="rounded-2xl overflow-hidden border border-line bg-bg-soft">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <slot name="items" />
        </div>
      </div>
    </div>
  </section>
</template>

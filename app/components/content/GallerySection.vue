<script setup lang="ts">
// Text content via named slots (#eyebrow, #headline, #lead)
// GallerySectionItem components go into #items (each manages its own slider state)
</script>

<template>
  <section id="galerie" class="relative py-20 lg:py-28">

    <!-- Botanical: leaf top-right -->
    <div class="pointer-events-none absolute -top-8 right-1/5 w-25 h-32 text-accent opacity-15 rotate-24" aria-hidden="true">
      <svg viewBox="0 0 60 90" fill="none" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <g stroke="currentColor" stroke-width="1.4" stroke-linecap="round">
          <path d="M30 88 C 8 70, 4 40, 30 4 C 56 40, 52 70, 30 88 Z" fill="currentColor" fill-opacity=".3" />
          <path d="M30 86 V 10 M30 30 L 44 22 M30 30 L 16 22 M30 50 L 48 42 M30 50 L 12 42 M30 68 L 44 62 M30 68 L 16 62" />
        </g>
      </svg>
    </div>

    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

      <!-- Section header: eyebrow left, headline + lead right -->
      <div class="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-15 items-end mb-16 lg:mb-18">
        <div>
          <span class="eyebrow"><slot name="eyebrow" /></span>
        </div>
        <div>
          <h2 class="display text-4xl lg:text-5xl text-ink mb-4">
            <slot name="headline" />
          </h2>
          <div class="text-[17px] leading-relaxed text-ink-soft lg:ml-auto lg:max-w-130">
            <slot name="lead" />
          </div>
        </div>
      </div>

      <!-- Gallery grid: 12-col, alternating 7+5 / 5+7 -->
      <div class="gallery-grid grid grid-cols-12 gap-5">
        <slot name="items" />
      </div>

    </div>
  </section>
</template>

<style scoped>
/* Mobile: full width */
.gallery-grid :deep(> *) {
  grid-column: span 12;
}

/* Desktop: alternating 7+5 / 5+7 */
@media (min-width: 1024px) {
  .gallery-grid :deep(> *:nth-child(4n+1)) { grid-column: span 7; }
  .gallery-grid :deep(> *:nth-child(4n+2)) { grid-column: span 5; }
  .gallery-grid :deep(> *:nth-child(4n+3)) { grid-column: span 5; }
  .gallery-grid :deep(> *:nth-child(4n+4)) { grid-column: span 7; }
}
</style>

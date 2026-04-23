<script setup lang="ts">
// Text content via named slots (#eyebrow, #headline, #lead)
// ServicesSectionItem components go into #items
</script>

<template>
  <section id="leistungen" class="relative py-24 lg:py-32">
    <!-- Botanical: branch top-left -->
    <div
      class="botanical"
      style="top: -40px; left: 40px; width: 120px; height: 150px; transform: rotate(-20deg); opacity: 0.14;"
      aria-hidden="true"
    >
      <svg viewBox="0 0 100 200" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round">
        <path d="M50 200 C 50 140, 48 90, 52 20" />
        <path d="M52 40 C 72 30, 82 38, 86 52 C 72 56, 60 50, 52 40 Z" fill="currentColor" fill-opacity=".35" />
        <path d="M50 70 C 30 62, 18 70, 14 84 C 30 88, 42 82, 50 70 Z" fill="currentColor" fill-opacity=".35" />
        <path d="M51 100 C 70 94, 82 102, 84 116 C 70 118, 60 112, 51 100 Z" fill="currentColor" fill-opacity=".35" />
        <path d="M50 130 C 32 122, 20 130, 18 144 C 32 148, 44 142, 50 130 Z" fill="currentColor" fill-opacity=".35" />
        <path d="M50 160 C 68 156, 78 164, 80 176 C 68 178, 58 172, 50 160 Z" fill="currentColor" fill-opacity=".35" />
      </svg>
    </div>

    <!-- Botanical: fern bottom-right -->
    <div
      class="botanical sway"
      style="bottom: -50px; right: 60px; width: 160px; height: 200px; --rot: 15deg;"
      aria-hidden="true"
    >
      <svg viewBox="0 0 100 200" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round">
        <path d="M50 200 C 48 160, 44 110, 50 40 C 52 28, 56 18, 62 10" />
        <g fill="currentColor" fill-opacity=".3">
          <ellipse cx="35" cy="55" rx="16" ry="5" transform="rotate(-30 35 55)" />
          <ellipse cx="68" cy="62" rx="14" ry="5" transform="rotate(30 68 62)" />
          <ellipse cx="33" cy="85" rx="18" ry="5" transform="rotate(-25 33 85)" />
          <ellipse cx="70" cy="94" rx="16" ry="5" transform="rotate(28 70 94)" />
          <ellipse cx="34" cy="118" rx="20" ry="5.5" transform="rotate(-22 34 118)" />
          <ellipse cx="70" cy="128" rx="18" ry="5.5" transform="rotate(25 70 128)" />
          <ellipse cx="36" cy="152" rx="22" ry="6" transform="rotate(-20 36 152)" />
          <ellipse cx="68" cy="162" rx="20" ry="6" transform="rotate(22 68 162)" />
        </g>
      </svg>
    </div>

    <div class="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <!-- Section header: eyebrow left, heading + lead right -->
      <div class="grid lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16 items-end mb-16 lg:mb-20">
        <div>
          <span class="eyebrow"><slot name="eyebrow" /></span>
        </div>
        <div>
          <h2 class="display text-4xl lg:text-5xl xl:text-6xl text-ink mt-4">
            <slot name="headline" />
          </h2>
          <p class="mt-4 text-base lg:text-[17px] leading-relaxed text-ink-soft max-w-lg">
            <slot name="lead" />
          </p>
        </div>
      </div>

      <!-- Services card: cream bg, large radius, padded like the design -->
      <div class="bg-cream rounded-[40px] py-16 lg:py-20 px-8 sm:px-12 lg:px-16">
        <div class="services-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <slot name="items" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.botanical {
  position: absolute;
  pointer-events: none;
  color: var(--color-accent);
  opacity: 0.22;
}
.botanical svg {
  width: 100%;
  height: 100%;
  display: block;
}
.botanical.sway {
  animation: sway 7s ease-in-out infinite;
  transform-origin: bottom center;
}
@keyframes sway {
  0%, 100% { transform: rotate(var(--rot, 0deg)); }
  50% { transform: rotate(calc(var(--rot, 0deg) + 3deg)); }
}

/* ── Border removal: mobile (1 col) ── */
.services-grid :deep(> div) {
  border-right: none;
}
.services-grid :deep(> div:last-child) {
  border-bottom: none;
}

/* ── Border removal: tablet (2 col) ── */
@media (min-width: 640px) {
  .services-grid :deep(> div) {
    border-right: 1px solid var(--color-line);
  }
  .services-grid :deep(> div:nth-child(2n)) {
    border-right: none;
  }
  .services-grid :deep(> div:last-child) {
    border-bottom: 1px solid var(--color-line);
  }
  .services-grid :deep(> div:nth-last-child(-n+2)) {
    border-bottom: none;
  }
}

/* ── Border removal: desktop (3 col) ── */
@media (min-width: 1024px) {
  .services-grid :deep(> div:nth-child(2n)) {
    border-right: 1px solid var(--color-line);
  }
  .services-grid :deep(> div:nth-child(3n)) {
    border-right: none;
  }
  .services-grid :deep(> div:nth-last-child(-n+2)) {
    border-bottom: 1px solid var(--color-line);
  }
  .services-grid :deep(> div:nth-last-child(-n+3)) {
    border-bottom: none;
  }
}
</style>

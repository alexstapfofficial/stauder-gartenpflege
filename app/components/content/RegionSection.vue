<script setup lang="ts">
// Text content via named slots (#eyebrow, #headline, #lead, #info)
// RegionSectionItem components go into #cities
</script>

<template>
  <section id="einzugsgebiet" class="relative py-20 lg:py-28">

    <!-- Botanical: fern top-right -->
    <div class="pointer-events-none absolute top-15 -right-7.5 w-40 h-50 text-accent opacity-15 rotate-12" aria-hidden="true">
      <svg viewBox="0 0 100 200" fill="none" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <g stroke="currentColor" stroke-width="1.2" stroke-linecap="round">
          <path d="M50 200 C 48 160, 44 110, 50 40 C 52 28, 56 18, 62 10" />
          <ellipse cx="35" cy="55" rx="16" ry="5" fill="currentColor" fill-opacity=".3" transform="rotate(-30 35 55)" stroke="none" />
          <ellipse cx="68" cy="62" rx="14" ry="5" fill="currentColor" fill-opacity=".3" transform="rotate(30 68 62)" stroke="none" />
          <ellipse cx="33" cy="85" rx="18" ry="5" fill="currentColor" fill-opacity=".3" transform="rotate(-25 33 85)" stroke="none" />
          <ellipse cx="70" cy="94" rx="16" ry="5" fill="currentColor" fill-opacity=".3" transform="rotate(28 70 94)" stroke="none" />
          <ellipse cx="34" cy="118" rx="20" ry="5.5" fill="currentColor" fill-opacity=".3" transform="rotate(-22 34 118)" stroke="none" />
          <ellipse cx="70" cy="128" rx="18" ry="5.5" fill="currentColor" fill-opacity=".3" transform="rotate(25 70 128)" stroke="none" />
          <ellipse cx="36" cy="152" rx="22" ry="6" fill="currentColor" fill-opacity=".3" transform="rotate(-20 36 152)" stroke="none" />
          <ellipse cx="68" cy="162" rx="20" ry="6" fill="currentColor" fill-opacity=".3" transform="rotate(22 68 162)" stroke="none" />
          <ellipse cx="40" cy="186" rx="22" ry="6" fill="currentColor" fill-opacity=".3" transform="rotate(-18 40 186)" stroke="none" />
        </g>
      </svg>
    </div>

    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col gap-8 lg:grid lg:grid-cols-[1.1fr_1fr] lg:gap-x-15 lg:gap-y-0 lg:items-center">

        <!-- Heading (mobile: first, desktop: top-right) -->
        <div class="order-1 lg:col-start-2 lg:row-start-1">
          <span class="eyebrow"><slot name="eyebrow" /></span>
          <h2 class="display text-4xl lg:text-5xl text-ink mt-4">
            <slot name="headline" />
          </h2>
        </div>

        <!-- Map card (mobile: second, desktop: left col spanning both rows) -->
        <div class="order-2 lg:col-start-1 lg:row-start-1 lg:row-span-2 relative aspect-5/4 rounded-[32px] bg-cream shadow-md overflow-hidden">
          <NuxtImg
            src="/img/map.jpg"
            alt="Einzugsgebiet Spessart – Karte"
            format="webp"
            quality="80"
            width="800"
            height="640"
            sizes="100vw lg:600px"
            class="w-full h-full object-cover object-center rounded-2xl"
            loading="lazy"
          />
        </div>

        <!-- Body text (mobile: third, desktop: bottom-right) -->
        <div class="order-3 lg:col-start-2 lg:row-start-2 lg:pt-5">
          <p class="text-[17px] leading-relaxed text-ink-soft max-w-110">
            <slot name="lead" />
          </p>
          <div class="flex flex-wrap gap-2 mt-7">
            <slot name="cities" />
          </div>
          <p class="text-[13.5px] text-muted mt-6">
            <slot name="info" />
          </p>
        </div>

      </div>
    </div>
  </section>
</template>

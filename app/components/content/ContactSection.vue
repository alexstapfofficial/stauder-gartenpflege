<script setup lang="ts">
const props = withDefaults(defineProps<{
  phone?: string
  email?: string
  hours?: string
}>(), {
  phone: '0151 · 2345 6789',
  email: 'hallo@stauder-gartenpflege.de',
  hours: 'Mo–Sa, 7–18 Uhr'
})

</script>

<template>
  <footer id="kontakt" class="relative overflow-hidden bg-accent text-accent-ink mt-20 rounded-t-[40px] pt-20 pb-10">

    <!-- Botanical: fern top-right -->
    <div class="pointer-events-none absolute top-10 right-[8%] w-30 h-37.5 text-cream opacity-[0.08] rotate-18" aria-hidden="true">
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

    <!-- Botanical: vine bottom-left -->
    <div class="pointer-events-none absolute bottom-20 left-[3%] w-45 h-25 text-cream opacity-[0.08] -rotate-6" aria-hidden="true">
      <svg viewBox="0 0 160 100" fill="none" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <g stroke="currentColor" stroke-width="1.3" stroke-linecap="round">
          <path d="M4 50 C 30 20, 60 80, 90 40 C 110 10, 140 60, 156 30" />
          <ellipse cx="20" cy="38" rx="8" ry="3.5" fill="currentColor" fill-opacity=".3" transform="rotate(-30 20 38)" stroke="none" />
          <ellipse cx="50" cy="62" rx="9" ry="3.5" fill="currentColor" fill-opacity=".3" transform="rotate(25 50 62)" stroke="none" />
          <ellipse cx="80" cy="40" rx="8" ry="3.5" fill="currentColor" fill-opacity=".3" transform="rotate(-15 80 40)" stroke="none" />
          <ellipse cx="110" cy="34" rx="8" ry="3.5" fill="currentColor" fill-opacity=".3" transform="rotate(-30 110 34)" stroke="none" />
          <ellipse cx="140" cy="52" rx="9" ry="3.5" fill="currentColor" fill-opacity=".3" transform="rotate(25 140 52)" stroke="none" />
        </g>
      </svg>
    </div>

    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 items-start">

        <!-- Contact column -->
        <div>
          <h4 class="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-ink/60 mb-4">
            <slot name="eyebrow" />
          </h4>
          <div class="display text-[44px] mb-6" style="line-height: 1.05;">
            <slot name="heading" />
          </div>
          <div class="flex flex-col gap-2.5 text-[15px]">
            <a :href="`tel:${props.phone.replace(/[\s·]/g, '')}`" class="flex items-center gap-2.5 text-accent-ink/80 hover:text-accent-ink transition-colors">
              <UIcon name="i-lucide-phone" class="w-4 h-4 shrink-0" />
              {{ props.phone }}
            </a>
            <a :href="`mailto:${props.email}`" class="flex items-center gap-2.5 text-accent-ink/80 hover:text-accent-ink transition-colors">
              <UIcon name="i-lucide-mail" class="w-4 h-4 shrink-0" />
              {{ props.email }}
            </a>
            <span class="flex items-center gap-2.5 text-accent-ink/60">
              <UIcon name="i-lucide-map-pin" class="w-4 h-4 shrink-0" />
              Mönchberg · Spessart
            </span>
          </div>
        </div>

        <!-- Öffnungszeiten -->
        <div>
          <h4 class="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-ink/60 mb-4">Öffnungszeiten</h4>
          <ul class="flex flex-col gap-2.5 text-[14.5px]">
            <li class="text-accent-ink/80">Mo – Fr · 08 – 18 Uhr</li>
            <li class="text-accent-ink/50">Sa · nach Absprache</li>
            <li class="flex items-center gap-2 text-accent-ink/50">So · Familie <UIcon name="i-lucide-heart" class="w-3.5 h-3.5" /></li>
          </ul>
        </div>

      </div>

      <!-- Bottom bar -->
      <div class="mt-18 pt-6 border-t border-accent-ink/20 flex flex-col sm:flex-row justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.14em] text-accent-ink/55">
        <span>© {{ new Date().getFullYear() }} Stauder Gartenpflege</span>
        <span>Impressum · Datenschutz</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Sun-colored italic for the heading slot (e.g. *quatschen*) */
p :deep(em) {
  color: var(--color-sun);
  font-style: italic;
}
</style>

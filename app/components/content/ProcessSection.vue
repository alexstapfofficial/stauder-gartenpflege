<script setup lang="ts">
// Text content via named slots (#eyebrow, #headline, #lead)
// ProcessSectionItem components go into #steps
</script>

<template>
  <section id="ablauf" class="py-20 lg:py-28">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div class="relative bg-accent overflow-hidden rounded-[40px] px-10 py-16 lg:px-15 lg:py-25">

        <!-- Botanical: vine top-right -->
        <div class="pointer-events-none absolute top-5 right-10 w-36 h-44 text-accent-ink opacity-20 rotate-12" aria-hidden="true">
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

        <!-- Botanical: twig bottom-left -->
        <div class="pointer-events-none absolute bottom-10 left-10 w-30 h-36 text-accent-ink opacity-20 -rotate-10" aria-hidden="true">
          <svg viewBox="0 0 140 60" fill="none" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <g stroke="currentColor" stroke-width="1.3" stroke-linecap="round">
              <path d="M4 30 C 40 30, 80 30, 136 30" />
              <ellipse cx="24" cy="20" rx="10" ry="4" fill="currentColor" fill-opacity=".3" transform="rotate(-20 24 20)" stroke="none" />
              <ellipse cx="42" cy="40" rx="10" ry="4" fill="currentColor" fill-opacity=".3" transform="rotate(20 42 40)" stroke="none" />
              <ellipse cx="60" cy="18" rx="11" ry="4" fill="currentColor" fill-opacity=".3" transform="rotate(-22 60 18)" stroke="none" />
              <ellipse cx="80" cy="42" rx="11" ry="4" fill="currentColor" fill-opacity=".3" transform="rotate(22 80 42)" stroke="none" />
              <ellipse cx="100" cy="20" rx="10" ry="4" fill="currentColor" fill-opacity=".3" transform="rotate(-20 100 20)" stroke="none" />
              <ellipse cx="120" cy="40" rx="9" ry="4" fill="currentColor" fill-opacity=".3" transform="rotate(20 120 40)" stroke="none" />
            </g>
          </svg>
        </div>

        <!-- Section header: eyebrow left, headline + lead right -->
        <div class="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-15 items-end mb-16 lg:mb-18">
          <div>
            <span class="eyebrow eyebrow-sun"><slot name="eyebrow" /></span>
          </div>
          <div>
            <h2 class="display text-4xl lg:text-5xl mb-4 text-accent-ink">
              <slot name="headline" />
            </h2>
            <div class="text-[17px] leading-relaxed text-accent-ink/80">
              <slot name="lead" />
            </div>
          </div>
        </div>

        <!-- Steps with dashed connector line -->
        <div class="relative">
          <div
            class="absolute h-px top-7 left-[2%] right-[2%] opacity-35 hidden lg:block"
            style="background: repeating-linear-gradient(90deg, var(--color-accent-ink) 0 6px, transparent 6px 14px)"
            aria-hidden="true"
          />
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <slot name="steps" />
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

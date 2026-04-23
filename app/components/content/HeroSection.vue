<script setup lang="ts">
// Content via named slots. HeroSectionItem sub-components → #stats slot
</script>

<template>
  <section class="relative pt-20 pb-24 lg:pt-28 lg:pb-32 bg-bg overflow-x-hidden">
    <!-- Blobs clipped to section -->
    <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div class="blob blob-1" />
    </div>

    <!-- Botanical: fern bottom-left -->
    <div
      class="botanical sway-slow"
      style="bottom: 60px; left: -30px; width: 200px; height: 240px; --rot: 8deg;"
      aria-hidden="true"
    >
      <svg viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="1.2" stroke-linecap="round">
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

    <!-- Botanical: branch top-right -->
    <div
      class="botanical sway"
      style="top: 120px; right: -10px; width: 100px; height: 130px; --rot: 18deg; opacity: 0.15;"
      aria-hidden="true"
    >
      <svg viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="1.4" stroke-linecap="round">
        <path d="M50 200 C 50 140, 48 90, 52 20" />
        <path d="M52 40 C 72 30, 82 38, 86 52 C 72 56, 60 50, 52 40 Z" fill="currentColor" fill-opacity=".35" />
        <path d="M50 70 C 30 62, 18 70, 14 84 C 30 88, 42 82, 50 70 Z" fill="currentColor" fill-opacity=".35" />
        <path d="M51 100 C 70 94, 82 102, 84 116 C 70 118, 60 112, 51 100 Z" fill="currentColor" fill-opacity=".35" />
        <path d="M50 130 C 32 122, 20 130, 18 144 C 32 148, 44 142, 50 130 Z" fill="currentColor" fill-opacity=".35" />
      </svg>
    </div>

    <!-- Botanical: vine top-center (very soft) -->
    <div
      class="botanical"
      style="top: -10px; right: 46%; width: 140px; height: 80px; transform: rotate(-12deg); opacity: 0.10;"
      aria-hidden="true"
    >
      <svg viewBox="0 0 160 100" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="1.3" stroke-linecap="round">
        <path d="M4 50 C 30 20, 60 80, 90 40 C 110 10, 140 60, 156 30" />
        <g fill="currentColor" fill-opacity=".3">
          <ellipse cx="20" cy="38" rx="8" ry="3.5" transform="rotate(-30 20 38)" />
          <ellipse cx="50" cy="62" rx="9" ry="3.5" transform="rotate(25 50 62)" />
          <ellipse cx="80" cy="40" rx="8" ry="3.5" transform="rotate(-15 80 40)" />
          <ellipse cx="110" cy="34" rx="8" ry="3.5" transform="rotate(-30 110 34)" />
          <ellipse cx="140" cy="52" rx="9" ry="3.5" transform="rotate(25 140 52)" />
        </g>
      </svg>
    </div>

    <div class="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col gap-8 lg:grid lg:grid-cols-[1.2fr_1fr] lg:gap-x-16 lg:gap-y-0 lg:items-start">

        <!-- Heading (mobile: first, desktop: col-1 row-1) -->
        <div class="order-1 lg:col-start-1 lg:row-start-1">
          <div class="mb-6">
            <span class="eyebrow"><slot name="eyebrow" /></span>
          </div>
          <h1 class="display text-5xl lg:text-6xl xl:text-7xl text-ink">
            <slot name="headline" />
          </h1>
        </div>

        <!-- Portrait (mobile: second, desktop: col-2 row-1+2) -->
        <div class="order-2 lg:col-start-2 lg:row-start-1 lg:row-span-2 relative flex justify-center lg:justify-end">
          <div class="relative">
            <!-- Pill/arch portrait shape -->
            <div
              class="w-72 lg:w-80 overflow-hidden bg-line"
              style="aspect-ratio: 3/4; border-radius: 220px 220px 24px 24px;"
            >
              <NuxtImg
                src="/img/hero.png"
                alt="Fabian Stauder – Gartenpflege Spessart"
                format="webp"
                quality="85"
                width="320"
                height="427"
                sizes="288px lg:320px"
                class="w-full h-full object-cover"
                loading="eager"
              />
            </div>

            <!-- Badge bottom-left -->
            <div class="absolute -bottom-5 left-6 flex items-center gap-2.5 rounded-full px-4 py-2.5 shadow-lg bg-cream border border-line">
              <span class="w-2 h-2 rounded-full bg-[#4caf50] animate-pulse shrink-0" />
              <span class="font-mono text-[11px] uppercase tracking-wider text-ink">
                <slot name="badge" />
              </span>
            </div>

            <!-- Float card top-right -->
            <div
              class="absolute -top-4 -right-6 rounded-2xl p-4 shadow-lg hidden lg:block bg-cream border border-line"
              style="transform: rotate(3deg); max-width: 180px;"
            >
              <span class="font-mono text-[10px] uppercase tracking-widest text-muted block mb-1.5">Ohne Chemie</span>
              <p class="font-display text-lg leading-tight text-ink">Sanft für<br>Natur & Garten</p>
            </div>
          </div>
        </div>

        <!-- Body text (mobile: third, desktop: col-1 row-2) -->
        <div class="order-3 lg:col-start-1 lg:row-start-2 lg:pt-0">
          <em class="display text-5xl lg:text-6xl xl:text-7xl text-ink block mb-6">
            <slot name="headline-italic" />
          </em>
          <div class="text-lg leading-relaxed mb-8 max-w-lg text-ink-soft">
            <slot name="lead" />
          </div>

          <div class="flex flex-wrap gap-3">
            <UButton
              to="#kontakt"
              size="lg"
              style="background-color: var(--color-accent); color: var(--color-accent-ink);"
              class="hover:opacity-90 transition-opacity font-medium px-6 rounded-full"
            >
              <slot name="cta-primary" />
            </UButton>
            <UButton
              to="#leistungen"
              size="lg"
              variant="ghost"
              style="color: var(--color-accent); border: 1.5px solid var(--color-accent);"
              class="hover:bg-accent/8 transition-colors font-medium px-6 rounded-full"
            >
              <slot name="cta-secondary" />
            </UButton>
          </div>

          <div class="flex flex-wrap gap-7 border-t border-line pt-7 mt-12">
            <slot name="stats" />
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
/* Animated organic background blobs */
.blob {
  position: absolute;
  width: 700px;
  height: 700px;
  border-radius: 60% 40% 55% 45% / 50% 60% 40% 50%;
  filter: blur(10px);
  pointer-events: none;
  animation: blob 22s ease-in-out infinite alternate;
}
.blob-1 {
  top: -200px;
  left: -200px;
  background: var(--color-accent-soft);
  opacity: 0.08;
}
.blob-2 {
  bottom: -300px;
  right: -300px;
  background: var(--color-sun);
  opacity: 0.10;
  animation-duration: 28s;
}
@keyframes blob {
  0%   { transform: rotate(0deg) scale(1); }
  50%  { transform: rotate(60deg) scale(1.1); border-radius: 50% 50% 40% 60% / 60% 40% 50% 50%; }
  100% { transform: rotate(120deg) scale(0.95); }
}

/* Botanical decorations */
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
.botanical.sway-slow {
  animation: sway 12s ease-in-out infinite;
  transform-origin: bottom center;
}
@keyframes sway {
  0%, 100% { transform: rotate(var(--rot, 0deg)); }
  50%       { transform: rotate(calc(var(--rot, 0deg) + 3deg)); }
}
</style>

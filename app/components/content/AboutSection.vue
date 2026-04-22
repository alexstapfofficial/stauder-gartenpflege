<script setup lang="ts">
// Named slots:
//   #eyebrow, #headline, #quote, #signature – text content
//   #content – paragraph text (rendered as prose by MDC)
//   #facts – AboutSectionItem components
</script>

<template>
  <section id="ueber-mich" class="py-20 lg:py-28 bg-bg-soft">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <!-- Left: portrait + facts -->
        <div class="relative">
          <div class="w-full aspect-3/4 max-w-sm mx-auto lg:mx-0 rounded-2xl overflow-hidden bg-line">
            <NuxtImg
              src="/img/fabian.png"
              alt="Fabian Stauder"
              class="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <!-- AboutSectionItem components via #facts slot -->
          <div class="grid grid-cols-3 gap-px mt-6 rounded-xl overflow-hidden border border-line">
            <slot name="facts" />
          </div>
        </div>

        <!-- Right: text -->
        <div class="flex flex-col">
          <div class="mb-4">
            <span class="eyebrow"><slot name="eyebrow" /></span>
          </div>

          <h2 class="display text-4xl lg:text-5xl mb-8 text-ink">
            <slot name="headline" />
          </h2>

          <blockquote class="relative pl-5 mb-8 border-l-2 border-sun">
            <p class="text-lg italic leading-relaxed font-display text-accent">
              „<slot name="quote" />"
            </p>
          </blockquote>

          <!-- Paragraph text via #content slot -->
          <div class="space-y-4 mb-10 text-base leading-relaxed text-ink-soft">
            <slot name="content" />
          </div>

          <!-- Signature -->
          <div class="flex items-center gap-3">
            <span class="text-3xl font-script italic text-accent">
              <slot name="signature" />
            </span>
            <div class="flex-1 h-px bg-line" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

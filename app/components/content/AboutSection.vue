<script setup lang="ts">
// Named slots:
//   #eyebrow, #headline, #quote, #signature – text content
//   #content – paragraph text (rendered as prose by MDC)
//   #facts – AboutSectionItem components
</script>

<template>
  <section id="ueber-mich" class="py-20 lg:py-28">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-[5fr_7fr] gap-12 lg:gap-20 items-center">

        <!-- Left: portrait -->
        <div class="relative">
          <div class="relative mx-auto lg:mx-0 max-w-sm">
            <!-- Organic pill portrait -->
            <div class="w-full aspect-4/5 overflow-hidden bg-line rounded-[200px_200px_24px_200px] shadow-md">
              <NuxtImg
                src="/img/fabian.png"
                alt="Fabian Stauder"
                format="webp"
                quality="75"
                width="384"
                height="480"
                sizes="sm:384px"
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <!-- Circular logo sticker -->
            <div class="absolute -bottom-5 -right-5 lg:-right-8 w-28 h-28 rounded-full bg-cream border border-line shadow-md flex items-center justify-center p-3 overflow-hidden">
              <img src="/img/logo.svg" alt="" class="w-full h-full object-contain" aria-hidden="true" />
            </div>
          </div>

          <!-- Facts slot -->
          <div class="grid grid-cols-3 gap-px mt-10 rounded-xl overflow-hidden border border-line">
            <slot name="facts" />
          </div>
        </div>

        <!-- Right: text -->
        <div class="flex flex-col">
          <span class="eyebrow mb-5"><slot name="eyebrow" /></span>

          <h2 class="display text-4xl lg:text-5xl mb-8 text-ink">
            <slot name="headline" />
          </h2>

          <blockquote class="pl-6 mb-8 border-l-2 border-accent">
            <div class="font-display text-xl lg:text-2xl italic leading-snug text-ink">
              „<slot name="quote" />"
            </div>
          </blockquote>

          <div class="space-y-4 mb-10 text-[17px] leading-relaxed text-ink-soft">
            <slot name="content" />
          </div>

          <!-- Signature -->
          <div class="flex items-end gap-4">
            <span class="font-signature text-5xl italic text-accent -rotate-3 inline-block leading-none">
              <slot name="signature" />
            </span>
            <div class="flex-1 h-px bg-line mb-2" />
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

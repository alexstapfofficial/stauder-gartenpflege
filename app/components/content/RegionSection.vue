<script setup lang="ts">
// Text content via named slots (#eyebrow, #headline, #lead)
// RegionSectionItem components go into #cities
</script>

<template>
  <section id="einzugsgebiet" class="py-20 lg:py-28 bg-bg-soft">
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

      <div class="grid lg:grid-cols-2 gap-10 items-start">
        <div class="relative rounded-2xl overflow-hidden flex  object-cover object-center items-center justify-center bg-line" style="aspect-ratio: 1/1;">
          <NuxtImg
            src="/img/map.jpg"
            alt="Einzugsgebiet Untermain-Spessart – Karte"
            class="w-full h-full object-cover object-center"
          />
        </div>

        <!-- RegionSectionItem components via #cities slot -->
        <div>
          <p class="text-sm mb-6 text-muted">
            Du kommst von weiter entfernt? Für regelmäßige oder große Aufträge fahre ich auch gerne weiter – sprich mich einfach an!
          </p>
          <div class="grid grid-cols-1 gap-2">
            <slot name="cities" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

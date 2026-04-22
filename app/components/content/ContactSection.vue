<script setup lang="ts">
// Structural/logic-driving data stays as props; text content via named slots
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
  <section id="kontakt" class="py-20 lg:py-28 bg-bg">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div class="rounded-2xl p-8 lg:p-14 bg-accent">
        <div class="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div class="mb-4">
              <span class="eyebrow eyebrow-sun"><slot name="eyebrow" /></span>
            </div>
            <h2 class="display text-4xl lg:text-5xl mb-4 text-accent-ink">
              <slot name="heading" />
            </h2>
            <p class="text-lg leading-relaxed mb-8 text-accent-ink/70">
              <slot name="lead" />
            </p>

            <div class="flex flex-wrap gap-3">
              <UButton
                :to="`tel:${props.phone.replace(/\s|·/g, '')}`"
                size="lg"
                style="background-color: var(--color-accent-ink); color: var(--color-accent);"
                class="hover:opacity-90 transition-opacity font-medium rounded-full"
                icon="i-lucide-phone"
              >
                {{ props.phone }}
              </UButton>
              <UButton
                :to="`mailto:${props.email}`"
                size="lg"
                variant="ghost"
                style="color: var(--color-accent-ink); border: 1.5px solid color-mix(in oklab, var(--color-accent-ink) 30%, transparent);"
                class="hover:bg-accent-ink/10 transition-colors font-medium rounded-full"
                icon="i-lucide-mail"
              >
                E-Mail schreiben
              </UButton>
            </div>
          </div>

          <div class="space-y-4">
            <div class="flex items-center gap-4 p-4 rounded-xl bg-accent-ink/[0.08]">
              <div class="flex items-center justify-center w-10 h-10 rounded-full shrink-0 bg-accent-ink/10">
                <UIcon name="i-lucide-phone" class="w-4 h-4 text-sun" />
              </div>
              <div>
                <p class="text-xs mb-0.5 text-accent-ink/50">Telefon</p>
                <p class="text-sm font-medium text-accent-ink">{{ props.phone }}</p>
              </div>
            </div>

            <div class="flex items-center gap-4 p-4 rounded-xl bg-accent-ink/[0.08]">
              <div class="flex items-center justify-center w-10 h-10 rounded-full shrink-0 bg-accent-ink/10">
                <UIcon name="i-lucide-mail" class="w-4 h-4 text-sun" />
              </div>
              <div>
                <p class="text-xs mb-0.5 text-accent-ink/50">E-Mail</p>
                <p class="text-sm font-medium text-accent-ink">{{ props.email }}</p>
              </div>
            </div>

            <div class="flex items-center gap-4 p-4 rounded-xl bg-accent-ink/[0.08]">
              <div class="flex items-center justify-center w-10 h-10 rounded-full shrink-0 bg-accent-ink/10">
                <UIcon name="i-lucide-clock" class="w-4 h-4 text-sun" />
              </div>
              <div>
                <p class="text-xs mb-0.5 text-accent-ink/50">Erreichbarkeit</p>
                <p class="text-sm font-medium text-accent-ink">{{ props.hours }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Stauder Gartenpflege – Dein Garten. Meine Leidenschaft.',
  description: 'Professionelle Gartenpflege im Spessart. Rasenpflege, Rückschnitt, Beetpflege und mehr – zuverlässig, sorgfältig, ohne Chemie.',
  ogTitle: 'Stauder Gartenpflege',
  ogDescription: 'Professionelle Gartenpflege im Spessart.',
  twitterCard: 'summary_large_image'
})

useHead({
  htmlAttrs: { lang: 'de' },
  link: [{ rel: 'icon', href: '/favicon.ico' }],
  meta: [{ name: 'color-scheme', content: 'light' }]
})

const navLinks = [
  { label: 'Leistungen', href: '#leistungen' },
  { label: 'Über mich', href: '#ueber-mich' },
  { label: 'Ablauf', href: '#ablauf' },
  { label: 'Galerie', href: '#galerie' },
  { label: 'Einzugsgebiet', href: '#einzugsgebiet' }
]

const phone = '0151 · 2345 6789'
const mobileMenuOpen = ref(false)
</script>

<template>
  <UApp>
    <!-- Navigation -->
    <header
      class="sticky top-0 z-50 border-b border-line backdrop-blur-sm bg-bg/90"
    >
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <NuxtLink to="/" class="shrink-0">
            <AppLogo />
          </NuxtLink>

          <!-- Desktop nav links -->
          <nav class="hidden lg:flex items-center gap-6">
            <NuxtLink
              v-for="link in navLinks"
              :key="link.href"
              :to="link.href"
              class="text-sm font-medium text-ink-soft transition-colors hover:text-accent"
            >
              {{ link.label }}
            </NuxtLink>
          </nav>

          <!-- Right side -->
          <div class="hidden lg:flex items-center gap-4">
            <a
              :href="`tel:${phone.replace(/\s|·/g, '')}`"
              class="text-sm font-medium text-ink-soft transition-colors hover:text-accent"
            >
              {{ phone }}
            </a>
            <UButton
              to="#kontakt"
              size="sm"
              style="background-color: var(--color-accent); color: var(--color-accent-ink);"
              class="hover:opacity-90 transition-opacity font-medium rounded-full"
            >
              Anfragen
            </UButton>
          </div>

          <!-- Mobile menu button -->
          <button
            class="lg:hidden p-2 rounded-lg text-accent"
            :aria-label="mobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'"
            @click="mobileMenuOpen = !mobileMenuOpen"
          >
            <UIcon :name="mobileMenuOpen ? 'i-lucide-x' : 'i-lucide-menu'" class="w-5 h-5" />
          </button>
        </div>
      </div>

      <!-- Mobile menu -->
      <div
        v-if="mobileMenuOpen"
        class="lg:hidden border-t border-line bg-bg"
      >
        <div class="mx-auto max-w-6xl px-4 py-4 flex flex-col gap-3">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.href"
            :to="link.href"
            class="text-sm font-medium py-2 text-ink-soft"
            @click="mobileMenuOpen = false"
          >
            {{ link.label }}
          </NuxtLink>
          <div class="pt-2 border-t border-line flex flex-col gap-2">
            <a
              :href="`tel:${phone.replace(/\s|·/g, '')}`"
              class="text-sm font-medium text-ink-soft"
            >
              {{ phone }}
            </a>
            <UButton
              to="#kontakt"
              size="sm"
              style="background-color: var(--color-accent); color: var(--color-accent-ink); width: fit-content;"
              class="hover:opacity-90 transition-opacity font-medium rounded-full"
              @click="mobileMenuOpen = false"
            >
              Anfragen
            </UButton>
          </div>
        </div>
      </div>
    </header>

    <UMain>
      <NuxtPage />
    </UMain>
  </UApp>
</template>

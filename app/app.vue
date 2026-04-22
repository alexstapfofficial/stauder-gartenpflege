<script setup lang="ts">
useSeoMeta({
  title: 'Stauder Gartenpflege – Dein Garten. Meine Leidenschaft.',
  description: 'Professionelle Gartenpflege im Untermain-Spessart. Rasenpflege, Rückschnitt, Beetpflege und mehr – zuverlässig, sorgfältig, ohne Chemie.',
  ogTitle: 'Stauder Gartenpflege',
  ogDescription: 'Professionelle Gartenpflege im Untermain-Spessart.',
  twitterCard: 'summary_large_image'
})

useHead({
  htmlAttrs: { lang: 'de' },
  link: [{ rel: 'icon', href: '/favicon.ico' }]
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

    <!-- Footer -->
    <footer class="bg-ink text-accent-ink">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <!-- Brand -->
          <div class="col-span-2 lg:col-span-1">
            <div class="flex items-center gap-2.5 mb-4">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="8" fill="var(--color-accent-soft)" />
                <path d="M16 6 C16 6, 10 10, 10 16 C10 20, 12 22, 16 24 C20 22, 22 20, 22 16 C22 10, 16 6, 16 6Z" fill="var(--color-accent-ink)" opacity="0.9" />
                <path d="M16 10 L16 24" stroke="var(--color-accent-soft)" stroke-width="1.5" stroke-linecap="round" />
              </svg>
              <span class="text-base font-semibold font-display">Stauder Gartenpflege</span>
            </div>
            <p class="text-sm leading-relaxed text-accent-ink/60">
              Professionelle Gartenpflege im Untermain-Spessart seit 2021.
            </p>
          </div>

          <!-- Navigation -->
          <div>
            <h3 class="text-xs font-medium tracking-widest uppercase mb-4 text-accent-ink/40">
              Navigation
            </h3>
            <ul class="space-y-2.5">
              <li v-for="link in navLinks" :key="link.href">
                <NuxtLink
                  :to="link.href"
                  class="text-sm transition-colors text-accent-ink/60 hover:text-accent-ink"
                >
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Leistungen -->
          <div>
            <h3 class="text-xs font-medium tracking-widest uppercase mb-4 text-accent-ink/40">
              Leistungen
            </h3>
            <ul class="space-y-2.5">
              <li v-for="service in ['Rasenpflege', 'Anpflanzen', 'Rückschnitt', 'Beetpflege', 'Unkraut raus', 'Laub & Herbst']" :key="service">
                <span class="text-sm text-accent-ink/60">{{ service }}</span>
              </li>
            </ul>
          </div>

          <!-- Kontakt -->
          <div>
            <h3 class="text-xs font-medium tracking-widest uppercase mb-4 text-accent-ink/40">
              Kontakt
            </h3>
            <div class="space-y-2.5">
              <a
                href="tel:015123456789"
                class="flex items-center gap-2 text-sm transition-colors text-accent-ink/60 hover:text-accent-ink"
              >
                <UIcon name="i-lucide-phone" class="w-3.5 h-3.5 shrink-0" />
                0151 · 2345 6789
              </a>
              <a
                href="mailto:hallo@stauder-gartenpflege.de"
                class="flex items-center gap-2 text-sm transition-colors text-accent-ink/60 hover:text-accent-ink"
              >
                <UIcon name="i-lucide-mail" class="w-3.5 h-3.5 shrink-0" />
                hallo@stauder-gartenpflege.de
              </a>
              <div class="flex items-center gap-2 text-sm text-accent-ink/60">
                <UIcon name="i-lucide-clock" class="w-3.5 h-3.5 shrink-0" />
                Mo–Sa, 7–18 Uhr
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom bar -->
        <div class="pt-8 border-t border-accent-ink/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p class="text-xs text-accent-ink/40">
            © {{ new Date().getFullYear() }} Stauder Gartenpflege · Fabian Stauder · Untermain-Spessart
          </p>
          <p class="text-xs text-accent-ink/30">
            Impressum · Datenschutz
          </p>
        </div>
      </div>
    </footer>
  </UApp>
</template>

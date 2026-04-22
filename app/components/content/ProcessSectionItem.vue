<script setup lang="ts">
defineProps<{
  number: string
  title: string
}>()
</script>

<template>
  <div class="relative flex flex-col">
    <!-- Connector line (desktop only, fades via gradient on last item) -->
    <div
      class="hidden lg:block absolute top-6 h-px"
      style="background: linear-gradient(90deg, var(--color-accent-soft) 0%, transparent 100%); width: calc(100% - 3rem); left: calc(3rem + 8px);"
    />

    <div class="flex items-center gap-3 mb-4">
      <div class="flex items-center justify-center w-12 h-12 rounded-full shrink-0 bg-accent-soft">
        <span class="text-sm font-bold font-mono text-accent-ink">{{ number }}</span>
      </div>
      <h3 class="font-display text-xl font-semibold text-accent-ink">
        {{ title }}
      </h3>
    </div>

    <p class="text-sm leading-relaxed text-accent-ink/70">
      <slot />
    </p>
  </div>
</template>

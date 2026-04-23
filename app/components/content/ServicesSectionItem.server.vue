<script setup lang="ts">
defineProps<{
  number: string
  title: string
  tags: string[]
}>()
</script>

<template>
  <div class="group relative overflow-hidden py-9 px-8 border-b border-r border-line transition-colors duration-300 hover:bg-accent/5 cursor-default">
    <!-- Botanical corner: appears on hover -->
    <div class="bot-corner absolute -top-5 -right-5 w-20 h-24 text-accent pointer-events-none" aria-hidden="true">
      <svg viewBox="0 0 60 90" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round">
        <path d="M30 88 C 8 70, 4 40, 30 4 C 56 40, 52 70, 30 88 Z" fill="currentColor" fill-opacity=".3" />
        <path d="M30 86 V 10 M30 30 L 44 22 M30 30 L 16 22 M30 50 L 48 42 M30 50 L 12 42 M30 68 L 44 62 M30 68 L 16 62" />
      </svg>
    </div>

    <span class="font-mono text-[11px] tracking-[0.16em] text-muted">{{ number }}</span>

    <h3 class="display text-[2rem] text-ink mt-[18px] mb-[10px]">
      {{ title }}
    </h3>

    <div class="text-[14.5px] leading-relaxed text-ink-soft mb-[18px]">
      <slot />
    </div>

    <div class="flex flex-wrap gap-1.5">
      <span
        v-for="tag in tags"
        :key="tag"
        class="font-mono text-[10px] uppercase tracking-[0.12em] px-[10px] py-[5px] rounded-full border border-line text-ink-soft"
      >
        {{ tag }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.bot-corner {
  opacity: 0;
  transform: rotate(20deg) scale(0.85);
  transition: opacity 0.3s ease, transform 0.5s ease;
}
.group:hover .bot-corner {
  opacity: 0.18;
  transform: rotate(12deg) scale(1);
}
</style>

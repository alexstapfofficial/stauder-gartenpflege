<script setup lang="ts">
defineProps<{
  number: string
  title: string
  tags: string[]
}>()
</script>

<template>
  <div
    class="relative p-7 group transition-colors duration-200 hover:bg-accent/5 border-b border-r border-line"
  >
    <div class="flex items-start justify-between mb-4">
      <span class="text-xs font-mono font-medium text-muted">
        {{ number }}
      </span>
      <UIcon name="i-lucide-leaf" class="w-4 h-4 opacity-30 group-hover:opacity-60 transition-opacity text-accent" />
    </div>

    <h3 class="font-display text-xl font-semibold mb-2 text-ink">
      {{ title }}
    </h3>

    <p class="text-sm leading-relaxed mb-4 text-ink-soft">
      <slot />
    </p>

    <div class="flex flex-wrap gap-1.5">
      <span
        v-for="tag in tags"
        :key="tag"
        class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs bg-accent/10 text-accent"
      >
        {{ tag }}
      </span>
    </div>
  </div>
</template>

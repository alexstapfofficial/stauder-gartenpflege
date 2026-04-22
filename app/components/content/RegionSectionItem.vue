<script setup lang="ts">
withDefaults(defineProps<{
  name: string
  isBase?: boolean
}>(), {
  isBase: false
})
</script>

<template>
  <div
    class="flex items-center justify-between px-4 py-3 rounded-lg transition-colors"
    :class="isBase ? 'bg-accent text-accent-ink' : 'bg-cream hover:bg-accent/5'"
  >
    <div class="flex items-center gap-2.5">
      <UIcon
        :name="isBase ? 'i-lucide-home' : 'i-lucide-map-pin'"
        class="w-3.5 h-3.5"
        :class="isBase ? 'text-sun' : 'text-accent-soft'"
      />
      <span
        class="text-sm font-medium"
        :class="isBase ? 'font-display text-accent-ink' : 'text-ink'"
      >
        {{ name }}
      </span>
    </div>
  </div>
</template>

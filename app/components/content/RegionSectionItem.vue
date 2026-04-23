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
    class="flex items-center justify-between px-4 py-3 rounded-full transition-colors"
    :class="isBase ? 'bg-accent text-accent-ink' : 'bg-cream hover:bg-accent/5'"
  >
    <div class="flex items-center grow-0 gap-2.5">
      <span
        class="text-xs font-medium"
        :class="isBase ? 'font-display text-accent-ink' : 'text-ink'"
      >
        {{ name }}
      </span>
    </div>
  </div>
</template>

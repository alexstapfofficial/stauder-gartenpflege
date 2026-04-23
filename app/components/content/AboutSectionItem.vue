<script setup lang="ts">
defineProps<{
  label: string
  value: string
}>()
</script>

<template>
  <div class="flex flex-col items-center py-4 px-3 text-center bg-cream">
    <span class="text-sm font-semibold font-display text-ink">{{ value }}</span>
    <span class="text-xs mt-0.5 text-muted">{{ label }}</span>
  </div>
</template>

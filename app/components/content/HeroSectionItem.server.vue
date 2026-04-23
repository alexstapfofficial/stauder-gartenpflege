<script setup lang="ts">
defineProps<{
  value: string
}>()
</script>

<template>
  <div class="flex flex-col gap-1">
    <span class="font-mono text-[11px] uppercase tracking-wider text-muted"><slot /></span>
    <strong class="font-display text-2xl font-normal text-ink">{{ value }}</strong>
  </div>
</template>

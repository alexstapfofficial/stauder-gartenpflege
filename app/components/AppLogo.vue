<script setup lang="ts">
defineProps<{
  class?: string
}>()
</script>

<template>
  <div :class="['flex items-center gap-2.5', $props.class]">
    <div class="flex flex-col leading-none gap-0.5">
      <span class="text-[20px] font-semibold tracking-wide font-script   text-primary-600">Fabian Stauder</span>
      <span class="text-[10px] tracking-wide font-mono uppercase text-muted">Gartenpflege · seit 2021</span>
    </div>
  </div>
</template>

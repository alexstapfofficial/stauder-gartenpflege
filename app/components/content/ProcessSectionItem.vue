<script setup lang="ts">
defineProps<{
  number: string
  title: string
}>()
</script>

<template>
  <div class="relative">
    <!-- Step number: white circle, accent text, display font, sits above connector line -->
    <div class="flex items-center justify-center w-14 h-14 rounded-full bg-accent-ink text-accent font-display text-2xl relative z-10 mb-6">
      {{ number }}
    </div>

    <h3 class="font-display font-normal text-2xl tracking-tight text-accent-ink mb-2.5">
      {{ title }}
    </h3>

    <div class="text-[14.5px] leading-relaxed text-accent-ink/75">
      <slot />
    </div>
  </div>
</template>

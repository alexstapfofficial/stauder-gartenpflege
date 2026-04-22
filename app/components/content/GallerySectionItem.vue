<script setup lang="ts">
defineProps<{
  title: string
  location: string
  beforeSrc: string
  afterSrc: string
  beforeAlt: string
  afterAlt: string
}>()

const sliderValue = ref(50)

function startDrag(e: MouseEvent | TouchEvent) {
  const container = (e.currentTarget as HTMLElement).closest('[data-gallery-item]') as HTMLElement
  if (!container) return

  const onMove = (moveEvent: MouseEvent | TouchEvent) => {
    const rect = container.getBoundingClientRect()
    const clientX = 'touches' in moveEvent ? moveEvent.touches[0].clientX : moveEvent.clientX
    sliderValue.value = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100))
  }

  const onUp = () => {
    window.removeEventListener('mousemove', onMove)
    window.removeEventListener('touchmove', onMove)
    window.removeEventListener('mouseup', onUp)
    window.removeEventListener('touchend', onUp)
  }

  window.addEventListener('mousemove', onMove)
  window.addEventListener('touchmove', onMove)
  window.addEventListener('mouseup', onUp)
  window.addEventListener('touchend', onUp)
}
</script>

<template>
  <div
    data-gallery-item
    class="group relative rounded-xl overflow-hidden select-none bg-line"
    style="aspect-ratio: 4/3;"
  >
    <!-- Before image -->
    <NuxtImg
      :src="beforeSrc"
      :alt="beforeAlt"
      class="absolute inset-0 w-full h-full object-cover"
    />

    <!-- After image (clipped) -->
    <div
      class="absolute inset-0 overflow-hidden"
      :style="{ clipPath: `inset(0 ${100 - sliderValue}% 0 0)` }"
    >
      <NuxtImg
        :src="afterSrc"
        :alt="afterAlt"
        class="absolute inset-0 w-full h-full object-cover"
      />
    </div>

    <!-- Divider -->
    <div
      class="absolute inset-y-0 w-0.5 cursor-ew-resize z-10"
      :style="{ left: `${sliderValue}%`, backgroundColor: 'var(--color-cream)' }"
      @mousedown="startDrag($event)"
      @touchstart.prevent="startDrag($event)"
    >
      <div class="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center shadow-md bg-cream">
        <UIcon name="i-lucide-chevrons-left-right" class="w-4 h-4 text-accent" />
      </div>
    </div>

    <!-- Labels -->
    <div class="absolute top-3 left-3 z-10">
      <span class="text-xs font-medium px-2 py-1 rounded-md bg-ink/80 text-accent-ink">
        Vorher
      </span>
    </div>
    <div class="absolute top-3 right-3 z-10">
      <span class="text-xs font-medium px-2 py-1 rounded-md bg-accent/80 text-accent-ink">
        Nachher
      </span>
    </div>

    <!-- Caption -->
    <div
      class="absolute bottom-0 inset-x-0 p-4 z-10"
      style="background: linear-gradient(to top, color-mix(in oklab, var(--color-ink) 80%, transparent) 0%, transparent 100%);"
    >
      <p class="text-sm font-semibold font-display text-accent-ink">{{ title }}</p>
      <p class="text-xs text-accent-ink/70">{{ location }}</p>
    </div>
  </div>
</template>

<template>
  <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-center gap-4.5 my-10 text-accent opacity-50">
      <!-- Line left -->
      <div class="flex-1 max-w-35 h-px bg-current opacity-40" />

      <!-- Leaf left -->
      <svg viewBox="0 0 60 90" width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g stroke="currentColor" stroke-width="1.4" stroke-linecap="round">
          <path d="M30 88 C 8 70, 4 40, 30 4 C 56 40, 52 70, 30 88 Z" fill="currentColor" fill-opacity=".3" />
          <path d="M30 86 V 10 M30 30 L 44 22 M30 30 L 16 22 M30 50 L 48 42 M30 50 L 12 42 M30 68 L 44 62 M30 68 L 16 62" fill="none" />
        </g>
      </svg>

      <!-- Bloom center -->
      <svg viewBox="0 0 60 60" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g stroke="currentColor" stroke-width="1.3">
          <circle cx="30" cy="30" r="5" fill="currentColor" fill-opacity=".4" />
          <ellipse cx="30" cy="12" rx="5" ry="8" fill="currentColor" fill-opacity=".25" />
          <ellipse cx="30" cy="48" rx="5" ry="8" fill="currentColor" fill-opacity=".25" />
          <ellipse cx="12" cy="30" rx="8" ry="5" fill="currentColor" fill-opacity=".25" />
          <ellipse cx="48" cy="30" rx="8" ry="5" fill="currentColor" fill-opacity=".25" />
          <ellipse cx="17" cy="17" rx="5" ry="7" fill="currentColor" fill-opacity=".2" transform="rotate(-45 17 17)" />
          <ellipse cx="43" cy="17" rx="5" ry="7" fill="currentColor" fill-opacity=".2" transform="rotate(45 43 17)" />
          <ellipse cx="17" cy="43" rx="5" ry="7" fill="currentColor" fill-opacity=".2" transform="rotate(45 17 43)" />
          <ellipse cx="43" cy="43" rx="5" ry="7" fill="currentColor" fill-opacity=".2" transform="rotate(-45 43 43)" />
        </g>
      </svg>

      <!-- Leaf right (mirrored) -->
      <svg viewBox="0 0 60 90" width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" style="transform: scaleX(-1)">
        <g stroke="currentColor" stroke-width="1.4" stroke-linecap="round">
          <path d="M30 88 C 8 70, 4 40, 30 4 C 56 40, 52 70, 30 88 Z" fill="currentColor" fill-opacity=".3" />
          <path d="M30 86 V 10 M30 30 L 44 22 M30 30 L 16 22 M30 50 L 48 42 M30 50 L 12 42 M30 68 L 44 62 M30 68 L 16 62" fill="none" />
        </g>
      </svg>

      <!-- Line right -->
      <div class="flex-1 max-w-35 h-px bg-current opacity-40" />
    </div>
  </div>
</template>

<template>
    <div class="relative h-32 w-full overflow-hidden">
        <div class="divider-leaf">
            <!-- leaf left -->
            <svg viewBox="0 0 60 90" width="56" height="56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30 85 C30 85, 8 60, 8 38 C8 20, 18 8, 30 5 C30 5, 30 5, 30 5 C30 5, 30 85, 30 85Z" fill="var(--color-accent)" opacity="0.7" />
                <path d="M30 85 C30 85, 52 60, 52 38 C52 20, 42 8, 30 5" fill="var(--color-accent-soft)" opacity="0.4" />
                <line x1="30" y1="5" x2="30" y2="85" stroke="var(--color-accent)" stroke-width="1.5" stroke-linecap="round" />
            </svg>
            <!-- bloom center -->
            <svg viewBox="0 0 60 60" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="30" cy="30" r="5" fill="var(--color-sun)" />
                <ellipse cx="30" cy="16" rx="5" ry="9" fill="var(--color-accent)" opacity="0.6" />
                <ellipse cx="30" cy="44" rx="5" ry="9" fill="var(--color-accent)" opacity="0.6" />
                <ellipse cx="16" cy="30" rx="9" ry="5" fill="var(--color-accent)" opacity="0.6" />
                <ellipse cx="44" cy="30" rx="9" ry="5" fill="var(--color-accent)" opacity="0.6" />
                <ellipse cx="19" cy="19" rx="5" ry="9" fill="var(--color-accent-soft)" opacity="0.45" transform="rotate(-45 19 19)" />
                <ellipse cx="41" cy="19" rx="5" ry="9" fill="var(--color-accent-soft)" opacity="0.45" transform="rotate(45 41 19)" />
                <ellipse cx="19" cy="41" rx="5" ry="9" fill="var(--color-accent-soft)" opacity="0.45" transform="rotate(45 19 41)" />
                <ellipse cx="41" cy="41" rx="5" ry="9" fill="var(--color-accent-soft)" opacity="0.45" transform="rotate(-45 41 41)" />
            </svg>
            <!-- leaf right (mirrored) -->
            <svg viewBox="0 0 60 90" width="56" height="56" fill="none" xmlns="http://www.w3.org/2000/svg" style="transform: scaleX(-1)">
                <path d="M30 85 C30 85, 8 60, 8 38 C8 20, 18 8, 30 5 C30 5, 30 5, 30 5 C30 5, 30 85, 30 85Z" fill="var(--color-accent)" opacity="0.7" />
                <path d="M30 85 C30 85, 52 60, 52 38 C52 20, 42 8, 30 5" fill="var(--color-accent-soft)" opacity="0.4" />
                <line x1="30" y1="5" x2="30" y2="85" stroke="var(--color-accent)" stroke-width="1.5" stroke-linecap="round" />
            </svg>
        </div>
    </div>
</template>
<style scoped>
.divider-leaf {
        display: flex; align-items: center; justify-content: center;
        gap: 18px;
        opacity: 0.5;
}
</style>
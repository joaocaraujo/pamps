<template>
  <div class="relative h-full w-full">
    <div
      v-for="(slide, index) in slides"
      :key="slide.src"
      class="absolute inset-0 h-full w-full transition-opacity duration-1000 ease-in-out"
      :class="index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'"
      :aria-hidden="index !== currentIndex"
      role="img"
      :aria-label="index === currentIndex ? slide.alt : undefined"
    >
      <OptimizedImage
        :src="slide.src"
        :alt="slide.alt"
        width="800"
        height="600"
        decoding="async"
        :loading="index === 0 ? 'eager' : 'lazy'"
        :fetchpriority="index === 0 ? 'high' : 'auto'"
        picture-class="block h-full w-full"
        img-class="hero-image h-full w-full object-cover"
      />
    </div>

    <div
      v-if="slides.length > 1"
      class="absolute bottom-3 left-1/2 z-30 flex -translate-x-1/2 gap-1.5"
      aria-hidden="true"
    >
      <span
        v-for="(_, index) in slides"
        :key="index"
        class="h-1.5 rounded-full transition-all duration-500"
        :class="index === currentIndex ? 'w-5 bg-light' : 'w-1.5 bg-light/50'"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { heroGallerySlides } from '~/config/gallery'

interface Props {
  intervalMs?: number
}

const props = withDefaults(defineProps<Props>(), {
  intervalMs: 5000
})

const slides = heroGallerySlides
const currentIndex = ref(0)

let timer: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  if (slides.length <= 1) return

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReducedMotion) return

  timer = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % slides.length
  }, props.intervalMs)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <div
    class="relative h-full w-full"
    role="img"
    :aria-label="slides[currentIndex]?.alt"
  >
    <img
      v-for="(slide, index) in slides"
      :key="slide.src"
      :src="slide.src"
      :alt="slide.alt"
      width="800"
      height="600"
      decoding="async"
      :loading="index === 0 ? 'eager' : 'lazy'"
      :fetchpriority="index === 0 ? 'high' : 'auto'"
      :aria-hidden="index !== currentIndex"
      class="hero-image absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out"
      :class="index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'"
    >
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

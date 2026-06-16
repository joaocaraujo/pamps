<template>
  <div
    class="relative w-full overflow-hidden rounded-lg border border-border bg-light shadow-base"
    role="region"
    :aria-label="title"
  >
    <div class="flex items-center justify-between gap-4 border-b border-border px-4 py-3">
      <h2 class="truncate text-lg font-heading font-bold text-text-main md:text-xl">
        {{ title }}
      </h2>
      <p
        v-if="images.length > 1"
        class="shrink-0 text-sm font-medium text-text-body"
        aria-live="polite"
      >
        {{ currentImageIndex + 1 }} / {{ images.length }}
      </p>
    </div>

    <div class="relative min-h-[50vh] md:min-h-[60vh]">
      <button
        v-if="images.length > 1 && currentImageIndex > 0"
        type="button"
        class="absolute left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-2 border-primary bg-light/90 text-primary shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-primary hover:text-text-inverse focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 md:h-12 md:w-12"
        :aria-label="t('gallery.previous')"
        @click="goToPrevious"
      >
        <svg class="h-5 w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        v-if="images.length > 1 && currentImageIndex < images.length - 1"
        type="button"
        class="absolute right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-2 border-primary bg-light/90 text-primary shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-primary hover:text-text-inverse focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 md:h-12 md:w-12"
        :aria-label="t('gallery.next')"
        @click="goToNext"
      >
        <svg class="h-5 w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div class="relative flex h-full min-h-[50vh] items-center justify-center overflow-hidden bg-surface md:min-h-[60vh]">
        <div
          class="flex h-full w-full transition-transform duration-500 ease-in-out"
          :style="{ transform: `translateX(-${currentImageIndex * 100}%)` }"
        >
          <div
            v-for="(image, index) in images"
            :key="`${image}-${index}`"
            class="flex h-full w-full shrink-0 items-center justify-center p-4 md:p-8"
          >
            <img
              :src="image"
              :alt="t('gallery.imageAlt', { event: title, index: index + 1 })"
              loading="lazy"
              class="max-h-[55vh] w-auto max-w-full rounded-lg object-contain md:max-h-[65vh]"
              @error="handleImageError"
            >
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="images.length > 1"
      class="flex items-center justify-center gap-2 border-t border-border px-4 py-4"
    >
      <button
        v-for="(_, index) in images"
        :key="index"
        type="button"
        class="h-2 rounded-full transition-all duration-300"
        :class="currentImageIndex === index ? 'w-8 bg-primary' : 'w-2 bg-border'"
        :aria-label="t('gallery.goTo', { index: index + 1 })"
        @click="goToIndex(index)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'

interface Props {
  title: string
  images: string[]
}

const props = defineProps<Props>()

const { t } = useI18n()

const currentImageIndex = ref(0)

const goToPrevious = () => {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--
  }
}

const goToNext = () => {
  if (currentImageIndex.value < props.images.length - 1) {
    currentImageIndex.value++
  }
}

const goToIndex = (index: number) => {
  if (index >= 0 && index < props.images.length) {
    currentImageIndex.value = index
  }
}

watch(
  () => [props.title, props.images],
  () => {
    currentImageIndex.value = 0
  }
)

let handleKeyDown: ((e: KeyboardEvent) => void) | null = null

onMounted(() => {
  handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      goToPrevious()
    } else if (e.key === 'ArrowRight') {
      goToNext()
    }
  }
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  if (handleKeyDown) {
    window.removeEventListener('keydown', handleKeyDown)
  }
})

const handleImageError = (e: Event) => {
  const img = e.target as HTMLImageElement
  if (!img.src.endsWith('/logo.webp')) {
    img.src = '/logo.webp'
  }
}
</script>

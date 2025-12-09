<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
        @click.self="close"
      >
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/80 backdrop-blur-sm" @click="close"></div>

        <!-- Modal Content -->
        <div
          class="relative w-full max-w-5xl max-h-[90vh] bg-light rounded-lg shadow-2xl overflow-hidden flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-labelledby="gallery-title"
        >
          <!-- Header -->
          <div class="flex items-center justify-between p-4 border-b border-border flex-shrink-0">
            <h2 id="gallery-title" class="text-xl font-heading font-bold text-text-main">
              {{ title }}
            </h2>
            <button
              @click="close"
              class="w-8 h-8 flex items-center justify-center rounded-base text-text-body hover:bg-surface hover:text-text-main transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              :aria-label="t('gallery.close')"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Gallery Content -->
          <div class="flex-1 relative overflow-hidden">
            <!-- Navigation Arrows -->
            <button
              v-if="images.length > 1 && currentImageIndex > 0"
              @click="goToPrevious"
              class="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 items-center justify-center rounded-full bg-light/90 backdrop-blur-sm border-2 border-primary text-primary shadow-lg hover:bg-primary hover:text-text-inverse transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 flex"
              :aria-label="t('gallery.previous')"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              v-if="images.length > 1 && currentImageIndex < images.length - 1"
              @click="goToNext"
              class="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 items-center justify-center rounded-full bg-light/90 backdrop-blur-sm border-2 border-primary text-primary shadow-lg hover:bg-primary hover:text-text-inverse transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 flex"
              :aria-label="t('gallery.next')"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <!-- Image Container -->
            <div class="relative w-full h-full flex items-center justify-center bg-surface overflow-hidden">
              <div
                class="flex transition-transform duration-500 ease-in-out h-full"
                :style="{ transform: `translateX(-${currentImageIndex * 100}%)` }"
              >
                <div
                  v-for="(image, index) in images"
                  :key="index"
                  class="w-full h-full flex-shrink-0 flex items-center justify-center p-4"
                >
                  <img
                    :src="image"
                    :alt="`${title} - Imagem ${index + 1}`"
                    class="max-w-full max-h-[70vh] w-auto h-auto object-contain rounded-lg"
                    @error="handleImageError"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Footer with Dots -->
          <div v-if="images.length > 1" class="flex justify-center items-center p-4 border-t border-border space-x-2 flex-shrink-0">
            <button
              v-for="(image, index) in images"
              :key="index"
              @click="goToIndex(index)"
              class="w-2 h-2 rounded-full transition-all duration-300"
              :class="currentImageIndex === index ? 'bg-primary w-8' : 'bg-border'"
              :aria-label="`Ir para imagem ${index + 1}`"
            >
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, watch, onUnmounted } from 'vue'

interface Props {
  isOpen: boolean
  title: string
  images: string[]
}

interface Emits {
  (e: 'update:isOpen', value: boolean): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const { t } = useI18n()

const currentImageIndex = ref(0)

const close = () => {
  emit('update:isOpen', false)
}

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

// Reset index when modal opens
watch(() => props.isOpen, (newValue) => {
  if (newValue) {
    currentImageIndex.value = 0
  }
})

// Keyboard navigation
let handleKeyDown: ((e: KeyboardEvent) => void) | null = null

watch(() => props.isOpen, (newValue) => {
  if (newValue) {
    handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToPrevious()
      } else if (e.key === 'ArrowRight') {
        goToNext()
      } else if (e.key === 'Escape') {
        close()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
  } else {
    if (handleKeyDown) {
      window.removeEventListener('keydown', handleKeyDown)
      handleKeyDown = null
    }
  }
})

onUnmounted(() => {
  if (handleKeyDown) {
    window.removeEventListener('keydown', handleKeyDown)
  }
})

const handleImageError = (e: Event) => {
  const img = e.target as HTMLImageElement
  img.src = '/images/placeholder.jpg' // Placeholder image if image fails to load
}
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .relative,
.modal-leave-active .relative {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.modal-enter-from .relative,
.modal-leave-to .relative {
  transform: scale(0.9);
  opacity: 0;
}
</style>


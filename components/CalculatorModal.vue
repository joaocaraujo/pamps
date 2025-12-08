<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
        @click.self="close"
      >
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" @click="close"></div>

        <!-- Modal Content -->
        <div
          class="relative w-full max-w-xl max-h-[90vh] bg-light rounded-lg shadow-2xl overflow-hidden flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-labelledby="calculator-title"
        >
          <!-- Header -->
          <div class="flex items-center justify-between p-3 border-b border-border flex-shrink-0">
            <h2 id="calculator-title" class="text-base font-heading font-bold text-text-main">
              {{ $t('calculator.title') }}
            </h2>
            <button
              @click="close"
              class="w-7 h-7 flex items-center justify-center rounded-base text-text-body hover:bg-surface hover:text-text-main transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              :aria-label="$t('calculator.close')"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Calculator Content -->
          <div class="flex-1 p-3 overflow-hidden flex flex-col min-h-0">
            <EventCalculator @close="close" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { watch } from 'vue'

interface Props {
  isOpen: boolean
}

interface Emits {
  (e: 'update:isOpen', value: boolean): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const close = () => {
  emit('update:isOpen', false)
}

// Close on Escape key
watch(() => props.isOpen, (isOpen) => {
  if (isOpen && typeof document !== 'undefined') {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close()
      }
    }
    document.addEventListener('keydown', handleEscape)
    
    return () => {
      if (typeof document !== 'undefined') {
        document.removeEventListener('keydown', handleEscape)
      }
    }
  }
})
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
  transform: scale(0.95);
  opacity: 0;
}
</style>


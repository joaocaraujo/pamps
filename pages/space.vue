<template>
  <div class="min-h-screen bg-highlight pt-24">
    <!-- Coming Soon Section -->
    <section class="py-16 md:py-24">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto">
          <!-- Large Icon -->
          <div class="mb-8 flex justify-center">
            <div class="space-icon-wrapper">
              <svg class="space-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
          </div>

          <!-- Title -->
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-text-main mb-8 text-center">
            {{ $t('space.title') }}
          </h1>

          <!-- Separator -->
          <div class="w-full h-0.5 bg-primary mb-8"></div>

          <!-- Coming Soon Message -->
          <div class="mb-8">
            <div class="flex items-center justify-center space-x-2 mb-6">
              <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p class="text-xl md:text-2xl font-heading font-bold text-primary">
                {{ $t('space.comingSoon') }}
              </p>
            </div>
            
            <!-- Tour Virtual Highlight -->
            <div class="bg-primary/10 border-2 border-primary rounded-lg p-6 md:p-8 mb-6">
              <div class="text-center">
                <div class="inline-flex items-center justify-center space-x-3 mb-3">
                  <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <h2 class="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary">
                    {{ $t('space.tourVirtual') }}
                  </h2>
                </div>
                <p class="text-lg md:text-xl text-text-body leading-relaxed">
                  {{ $t('space.tourMessage') }}
                </p>
              </div>
            </div>
            
            <p class="text-base md:text-lg text-text-body leading-relaxed text-center">
              {{ $t('space.message') }}
            </p>
          </div>

          <!-- Separator -->
          <div class="w-full h-0.5 bg-primary mb-8"></div>

          <!-- CTA Button -->
          <div class="flex justify-center">
            <a
              :href="whatsappLink"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-primary text-text-inverse font-body font-semibold text-lg rounded-base shadow-lg hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-300 hover:shadow-xl"
              :aria-label="$t('cta.whatsappLabel')"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>{{ $t('space.cta') }}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const { t } = useI18n()

const whatsappLink = computed(() => {
  const message = encodeURIComponent(t('space.whatsappMessage'))
  return `https://wa.me/5531999999999?text=${message}`
})

useHead({
  title: computed(() => `${t('space.title')} - ${t('brand.pageTitle')}`),
  meta: [
    {
      name: 'description',
      content: computed(() => t('space.message'))
    }
  ]
})
</script>

<style scoped>
.space-icon-wrapper {
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, #f59e0b 0%, #f97316 50%, #ea580c 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 
    0 10px 30px rgba(247, 159, 31, 0.25),
    0 0 0 4px rgba(247, 159, 31, 0.1);
  position: relative;
}

.space-icon-wrapper::before {
  content: '';
  position: absolute;
  inset: -6px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(247, 159, 31, 0.2), rgba(247, 159, 31, 0.05));
  z-index: -1;
  animation: glowPulse 3s ease-in-out infinite;
}

.space-icon {
  width: 60px;
  height: 60px;
  color: white;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
}

@keyframes glowPulse {
  0%, 100% {
    opacity: 0.5;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.1);
  }
}

@media (prefers-reduced-motion: reduce) {
  .space-icon-wrapper::before {
    animation: none;
  }
}
</style>


<template>
  <div class="min-h-screen bg-surface pt-24">
    <!-- Event Types Grid -->
    <section class="py-16 md:py-24">
      <div class="container mx-auto px-4">
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <!-- Festas Infantis -->
          <div class="event-card bg-light rounded-lg p-6 shadow-base hover:shadow-lg transition-all duration-300 border border-border">
            <div class="w-14 h-14 bg-primary/10 rounded-base flex items-center justify-center mb-4">
              <svg class="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h2 class="text-xl md:text-2xl font-heading font-bold text-text-main mb-3">
              {{ $t('events.children.title') }}
            </h2>
            <p class="text-text-body mb-4 leading-relaxed text-sm">
              {{ $t('events.children.description') }}
            </p>
            <ul class="space-y-2 mb-6">
              <li class="flex items-start space-x-2 text-sm text-text-body">
                <span class="text-primary mt-1 flex-shrink-0">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                <span>{{ $t('events.children.feature1') }}</span>
              </li>
              <li class="flex items-start space-x-2 text-sm text-text-body">
                <span class="text-primary mt-1 flex-shrink-0">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                <span>{{ $t('events.children.feature2') }}</span>
              </li>
              <li class="flex items-start space-x-2 text-sm text-text-body">
                <span class="text-primary mt-1 flex-shrink-0">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                <span>{{ $t('events.children.feature3') }}</span>
              </li>
            </ul>
            <a
              :href="whatsappLink('Festas Infantis')"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center w-full px-4 py-2.5 bg-primary text-text-inverse font-body font-semibold text-sm rounded-base hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-300"
            >
              {{ $t('events.cta') }}
            </a>
          </div>

          <!-- Chá de Bebê -->
          <div class="event-card bg-light rounded-lg p-6 shadow-base hover:shadow-lg transition-all duration-300 border border-border">
            <div class="w-14 h-14 bg-secondary/20 rounded-base flex items-center justify-center mb-4">
              <svg class="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h2 class="text-xl md:text-2xl font-heading font-bold text-text-main mb-3">
              {{ $t('events.babyShower.title') }}
            </h2>
            <p class="text-text-body mb-4 leading-relaxed text-sm">
              {{ $t('events.babyShower.description') }}
            </p>
            <ul class="space-y-2 mb-6">
              <li class="flex items-start space-x-2 text-sm text-text-body">
                <span class="text-secondary mt-1 flex-shrink-0">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                <span>{{ $t('events.babyShower.feature1') }}</span>
              </li>
              <li class="flex items-start space-x-2 text-sm text-text-body">
                <span class="text-secondary mt-1 flex-shrink-0">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                <span>{{ $t('events.babyShower.feature2') }}</span>
              </li>
              <li class="flex items-start space-x-2 text-sm text-text-body">
                <span class="text-secondary mt-1 flex-shrink-0">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                <span>{{ $t('events.babyShower.feature3') }}</span>
              </li>
            </ul>
            <a
              :href="whatsappLink('Chá de Bebê')"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center w-full px-4 py-2.5 bg-secondary text-text-inverse font-body font-semibold text-sm rounded-base hover:bg-secondary-hover focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 transition-all duration-300"
            >
              {{ $t('events.cta') }}
            </a>
          </div>

          <!-- Confraternizações -->
          <div class="event-card bg-light rounded-lg p-6 shadow-base hover:shadow-lg transition-all duration-300 border border-border">
            <div class="w-14 h-14 bg-accent/20 rounded-base flex items-center justify-center mb-4">
              <svg class="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h2 class="text-xl md:text-2xl font-heading font-bold text-text-main mb-3">
              {{ $t('events.gathering.title') }}
            </h2>
            <p class="text-text-body mb-4 leading-relaxed text-sm">
              {{ $t('events.gathering.description') }}
            </p>
            <ul class="space-y-2 mb-6">
              <li class="flex items-start space-x-2 text-sm text-text-body">
                <span class="text-accent mt-1 flex-shrink-0">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                <span>{{ $t('events.gathering.feature1') }}</span>
              </li>
              <li class="flex items-start space-x-2 text-sm text-text-body">
                <span class="text-accent mt-1 flex-shrink-0">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                <span>{{ $t('events.gathering.feature2') }}</span>
              </li>
              <li class="flex items-start space-x-2 text-sm text-text-body">
                <span class="text-accent mt-1 flex-shrink-0">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                <span>{{ $t('events.gathering.feature3') }}</span>
              </li>
            </ul>
            <a
              :href="whatsappLink('Confraternização')"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center w-full px-4 py-2.5 bg-accent text-text-inverse font-body font-semibold text-sm rounded-base hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 transition-all duration-300"
            >
              {{ $t('events.cta') }}
            </a>
          </div>

          <!-- Eventos Corporativos -->
          <div class="event-card bg-light rounded-lg p-6 shadow-base hover:shadow-lg transition-all duration-300 border border-border">
            <div class="w-14 h-14 bg-primary/10 rounded-base flex items-center justify-center mb-4">
              <svg class="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h2 class="text-xl md:text-2xl font-heading font-bold text-text-main mb-3">
              {{ $t('events.corporate.title') }}
            </h2>
            <p class="text-text-body mb-4 leading-relaxed text-sm">
              {{ $t('events.corporate.description') }}
            </p>
            <ul class="space-y-2 mb-6">
              <li class="flex items-start space-x-2 text-sm text-text-body">
                <span class="text-primary mt-1 flex-shrink-0">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                <span>{{ $t('events.corporate.feature1') }}</span>
              </li>
              <li class="flex items-start space-x-2 text-sm text-text-body">
                <span class="text-primary mt-1 flex-shrink-0">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                <span>{{ $t('events.corporate.feature2') }}</span>
              </li>
              <li class="flex items-start space-x-2 text-sm text-text-body">
                <span class="text-primary mt-1 flex-shrink-0">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                <span>{{ $t('events.corporate.feature3') }}</span>
              </li>
            </ul>
            <a
              :href="whatsappLink('Eventos Corporativos')"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center w-full px-4 py-2.5 bg-primary text-text-inverse font-body font-semibold text-sm rounded-base hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-300"
            >
              {{ $t('events.cta') }}
            </a>
          </div>

          <!-- Festas Temáticas -->
          <div class="event-card bg-light rounded-lg p-6 shadow-base hover:shadow-lg transition-all duration-300 border border-border">
            <div class="w-14 h-14 bg-secondary/20 rounded-base flex items-center justify-center mb-4">
              <svg class="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg>
            </div>
            <h2 class="text-xl md:text-2xl font-heading font-bold text-text-main mb-3">
              {{ $t('events.themed.title') }}
            </h2>
            <p class="text-text-body mb-4 leading-relaxed text-sm">
              {{ $t('events.themed.description') }}
            </p>
            <ul class="space-y-2 mb-6">
              <li class="flex items-start space-x-2 text-sm text-text-body">
                <span class="text-secondary mt-1 flex-shrink-0">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                <span>{{ $t('events.themed.feature1') }}</span>
              </li>
              <li class="flex items-start space-x-2 text-sm text-text-body">
                <span class="text-secondary mt-1 flex-shrink-0">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                <span>{{ $t('events.themed.feature2') }}</span>
              </li>
              <li class="flex items-start space-x-2 text-sm text-text-body">
                <span class="text-secondary mt-1 flex-shrink-0">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                <span>{{ $t('events.themed.feature3') }}</span>
              </li>
            </ul>
            <a
              :href="whatsappLink('Festas Temáticas')"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center w-full px-4 py-2.5 bg-secondary text-text-inverse font-body font-semibold text-sm rounded-base hover:bg-secondary-hover focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 transition-all duration-300"
            >
              {{ $t('events.cta') }}
            </a>
          </div>

          <!-- Ensaios Fotográficos -->
          <div class="event-card bg-light rounded-lg p-6 shadow-base hover:shadow-lg transition-all duration-300 border border-border">
            <div class="w-14 h-14 bg-accent/20 rounded-base flex items-center justify-center mb-4">
              <svg class="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h2 class="text-xl md:text-2xl font-heading font-bold text-text-main mb-3">
              {{ $t('events.photoShoot.title') }}
            </h2>
            <p class="text-text-body mb-4 leading-relaxed text-sm">
              {{ $t('events.photoShoot.description') }}
            </p>
            <ul class="space-y-2 mb-6">
              <li class="flex items-start space-x-2 text-sm text-text-body">
                <span class="text-accent mt-1 flex-shrink-0">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                <span>{{ $t('events.photoShoot.feature1') }}</span>
              </li>
              <li class="flex items-start space-x-2 text-sm text-text-body">
                <span class="text-accent mt-1 flex-shrink-0">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                <span>{{ $t('events.photoShoot.feature2') }}</span>
              </li>
              <li class="flex items-start space-x-2 text-sm text-text-body">
                <span class="text-accent mt-1 flex-shrink-0">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                <span>{{ $t('events.photoShoot.feature3') }}</span>
              </li>
            </ul>
            <a
              :href="whatsappLink('Ensaios Fotográficos')"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center w-full px-4 py-2.5 bg-accent text-text-inverse font-body font-semibold text-sm rounded-base hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 transition-all duration-300"
            >
              {{ $t('events.cta') }}
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

const whatsappLink = (eventType: string) => {
  const message = encodeURIComponent(`Olá! Gostaria de saber mais sobre ${eventType} na Pamps.`)
  return `https://wa.me/5531999999999?text=${message}`
}

useHead({
  title: computed(() => `${t('home.eventTypes.title')} - ${t('brand.pageTitle')}`),
  meta: [
    {
      name: 'description',
      content: computed(() => t('events.subtitle'))
    }
  ]
})
</script>

<style scoped>
.event-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.event-card:hover {
  transform: translateY(-2px);
}
</style>

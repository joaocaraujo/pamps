<template>
  <div class="min-h-screen bg-highlight pt-24">
    <!-- Contact Section -->
    <section class="py-16 md:py-24">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <!-- Title -->
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-text-main mb-12 text-center">
            {{ $t('contact.title') }}
          </h1>

          <!-- Top Info Cards -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <!-- Address Card -->
            <div class="bg-light rounded-lg p-6 shadow-base border border-border">
              <div class="flex items-center justify-center mb-4">
                <div class="w-14 h-14 bg-primary/10 rounded-base flex items-center justify-center">
                  <svg class="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <h3 class="text-lg font-heading font-bold text-text-main mb-2 text-center">
                {{ $t('contact.topCards.address.title') }}
              </h3>
              <p class="text-sm text-text-body text-center leading-relaxed">
                {{ $t('contact.addressText') }}
              </p>
            </div>

            <!-- Phone Card -->
            <div class="bg-light rounded-lg p-6 shadow-base border border-border">
              <div class="flex items-center justify-center mb-4">
                <div class="w-14 h-14 bg-primary/10 rounded-base flex items-center justify-center">
                  <svg class="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
              </div>
              <h3 class="text-lg font-heading font-bold text-text-main mb-2 text-center">
                {{ $t('contact.topCards.phone.title') }}
              </h3>
              <p class="text-sm text-text-body text-center leading-relaxed">
                {{ $t('contact.phoneNumber') }}<br>
                <span class="text-primary font-medium">{{ $t('contact.topCards.phone.whatsapp') }}</span>
              </p>
            </div>

            <!-- Email Card -->
            <div class="bg-light rounded-lg p-6 shadow-base border border-border">
              <div class="flex items-center justify-center mb-4">
                <div class="w-14 h-14 bg-primary/10 rounded-base flex items-center justify-center">
                  <svg class="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <h3 class="text-lg font-heading font-bold text-text-main mb-2 text-center">
                {{ $t('contact.topCards.email.title') }}
              </h3>
              <p class="text-sm text-text-body text-center leading-relaxed">
                {{ $t('contact.emailAddress') }}<br>
                <span class="text-primary font-medium">{{ $t('contact.topCards.email.response') }}</span>
              </p>
            </div>

            <!-- Schedule Card -->
            <div class="bg-light rounded-lg p-6 shadow-base border border-border">
              <div class="flex items-center justify-center mb-4">
                <div class="w-14 h-14 bg-primary/10 rounded-base flex items-center justify-center">
                  <svg class="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 class="text-lg font-heading font-bold text-text-main mb-2 text-center">
                {{ $t('contact.topCards.schedule.title') }}
              </h3>
              <p class="text-sm text-text-body text-center leading-relaxed">
                {{ $t('contact.topCards.schedule.weekdays') }}<br>
                {{ $t('contact.topCards.schedule.saturday') }}
              </p>
            </div>
          </div>

          <!-- Bottom Section -->
          <div class="grid md:grid-cols-2 gap-8">
            <!-- WhatsApp Card -->
            <div class="bg-light rounded-lg p-8 shadow-base border border-border">
              <div class="flex items-center justify-center mb-6">
                <div class="w-16 h-16 bg-primary/10 rounded-base flex items-center justify-center">
                  <svg class="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
              </div>
              <h2 class="text-2xl font-heading font-bold text-text-main mb-4 text-center">
                {{ $t('contact.whatsappCard.title') }}
              </h2>
              <p class="text-text-body mb-6 text-center leading-relaxed">
                {{ $t('contact.whatsappCard.description') }}
              </p>
              <a
                :href="whatsappLink"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center w-full px-6 py-4 bg-primary text-text-inverse font-body font-semibold text-lg rounded-base hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-300 shadow-lg"
                :aria-label="$t('cta.whatsappLabel')"
              >
                <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                {{ $t('contact.whatsappCard.button') }}
              </a>
            </div>

            <!-- Location Card -->
            <div class="bg-light rounded-lg p-8 shadow-base border border-border">
              <div class="flex items-center justify-center mb-6">
                <div class="w-16 h-16 bg-primary/10 rounded-base flex items-center justify-center">
                  <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <h2 class="text-2xl font-heading font-bold text-text-main mb-4 text-center">
                {{ $t('contact.locationCard.title') }}
              </h2>
              <p class="text-text-body mb-6 text-center">
                {{ $t('contact.addressText') }}
              </p>
              <!-- Map Placeholder -->
              <div class="bg-highlight rounded-lg h-64 flex items-center justify-center border-2 border-dashed border-border">
                <p class="text-text-body text-sm">{{ $t('contact.locationCard.mapComingSoon') }}</p>
              </div>
            </div>
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
  const message = encodeURIComponent(t('contact.whatsappMessage'))
  return `https://wa.me/5531999999999?text=${message}`
})

useHead({
  title: computed(() => `${t('contact.title')} - ${t('brand.pageTitle')}`),
  meta: [
    {
      name: 'description',
      content: computed(() => t('contact.metaDescription'))
    }
  ]
})
</script>

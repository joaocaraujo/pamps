<template>
  <div class="min-h-screen bg-surface pt-24">
    <!-- Packages Carousel Section -->
    <section class="py-16 md:py-24">
      <div class="container mx-auto px-4">
        <!-- Common Benefits -->
        <div class="max-w-4xl mx-auto mb-12 text-center">
          <div class="flex flex-wrap justify-center gap-4 md:gap-6 text-sm md:text-base text-text-body">
            <div class="flex items-center space-x-2">
              <span class="text-primary">✓</span>
              <span>{{ $t('packages.common.payment') }}</span>
            </div>
            <div class="flex items-center space-x-2">
              <span class="text-primary">✓</span>
              <span>{{ $t('packages.common.receptionist') }}</span>
            </div>
            <div class="flex items-center space-x-2">
              <span class="text-primary">✓</span>
              <span>{{ $t('packages.common.valet') }}</span>
            </div>
          </div>
        </div>

        <!-- Carousel -->
        <div class="relative">
          <!-- Navigation Arrows -->
          <button
            v-if="currentIndex > 0"
            @click="goToPrevious"
            class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-20 w-12 h-12 md:w-14 md:h-14 items-center justify-center rounded-full bg-light border-2 border-primary text-primary shadow-lg hover:bg-primary hover:text-text-inverse transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 flex"
            :aria-label="$t('packages.carousel.previous')"
          >
            <svg class="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            v-if="currentIndex < packages.length - 1"
            @click="goToNext"
            class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-20 w-12 h-12 md:w-14 md:h-14 items-center justify-center rounded-full bg-light border-2 border-primary text-primary shadow-lg hover:bg-primary hover:text-text-inverse transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 flex"
            :aria-label="$t('packages.carousel.next')"
          >
            <svg class="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <!-- Carousel Container -->
          <div class="max-w-2xl mx-auto relative">
            <div
              ref="carouselRef"
              class="carousel-container overflow-hidden"
              @touchstart="handleTouchStart"
              @touchmove="handleTouchMove"
              @touchend="handleTouchEnd"
            >
              <div
                class="flex transition-transform duration-500 ease-in-out"
                :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
              >
                <div
                  v-for="(pkg, index) in packages"
                  :key="index"
                  class="package-card flex-shrink-0 w-full"
                >
                  <div class="bg-light/95 backdrop-blur-sm border border-border rounded-lg p-6 md:p-8 package-card-shadow hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                    <!-- Tag/Ribbon -->
                    <div v-if="pkg.tag" class="mb-4">
                      <span
                        class="inline-block px-3 py-1 text-xs font-semibold rounded-full"
                        :class="{
                          'bg-primary text-text-inverse': pkg.tag === 'bestSeller',
                          'bg-secondary text-text-main': pkg.tag === 'bestValue',
                          'bg-accent text-text-inverse': pkg.tag === 'premium'
                        }"
                      >
                        {{ $t(`packages.tags.${pkg.tag}`) }}
                      </span>
                    </div>

                    <!-- Package Name -->
                    <h3 class="text-2xl md:text-3xl font-heading font-bold text-text-main mb-4">
                      {{ pkg.name }}
                    </h3>

                    <!-- Price -->
                    <div class="mb-6">
                      <div v-if="pkg.price" class="text-sm text-text-light mb-1">{{ $t('packages.common.from') }}</div>
                      <div class="text-4xl md:text-5xl font-heading font-bold text-primary">
                        <span v-if="pkg.price">R$ {{ pkg.price }}</span>
                        <span v-else class="text-2xl md:text-3xl">{{ $t('packages.common.customPrice') }}</span>
                      </div>
                    </div>

                    <!-- Savings -->
                    <div v-if="pkg.savings" class="mb-4 text-sm font-semibold text-secondary">
                      {{ pkg.savings }}
                    </div>

                    <!-- Capacity & Duration -->
                    <div class="flex items-center space-x-4 mb-6 text-sm text-text-body">
                      <div v-if="pkg.capacity" class="flex items-center space-x-2">
                        <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span>{{ pkg.capacity }} {{ $t('packages.common.guests') }}</span>
                      </div>
                      <div v-if="pkg.duration" class="flex items-center space-x-2">
                        <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{{ pkg.duration }}{{ $t('packages.common.hours') }}</span>
                      </div>
                    </div>

                    <!-- Includes List -->
                    <div v-if="pkg.includes && pkg.includes.length > 0" class="mb-6 flex-grow">
                      <h4 class="text-sm font-semibold text-text-main mb-3">{{ $t('packages.common.includes') }}:</h4>
                      <ul class="space-y-2">
                        <li
                          v-for="(item, itemIndex) in pkg.includes"
                          :key="itemIndex"
                          class="flex items-start space-x-2 text-sm text-text-body"
                        >
                          <span class="text-primary mt-0.5">•</span>
                          <span>{{ $t(`packages.items.${item}`) }}</span>
                        </li>
                      </ul>
                    </div>
                    <div v-else-if="pkg.isCustomizable" class="mb-6 flex-grow">
                      <p class="text-sm text-text-body mb-4 italic">
                        {{ $t('packages.common.fullyCustomizable') }}
                      </p>
                      <div>
                        <h4 class="text-sm font-semibold text-text-main mb-3">{{ $t('packages.common.availableItems') }}:</h4>
                        <ul class="space-y-2">
                          <li
                            v-for="(item, itemIndex) in availableItems"
                            :key="itemIndex"
                            class="flex items-start space-x-2 text-sm text-text-body"
                          >
                            <span class="text-primary mt-0.5">•</span>
                            <span>{{ $t(`packages.items.${item}`) }}</span>
                          </li>
                          <li class="flex items-start space-x-2 text-sm text-text-body text-text-light italic">
                            <span class="text-primary mt-0.5">•</span>
                            <span>{{ $t('packages.common.andMore') }}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div v-else class="mb-6 flex-grow">
                      <p class="text-sm text-text-body italic">
                        {{ $t('packages.common.fullyCustomizable') }}
                      </p>
                    </div>

                    <!-- Notes -->
                    <div v-if="pkg.notes" class="mb-6 text-xs text-text-light italic">
                      {{ pkg.notes }}
                    </div>

                    <!-- CTA Button -->
                    <a
                      :href="whatsappLink(pkg.name)"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="mt-auto w-full inline-flex items-center justify-center px-6 py-3 bg-primary text-text-inverse font-body font-semibold rounded-base shadow-base hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-300 hover:shadow-lg"
                    >
                      {{ pkg.isCorporate ? $t('packages.common.ctaCorporate') : $t('packages.common.cta') }}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Dots Navigation -->
          <div class="flex justify-center mt-8 space-x-2">
            <button
              v-for="(pkg, index) in packages"
              :key="index"
              @click="goToIndex(index)"
              class="w-2 h-2 rounded-full transition-all duration-300"
              :class="currentIndex === index ? 'bg-primary w-8' : 'bg-border'"
              :aria-label="`Ir para pacote ${pkg.name}`"
            >
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const { t } = useI18n()

const carouselRef = ref<HTMLElement | null>(null)
const currentIndex = ref(0)
const touchStartX = ref(0)
const touchEndX = ref(0)

const packages = computed(() => {
  const plans = [
    {
      key: 'realeza',
      includes: ['fixedPlayground', 'totó', 'buffet', 'nonAlcoholic'],
      tag: null,
      savings: null,
      isCorporate: false
    },
    {
      key: 'mundoMagico',
      includes: ['fixedPlayground', 'totó', 'thematicDecoration', 'buffet', 'nonAlcoholic'],
      tag: 'bestValue',
      savings: t('packages.plans.mundoMagico.savings'),
      isCorporate: false
    },
    {
      key: 'hakunaMatata',
      includes: ['fixedPlayground', 'totó', 'snooker', 'thematicDecoration', 'buffet', 'nonAlcoholic'],
      tag: 'bestSeller',
      savings: null,
      isCorporate: false
    },
    {
      key: 'fendaBiquini',
      includes: ['fixedPlayground', 'totó', 'thematicDecoration', 'buffet', 'nonAlcoholic'],
      tag: null,
      savings: null,
      isCorporate: false
    },
    {
      key: 'siriCascudo',
      includes: ['fixedPlayground', 'totó', 'buffet', 'nonAlcoholic'],
      tag: null,
      savings: null,
      isCorporate: false
    },
    {
      key: 'aoInfinito',
      includes: ['fixedPlayground', 'totó', 'snooker', 'thematicDecoration', 'buffet', 'nonAlcoholic'],
      tag: null,
      savings: t('packages.plans.aoInfinito.savings'),
      isCorporate: false
    },
    {
      key: 'superPamps',
      includes: ['fixedPlayground', 'totó', 'snooker', 'sodaMachine', 'fullBuffet', 'nonAlcoholic', 'alcoholic', 'chopUnlimited'],
      tag: 'premium',
      savings: null,
      isCorporate: true
    },
    {
      key: 'euEscolhoVoce',
      includes: [],
      tag: null,
      savings: null,
      isCorporate: false,
      isCustomizable: true
    }
  ]
  
  return plans.map(plan => ({
    name: t(`packages.plans.${plan.key}.name`),
    price: t(`packages.plans.${plan.key}.price`),
    capacity: t(`packages.plans.${plan.key}.capacity`),
    duration: t(`packages.plans.${plan.key}.duration`),
    includes: plan.includes,
    notes: t(`packages.plans.${plan.key}.notes`),
    tag: plan.tag,
    savings: plan.savings,
    isCorporate: plan.isCorporate,
    isCustomizable: plan.isCustomizable || false
  }))
})

const availableItems = computed(() => [
  'fixedPlayground',
  'totó',
  'snooker',
  'sodaMachine',
  'buffet',
  'fullBuffet',
  'nonAlcoholic',
  'alcoholic',
  'chopUnlimited',
  'thematicDecoration'
])

const whatsappLink = (packageName: string) => {
  const message = encodeURIComponent(`Olá! Gostaria de saber mais sobre o pacote ${packageName}.`)
  return `https://wa.me/5531999999999?text=${message}`
}

const goToPrevious = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

const goToNext = () => {
  if (currentIndex.value < packages.value.length - 1) {
    currentIndex.value++
  }
}

const goToIndex = (index: number) => {
  if (index >= 0 && index < packages.value.length) {
    currentIndex.value = index
  }
}

const handleTouchStart = (e: TouchEvent) => {
  touchStartX.value = e.touches[0].clientX
}

const handleTouchMove = (e: TouchEvent) => {
  touchEndX.value = e.touches[0].clientX
}

const handleTouchEnd = () => {
  if (!touchStartX.value || !touchEndX.value) return
  const distance = touchStartX.value - touchEndX.value
  const minSwipeDistance = 50
  
  if (Math.abs(distance) > minSwipeDistance) {
    if (distance > 0) {
      goToNext()
    } else {
      goToPrevious()
    }
  }
  
  touchStartX.value = 0
  touchEndX.value = 0
}

useHead({
  title: computed(() => `${t('packages.title')} - ${t('brand.pageTitle')}`),
  meta: [
    {
      name: 'description',
      content: computed(() => t('packages.subtitle'))
    }
  ]
})
</script>

<style scoped>
.carousel-container {
  position: relative;
}

.package-card {
  padding: 0 1rem;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.package-card-shadow {
  box-shadow: 
    0 10px 25px -5px rgba(0, 0, 0, 0.15),
    0 4px 10px -2px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(0, 0, 0, 0.05);
}

.package-card > div {
  animation: fadeIn 0.5s ease-out;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.package-card > div:hover {
  transform: translateY(-4px);
  box-shadow: 
    0 20px 40px -10px rgba(0, 0, 0, 0.2),
    0 8px 16px -4px rgba(0, 0, 0, 0.15),
    0 0 0 1px rgba(0, 0, 0, 0.05);
}
</style>


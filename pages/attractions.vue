<template>
  <div class="min-h-screen bg-surface pt-24">
    <section class="relative py-12 md:py-16 bg-highlight overflow-x-clip overflow-y-visible">
      <div class="container relative z-[2] mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="attractions-hero rounded-2xl border border-primary/25 bg-light p-6 md:p-10 relative overflow-hidden">
            <div class="absolute -top-20 -right-16 w-56 h-56 rounded-full bg-primary/20 blur-3xl"></div>
            <div class="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-accent/20 blur-3xl"></div>
            <div class="relative z-10 text-center">
              <p class="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-primary mb-2">
                {{ $t('attractions.eyebrow') }}
              </p>
              <h1 class="text-4xl md:text-5xl font-heading font-bold text-text-main mb-3">
                {{ $t('attractions.title') }}
              </h1>
              <p class="text-text-body text-lg max-w-3xl mx-auto">
                {{ $t('attractions.subtitle') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-14 md:py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          <article class="highlight-card rounded-2xl overflow-hidden border border-border bg-light shadow-xl">
            <div class="aspect-[4/3] overflow-hidden">
              <img
                :src="mainAttractions.ledSlide.image"
                :alt="$t('attractions.main.ledSlide.title')"
                class="w-full h-full object-cover"
                loading="lazy"
                @error="onImageError"
              />
            </div>
            <div class="p-6 md:p-8">
              <h2 class="text-3xl font-heading font-bold text-text-main mb-3">
                {{ $t('attractions.main.ledSlide.title') }}
              </h2>
              <p class="text-text-body leading-relaxed text-base md:text-lg">
                {{ $t('attractions.main.ledSlide.description') }}
              </p>
            </div>
          </article>

          <article class="highlight-card rounded-2xl overflow-hidden border border-border bg-light shadow-xl">
            <div class="aspect-[4/3] overflow-hidden">
              <img
                :src="mainAttractions.megaPlayground.image"
                :alt="$t('attractions.main.megaPlayground.title')"
                class="w-full h-full object-cover"
                loading="lazy"
                @error="onImageError"
              />
            </div>
            <div class="p-6 md:p-8">
              <h2 class="text-3xl font-heading font-bold text-text-main mb-3">
                {{ $t('attractions.main.megaPlayground.title') }}
              </h2>
              <p class="text-text-body leading-relaxed text-base md:text-lg">
                {{ $t('attractions.main.megaPlayground.description') }}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="py-12 md:py-16 bg-highlight">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-8">
            <h2 class="text-3xl md:text-4xl font-heading font-bold text-text-main mb-2">
              {{ $t('attractions.carousel.title') }}
            </h2>
            <p class="text-text-body">
              {{ $t('attractions.carousel.subtitle') }}
            </p>
          </div>

          <div class="relative">
            <button
              @click="prevAttraction"
              class="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-11 h-11 rounded-full bg-light border-2 border-primary text-primary items-center justify-center shadow-lg hover:bg-primary hover:text-text-inverse transition-all duration-300"
              :aria-label="$t('attractions.carousel.previous')"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              @click="nextAttraction"
              class="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-11 h-11 rounded-full bg-light border-2 border-primary text-primary items-center justify-center shadow-lg hover:bg-primary hover:text-text-inverse transition-all duration-300"
              :aria-label="$t('attractions.carousel.next')"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div
              :key="currentSlide"
              class="grid gap-4 transition-opacity duration-300 motion-reduce:transition-none"
              :class="carouselGridClass"
            >
              <div
                v-for="(attraction, index) in visibleAttractions"
                :key="`${currentSlide}-${index}`"
                class="rounded-xl overflow-hidden border border-border bg-light shadow-base h-full min-w-0"
              >
                <div class="aspect-[4/3] overflow-hidden">
                  <img
                    :src="attraction.image"
                    :alt="attraction.title"
                    class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                    @error="onImageError"
                  />
                </div>
                <div class="p-4">
                  <p class="font-heading font-semibold text-text-main text-lg">
                    {{ attraction.title }}
                  </p>
                </div>
              </div>
            </div>

            <div class="flex justify-center gap-2 mt-5">
              <button
                v-for="dot in slideCount"
                :key="dot"
                @click="currentSlide = dot - 1"
                class="w-2.5 h-2.5 rounded-full transition-all duration-300"
                :class="currentSlide === dot - 1 ? 'bg-primary w-7' : 'bg-border'"
                :aria-label="`${$t('attractions.carousel.goTo')} ${dot}`"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const { t } = useI18n()

const fallbackImage = '/logo.png'

const mainAttractions = {
  ledSlide: {
    image: '/images/attractions/toboga-led.jpg'
  },
  megaPlayground: {
    image: '/images/attractions/mega-brinquedao.jpg'
  }
}

const secondaryAttractions = computed(() => [
  { title: t('attractions.secondary.field'), image: '/images/attractions/campo-futebol.jpg' },
  { title: t('attractions.secondary.ballPool'), image: '/images/attractions/piscina-bolinha.jpg' },
  { title: t('attractions.secondary.trampoline'), image: '/images/attractions/cama-elastica.jpg' },
  { title: t('attractions.secondary.babyArea'), image: '/images/attractions/area-baby.jpg' },
  { title: t('attractions.secondary.arcade'), image: '/images/attractions/fliperama.jpg' },
  { title: t('attractions.secondary.foosball'), image: '/images/attractions/toto-pebolim.jpg' },
  { title: t('attractions.secondary.airGame'), image: '/images/attractions/air-game.jpg' },
  { title: t('attractions.secondary.interactiveScenarios'), image: '/images/attractions/cenarios-interativos.jpg' }
])

const currentSlide = ref(0)
const itemsPerSlide = 3

const slideCount = computed(() => {
  return Math.max(1, Math.ceil(secondaryAttractions.value.length / itemsPerSlide))
})

const visibleAttractions = computed(() => {
  const start = currentSlide.value * itemsPerSlide
  return secondaryAttractions.value.slice(start, start + itemsPerSlide)
})

/** Evita “buraco” à direita quando o último slide tem menos de 3 cards */
const carouselGridClass = computed(() => {
  const n = visibleAttractions.value.length
  if (n >= 3) {
    return 'grid-cols-1 md:grid-cols-3'
  }
  if (n === 2) {
    return 'grid-cols-1 md:grid-cols-2 md:max-w-4xl md:mx-auto w-full'
  }
  return 'grid-cols-1 md:max-w-xl md:mx-auto w-full'
})

const nextAttraction = () => {
  currentSlide.value = (currentSlide.value + 1) % slideCount.value
}

const prevAttraction = () => {
  currentSlide.value = (currentSlide.value - 1 + slideCount.value) % slideCount.value
}

const onImageError = (event: Event) => {
  const target = event.target as HTMLImageElement
  if (target.src !== `${window.location.origin}${fallbackImage}`) {
    target.src = fallbackImage
  }
}

useHead({
  title: computed(() => `${t('attractions.title')} - ${t('brand.pageTitle')}`),
  meta: [
    {
      name: 'description',
      content: computed(() => t('attractions.subtitle'))
    }
  ]
})
</script>

<style scoped>
.attractions-hero {
  box-shadow:
    0 20px 45px -20px rgba(0, 0, 0, 0.25),
    0 4px 14px -6px rgba(0, 0, 0, 0.2);
}

.highlight-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.highlight-card:hover {
  transform: translateY(-4px);
  box-shadow:
    0 22px 38px -18px rgba(0, 0, 0, 0.3),
    0 8px 12px -8px rgba(0, 0, 0, 0.2);
}

</style>

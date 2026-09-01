<template>
  <div class="min-h-screen bg-surface pt-24">
    <section class="relative py-12 md:py-16">
      <div class="container relative z-[2] mx-auto px-4">
        <div class="mx-auto max-w-4xl text-center">
          <p class="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary md:text-sm">
            {{ $t('gallery.eyebrow') }}
          </p>
          <h1 class="mb-3 text-4xl font-heading font-bold text-text-main md:text-5xl">
            {{ $t('gallery.title') }}
          </h1>
          <p class="mx-auto max-w-2xl text-lg text-text-body">
            {{ $t('gallery.subtitle') }}
          </p>
        </div>
      </div>
    </section>

    <section class="pb-16 md:pb-24">
      <div class="container mx-auto px-4">
        <div v-if="galleryEvents.length === 0" class="mx-auto max-w-xl rounded-lg border border-border bg-light p-8 text-center shadow-base">
          <svg class="mx-auto mb-4 h-12 w-12 text-text-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p class="text-text-body">
            {{ $t('gallery.empty') }}
          </p>
        </div>

        <div v-else class="mx-auto max-w-5xl">
          <div
            v-if="galleryEvents.length > 1"
            class="mb-6 flex flex-wrap justify-center gap-2"
            role="tablist"
            :aria-label="$t('gallery.selectEvent')"
          >
            <button
              v-for="event in galleryEvents"
              :key="event.slug"
              type="button"
              role="tab"
              :aria-selected="selectedSlug === event.slug"
              class="rounded-full border-2 px-4 py-2 text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              :class="selectedSlug === event.slug
                ? 'border-primary bg-primary text-text-inverse'
                : 'border-border bg-light text-text-body hover:border-primary/40 hover:bg-highlight'"
              @click="selectedSlug = event.slug"
            >
              {{ event.title }}
            </button>
          </div>

          <GalleryCarousel
            v-if="selectedEvent"
            :key="selectedEvent.slug"
            :title="selectedEvent.title"
            :images="selectedEvent.images"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { galleryEvents } from '~/config/gallery'

const { t } = useI18n()

const selectedSlug = ref(galleryEvents[0]?.slug ?? '')

const selectedEvent = computed(() =>
  galleryEvents.find((event) => event.slug === selectedSlug.value)
)

const { siteUrl } = useContact()

useSeoMeta({
  title: computed(() => `${t('gallery.pageTitle')} - ${t('brand.pageTitle')}`),
  description: computed(() => t('gallery.subtitle')),
  ogTitle: computed(() => `${t('gallery.pageTitle')} - ${t('brand.pageTitle')}`),
  ogDescription: computed(() => t('gallery.subtitle')),
  ogImage: '/hero-image.jpg',
  ogType: 'website',
  ogLocale: 'pt_BR'
})

useHead({
  link: computed(() => siteUrl.value ? [{ rel: 'canonical', href: `${siteUrl.value}/gallery` }] : [])
})
</script>

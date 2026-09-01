<template>
  <div>
    <Header />
    <main>
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
const i18nHead = useLocaleHead({ seo: true })
useHead(i18nHead)

// Default OG meta (overridden per-page)
useSeoMeta({
  ogImage: '/hero-image.jpg',
  ogType: 'website',
  ogLocale: 'pt_BR',
  twitterCard: 'summary_large_image'
})
</script>

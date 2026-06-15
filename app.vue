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
</script>

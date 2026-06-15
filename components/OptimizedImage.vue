<template>
  <picture>
    <source :srcset="webpSrc" type="image/webp" />
    <img
      :src="fallbackSrc"
      :alt="alt"
      :width="width"
      :height="height"
      :loading="loading"
      :decoding="decoding"
      :fetchpriority="fetchpriority"
      :class="imgClass"
    />
  </picture>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    src: string
    alt: string
    width?: number | string
    height?: number | string
    loading?: 'lazy' | 'eager'
    decoding?: 'async' | 'auto' | 'sync'
    fetchpriority?: 'high' | 'low' | 'auto'
    imgClass?: string
  }>(),
  {
    loading: 'lazy',
    decoding: 'async',
    fetchpriority: 'auto'
  }
)

const webpSrc = computed(() =>
  props.src.replace(/\.(jpe?g|png)$/i, '.webp')
)

const fallbackSrc = computed(() => props.src)
</script>

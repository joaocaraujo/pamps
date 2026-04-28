<template>
  <div
    class="w-full overflow-hidden rounded-xl border border-border bg-highlight shadow-inner"
    :class="heightClass"
  >
    <iframe
      v-if="safeEmbedSrc"
      :src="safeEmbedSrc"
      class="h-full w-full border-0"
      :title="$t('contact.map.iframeTitle')"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      allowfullscreen
    />
    <div
      v-else
      class="flex h-full min-h-[240px] items-center justify-center px-4"
    >
      <p class="text-center text-sm text-text-body">
        {{ $t('contact.locationCard.mapComingSoon') }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    /** altura visual: padrão página contato; compacto para cards menores */
    size?: 'default' | 'tall' | 'compact'
  }>(),
  { size: 'default' }
)

const config = useRuntimeConfig()

const rawSrc = computed(() => String(config.public.googleMapsEmbedUrl ?? '').trim())

const safeEmbedSrc = computed(() => {
  const u = rawSrc.value
  if (!u.startsWith('https://www.google.com/maps/embed')) return ''
  return u
})

const heightClass = computed(() => {
  if (props.size === 'tall') return 'h-[min(520px,70vh)] min-h-[280px]'
  if (props.size === 'compact') return 'h-56 md:h-64 min-h-[14rem]'
  return 'h-72 md:h-96 min-h-[16rem]'
})
</script>

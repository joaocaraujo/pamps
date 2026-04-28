<template>
  <div
    :class="[
      'capy-wrap pointer-events-none select-none',
      placementWrapperClass,
      sizeClass,
      visibilityClass
    ]"
  >
    <div
      class="capy-float h-full w-full"
      :style="{
        animationDelay: delay,
        '--capy-rot': rotation
      }"
      role="img"
      :aria-label="$t('common.capybaraMascotAlt')"
    >
      <img
        src="/cap.png"
        alt=""
        class="h-full w-full object-contain"
        :class="{ 'scale-x-[-1]': flip }"
        loading="lazy"
        width="120"
        height="120"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    /** Canto em relação ao bloco `relative` pai */
    placement?: 'tr' | 'tl' | 'br' | 'bl'
    size?: 'sm' | 'md' | 'lg'
    delay?: string
    flip?: boolean
    hideBelow?: 'sm' | 'md' | 'lg' | 'never'
  }>(),
  {
    placement: 'br',
    size: 'md',
    delay: '0s',
    flip: false,
    hideBelow: 'md'
  }
)

const placementWrapperClass = computed(() => {
  /* z-[35]: acima de bordas/faixas do cartão; pointer-events-none não bloqueia cliques no conteúdo */
  const map = {
    tr: 'absolute right-2 top-4 z-[35] md:right-6 md:top-6',
    tl: 'absolute left-2 top-4 z-[35] md:left-6 md:top-6',
    br: 'absolute bottom-4 right-2 z-[35] md:bottom-6 md:right-6',
    bl: 'absolute bottom-4 left-2 z-[35] md:bottom-6 md:left-6'
  }
  return map[props.placement]
})

const rotation = computed(() => {
  const map = {
    tr: '12deg',
    tl: '-11deg',
    br: '10deg',
    bl: '-12deg'
  }
  return map[props.placement]
})

const sizeClass = computed(() => {
  const map = {
    sm: 'h-16 w-16 sm:h-[4.5rem] sm:w-[4.5rem]',
    md: 'h-[4.5rem] w-[4.5rem] sm:h-24 sm:w-24',
    lg: 'h-24 w-24 sm:h-28 sm:w-28'
  }
  return map[props.size]
})

const visibilityClass = computed(() => {
  if (props.hideBelow === 'never') return ''
  return props.hideBelow === 'sm'
    ? 'hidden sm:block'
    : props.hideBelow === 'lg'
      ? 'hidden lg:block'
      : 'hidden md:block'
})
</script>

<style scoped>
.capy-float {
  filter: drop-shadow(0 3px 6px rgba(0, 0, 0, 0.18));
  animation: capybaraFloat 4s infinite ease-in-out;
}

@keyframes capybaraFloat {
  0%,
  100% {
    transform: translateY(0) rotate(var(--capy-rot, 0deg));
  }
  50% {
    transform: translateY(-8px) rotate(var(--capy-rot, 0deg));
  }
}
</style>

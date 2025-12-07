<template>
  <div class="relative">
    <button
      type="button"
      @click="toggleDropdown"
      class="inline-flex items-center space-x-1.5 px-2.5 py-1.5 rounded-base border border-border bg-surface hover:bg-highlight hover:border-accent transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 text-sm font-medium text-text-body hover:text-text-main"
      :aria-label="`Current language: ${currentLocale.name}`"
      :aria-expanded="isOpen"
      aria-haspopup="true"
    >
      <span class="text-lg leading-none">{{ getFlag(currentLocale.code) }}</span>
      <span class="uppercase text-xs font-medium">{{ currentLocale.code.split('-')[0] }}</span>
      <svg
        class="w-3 h-3 transition-transform duration-300"
        :class="{ 'rotate-180': isOpen }"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>

    <Transition
      enter-active-class="transition-all duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="isOpen"
        @click.stop
        class="absolute right-0 mt-2 w-36 bg-light border border-border rounded-base shadow-lg z-dropdown overflow-hidden"
        role="menu"
        aria-orientation="vertical"
      >
        <button
          v-for="localeOption in availableLocales"
          :key="localeOption.code"
          type="button"
          @click="switchLocale(localeOption.code)"
          class="w-full text-left px-4 py-2 text-sm font-medium transition-colors hover:bg-highlight focus:outline-none focus:bg-highlight"
          :class="{
            'text-text-main bg-highlight font-semibold': localeOption.code === currentLocale.code,
            'text-text-body': localeOption.code !== currentLocale.code
          }"
          role="menuitem"
        >
          <span class="text-base leading-none mr-2">{{ getFlag(localeOption.code) }}</span>
          <span class="uppercase text-xs mr-2 font-medium">{{ localeOption.code.split('-')[0] }}</span>
          <span class="text-sm">{{ localeOption.name }}</span>
        </button>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const { locale, locales, setLocale } = useI18n()

const isOpen = ref(false)

const currentLocale = computed(() => {
  return locales.value.find(l => l.code === locale.value) || locales.value[0]
})

const availableLocales = computed(() => {
  return locales.value
})

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const closeDropdown = () => {
  isOpen.value = false
}

const switchLocale = async (code: string) => {
  await setLocale(code)
  closeDropdown()
}

const getFlag = (code: string) => {
  const flags: Record<string, string> = {
    'pt-BR': '🇧🇷',
    'en-US': '🇺🇸',
    'es-ES': '🇪🇸'
  }
  return flags[code] || '🌐'
}

const handleClickOutside = (event: MouseEvent) => {
  if (isOpen.value) {
    const target = event.target as HTMLElement
    if (!target.closest('.relative')) {
      closeDropdown()
    }
  }
}

onMounted(() => {
  if (globalThis.document !== undefined) {
    globalThis.document.addEventListener('click', handleClickOutside)
  }
})

onUnmounted(() => {
  if (globalThis.document !== undefined) {
    globalThis.document.removeEventListener('click', handleClickOutside)
  }
})
</script>

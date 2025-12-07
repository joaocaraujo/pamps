<template>
  <header
    ref="headerRef"
    :class="[
      'fixed top-0 left-0 right-0 z-fixed bg-light transition-all duration-300',
      isScrolled ? 'shadow-base py-3' : 'shadow-sm py-4'
    ]"
    role="banner"
  >
    <div class="container mx-auto px-4">
      <nav
        class="flex items-center justify-between"
        role="navigation"
        aria-label="Main navigation"
      >
        <NuxtLink
          to="/"
          class="flex items-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-base transition-opacity hover:opacity-80"
          aria-label="Pamps - Casa & Espaço de Eventos - Home page"
        >
          <div class="flex items-center space-x-2 md:space-x-3">
            <img
              src="/logo.png"
              alt="Pamps - Casa & Espaço de Eventos"
              class="h-10 w-auto md:h-12 object-contain"
            />
          </div>
        </NuxtLink>

        <div class="hidden lg:flex items-center space-x-8">
          <NuxtLink
            v-for="item in menuItems"
            :key="item.path"
            :to="item.path"
            class="nav-link relative font-body text-base font-medium text-text-body transition-colors hover:text-text-main focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-base px-2 py-1"
            :aria-label="`Navegar para ${item.label}`"
          >
            {{ item.label }}
          </NuxtLink>
        </div>

        <div class="hidden lg:flex items-center space-x-4">
          <ColorModeToggle />
          <a
            :href="whatsappLink"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-whatsapp inline-flex items-center space-x-2 px-6 py-3 bg-primary text-text-inverse font-body font-semibold text-base rounded-base shadow-base hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-300 hover:shadow-md"
            aria-label="Contact Pamps on WhatsApp"
          >
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
              />
            </svg>
            <span>Chamar no WhatsApp</span>
          </a>
        </div>

        <div class="flex items-center space-x-3 lg:hidden">
          <ColorModeToggle />
          <a
            :href="whatsappLink"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-whatsapp-mobile inline-flex items-center justify-center w-10 h-10 bg-primary text-text-inverse rounded-base shadow-base hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-300"
            aria-label="Contact Pamps on WhatsApp"
          >
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
              />
            </svg>
          </a>

          <button
            type="button"
            @click="toggleMobileMenu"
            class="hamburger-button inline-flex items-center justify-center w-10 h-10 text-text-main focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-base transition-colors hover:bg-surface"
            :aria-expanded="isMobileMenuOpen"
            aria-label="Open navigation menu"
            aria-controls="mobile-menu"
          >
            <span class="sr-only">Menu</span>
            <svg
              v-if="!isMobileMenuOpen"
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              v-else
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </nav>
    </div>

    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isMobileMenuOpen"
        class="fixed inset-0 bg-black/40 dark:bg-black/60 z-modal-backdrop top-16"
        @click="closeMobileMenu"
        aria-hidden="true"
      />
    </Transition>

    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <nav
        v-if="isMobileMenuOpen"
        id="mobile-menu"
        class="fixed top-16 left-0 right-0 bg-light border-b border-border shadow-lg z-modal"
        role="navigation"
        aria-label="Mobile navigation menu"
      >
        <div class="container mx-auto px-4 py-6">
          <div class="flex flex-col space-y-4">
            <NuxtLink
              v-for="item in menuItems"
              :key="item.path"
              :to="item.path"
              class="mobile-nav-link font-body text-lg font-medium text-text-body py-3 px-4 rounded-base transition-colors hover:bg-highlight hover:text-text-main focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              :aria-label="`Navigate to ${item.label}`"
              @click="closeMobileMenu"
            >
              {{ item.label }}
            </NuxtLink>

            <a
              :href="whatsappLink"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-whatsapp-mobile-full mt-4 inline-flex items-center justify-center space-x-2 px-6 py-4 bg-primary text-text-inverse font-body font-semibold text-base rounded-base shadow-base hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-300"
              aria-label="Contact Pamps on WhatsApp"
              @click="closeMobileMenu"
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                />
              </svg>
              <span>Chamar no WhatsApp</span>
            </a>
          </div>
        </div>
      </nav>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const menuItems = [
  { label: 'Eventos', path: '/eventos' },
  { label: 'Espaço', path: '/espaco' },
  { label: 'Buffet', path: '/buffet' },
  { label: 'Pacotes', path: '/pacotes' },
  { label: 'Contato', path: '/contato' }
]

const whatsappLink = 'https://wa.me/5531999999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20eventos%20da%20Pamps.'

const isMobileMenuOpen = ref(false)
const headerRef = ref<HTMLElement | null>(null)
const isScrolled = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  document.body.style.overflow = ''
}

const handleScroll = () => {
  if (globalThis.window !== undefined && globalThis.window.scrollY > 20) {
    isScrolled.value = true
  } else {
    isScrolled.value = false
  }
}

const handleEscape = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && isMobileMenuOpen.value) {
    closeMobileMenu()
  }
}

onMounted(() => {
  if (globalThis.window !== undefined) {
    globalThis.window.addEventListener('scroll', handleScroll)
    globalThis.window.addEventListener('keydown', handleEscape)
    handleScroll()
  }
})

onUnmounted(() => {
  if (globalThis.window !== undefined) {
    globalThis.window.removeEventListener('scroll', handleScroll)
    globalThis.window.removeEventListener('keydown', handleEscape)
  }
  if (globalThis.document !== undefined) {
    globalThis.document.body.style.overflow = ''
  }
})
</script>

<style scoped>
.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%) scaleX(0);
  width: calc(100% - 1rem);
  height: 2px;
  background-color: var(--color-accent);
  transition: transform 0.3s ease;
}

.nav-link:hover::after,
.nav-link:focus::after {
  transform: translateX(-50%) scaleX(1);
}

.nav-link.router-link-active {
  color: var(--color-text-main);
  font-weight: var(--font-weight-semibold);
}

.nav-link.router-link-active::after {
  transform: translateX(-50%) scaleX(1);
}

.mobile-nav-link.router-link-active {
  color: var(--color-text-main);
  background-color: var(--color-highlight);
  font-weight: var(--font-weight-semibold);
}
</style>


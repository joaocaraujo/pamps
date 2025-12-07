<template>
  <footer class="bg-surface border-t border-border">
    <div class="container mx-auto px-4 py-12 md:py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        <!-- Brand Section -->
        <div class="lg:col-span-1">
          <NuxtLink
            to="/"
            class="inline-block mb-4 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-base transition-opacity hover:opacity-80"
            :aria-label="$t('brand.fullName') + ' - ' + $t('navigation.home')"
          >
            <img
              src="/logo.png"
              :alt="$t('brand.alt')"
              class="h-12 w-auto object-contain"
            />
          </NuxtLink>
          <p class="text-text-body text-sm leading-relaxed mb-4">
            {{ $t('footer.description') }}
          </p>
          <div class="flex items-center space-x-4">
            <a
              :href="whatsappLink"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center w-10 h-10 rounded-base bg-primary text-text-inverse hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-300"
              :aria-label="$t('cta.whatsappLabel')"
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
          </div>
        </div>

        <!-- Navigation Links -->
        <div>
          <h3 class="font-heading font-semibold text-text-main text-base mb-4">
            {{ $t('footer.navigation.title') }}
          </h3>
          <nav class="flex flex-col space-y-2" role="navigation" :aria-label="$t('footer.navigation.title')">
            <NuxtLink
              v-for="item in menuItems"
              :key="item.path"
              :to="item.path"
              class="text-text-body text-sm hover:text-text-main transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-base px-1"
              :aria-label="$t('navigation.navigateTo', { label: item.label })"
            >
              {{ item.label }}
            </NuxtLink>
          </nav>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="font-heading font-semibold text-text-main text-base mb-4">
            {{ $t('footer.contact.title') }}
          </h3>
          <div class="flex flex-col space-y-3 text-sm text-text-body">
            <div class="flex items-start space-x-3">
              <svg
                class="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>{{ $t('footer.contact.address') }}</span>
            </div>
            <div class="flex items-start space-x-3">
              <svg
                class="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <a
                :href="`tel:${$t('footer.contact.phone')}`"
                class="hover:text-text-main transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-base"
              >
                {{ $t('footer.contact.phone') }}
              </a>
            </div>
            <div class="flex items-start space-x-3">
              <svg
                class="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <a
                :href="`mailto:${$t('footer.contact.email')}`"
                class="hover:text-text-main transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-base"
              >
                {{ $t('footer.contact.email') }}
              </a>
            </div>
          </div>
        </div>

        <!-- Quick Links / Info -->
        <div>
          <h3 class="font-heading font-semibold text-text-main text-base mb-4">
            {{ $t('footer.info.title') }}
          </h3>
          <div class="flex flex-col space-y-2 text-sm text-text-body">
            <NuxtLink
              to="/contact"
              class="hover:text-text-main transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-base"
            >
              {{ $t('footer.info.schedule') }}
            </NuxtLink>
            <span>{{ $t('footer.info.capacity') }}</span>
            <span>{{ $t('footer.info.hours') }}</span>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="mt-12 pt-8 border-t border-border">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p class="text-text-light text-sm text-center md:text-left">
            {{ $t('footer.copyright', { year: new Date().getFullYear() }) }}
          </p>
          <div class="flex items-center space-x-6 text-sm text-text-light">
            <NuxtLink
              to="/contact"
              class="hover:text-text-main transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-base"
            >
              {{ $t('footer.privacy') }}
            </NuxtLink>
            <NuxtLink
              to="/contact"
              class="hover:text-text-main transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-base"
            >
              {{ $t('footer.terms') }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const { t } = useI18n()

const whatsappLink = computed(() => {
  const message = encodeURIComponent(t('cta.whatsappMessage'))
  return `https://wa.me/5531999999999?text=${message}`
})

const menuItems = computed(() => [
  { label: t('navigation.events'), path: '/events' },
  { label: t('navigation.space'), path: '/space' },
  { label: t('navigation.buffet'), path: '/buffet' },
  { label: t('navigation.packages'), path: '/packages' },
  { label: t('navigation.contact'), path: '/contact' }
])
</script>


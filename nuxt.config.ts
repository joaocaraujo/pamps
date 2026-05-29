// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: process.env.NODE_ENV === 'development' },

  nitro: {
    preset: 'cloudflare-pages'
  },

  experimental: {
    defaults: {
      nuxtLink: {
        prefetchOn: { interaction: true }
      }
    }
  },

  routeRules: {
    '/nossas-atracoes': { redirect: { to: '/attractions', statusCode: 301 } },
    '/images/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
    '/logo.png': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
    '/hero-image.jpg': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
    '/cap.png': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } }
  },
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n'
  ],

  i18n: {
    locales: [
      {
        code: 'pt-BR',
        iso: 'pt-BR',
        name: 'Português',
        file: 'pt-BR.json'
      },
      {
        code: 'en-US',
        iso: 'en-US',
        name: 'English',
        file: 'en-US.json'
      },
      {
        code: 'es-ES',
        iso: 'es-ES',
        name: 'Español',
        file: 'es-ES.json'
      }
    ],
    lazy: true,
    // Relativo a <root>/i18n/ (restructureDir). Não use "i18n/locales" — duplica o caminho.
    langDir: 'locales',
    defaultLocale: 'pt-BR',
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      alwaysRedirect: false
    },
    compilation: {
      strictMessage: false
    }
  },

  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: '',
    dataValue: 'theme'
  },

  css: ['~/assets/css/main.css'],

  /**
   * Valores públicos expostos ao cliente via useRuntimeConfig().public.*
   * No Cloudflare Pages: cadastre as variáveis com prefixo NUXT_PUBLIC_ no painel
   * (Settings → Environment variables) e rode um novo deploy — são lidas no build.
   *
   * Nuxt substitui automaticamente cada chave camelCase pela env homônima:
   *   whatsappPhone      ← NUXT_PUBLIC_WHATSAPP_PHONE
   *   phoneDisplay       ← NUXT_PUBLIC_PHONE_DISPLAY
   *   contactEmail       ← NUXT_PUBLIC_CONTACT_EMAIL
   *   instagramUrl       ← NUXT_PUBLIC_INSTAGRAM_URL
   *   googleReviewUrl    ← NUXT_PUBLIC_GOOGLE_REVIEW_URL
   *   googleMapsEmbedUrl ← NUXT_PUBLIC_GOOGLE_MAPS_EMBED_URL
   *   siteUrl            ← NUXT_PUBLIC_SITE_URL
   */
  runtimeConfig: {
    public: {
      whatsappPhone: '',
      phoneDisplay: '',
      contactEmail: '',
      instagramUrl: '',
      googleReviewUrl: '',
      googleMapsEmbedUrl: '',
      siteUrl: ''
    }
  },

  app: {
    head: {
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&family=Inter:wght@400;500;600&display=swap',
          media: 'print',
          onload: "this.media='all'"
        }
      ]
    }
  }
})


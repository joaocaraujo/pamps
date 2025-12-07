// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  
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
        }
      ]
    }
  }
})


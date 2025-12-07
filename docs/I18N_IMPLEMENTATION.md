# i18n Implementation

## Overview

Internationalization (i18n) has been implemented using `@nuxtjs/i18n`, the official Nuxt module for multi-language support.

## Configuration

### Module Setup

The `@nuxtjs/i18n` module is configured in `nuxt.config.ts`:

```typescript
i18n: {
  locales: [
    { code: 'pt-BR', iso: 'pt-BR', name: 'Português', file: 'pt-BR.json' },
    { code: 'en-US', iso: 'en-US', name: 'English', file: 'en-US.json' },
    { code: 'es-ES', iso: 'es-ES', name: 'Español', file: 'es-ES.json' }
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
  }
}
```

## Translation Files

Translation files are located in `locales/` directory:

- `pt-BR.json` - Portuguese (Brazil) - Default
- `en-US.json` - English (United States)
- `es-ES.json` - Spanish (Spain)

### Translation Structure

Translations are organized by semantic categories:

```json
{
  "navigation": { ... },
  "cta": { ... },
  "brand": { ... },
  "colorMode": { ... }
}
```

## Components

### LanguageSwitch

A dropdown component (`components/LanguageSwitch.vue`) that:
- Shows current language code (PT, EN, ES)
- Opens dropdown with all available languages
- Switches language without page reload
- Persists preference via cookie
- Accessible with proper ARIA labels

### Header Integration

The language switch is integrated into the Header:
- Desktop: Between navigation and color mode toggle
- Mobile: Inside mobile menu, above WhatsApp button

## Usage

### In Templates

```vue
<template>
  <h1>{{ $t('navigation.events') }}</h1>
  <button :aria-label="$t('cta.whatsappLabel')">
    {{ $t('cta.whatsapp') }}
  </button>
</template>
```

### In Scripts

```vue
<script setup lang="ts">
const { t } = useI18n()

const menuItems = computed(() => [
  { label: t('navigation.events'), path: '/eventos' }
])
</script>
```

### With Parameters

```vue
<template>
  <span :aria-label="$t('navigation.navigateTo', { label: 'Eventos' })">
</template>
```

## Features

- ✅ No page reload on language change
- ✅ Preference persistence (cookie)
- ✅ Browser language detection
- ✅ SEO-friendly (HTML lang attribute updated)
- ✅ Scalable structure for future languages
- ✅ All existing texts translated

## Translated Content

All texts in the following components have been internationalized:

- Header navigation menu
- WhatsApp CTA buttons
- ARIA labels
- Color mode toggle labels
- Brand names and alt texts

## Adding New Languages

1. Add locale configuration to `nuxt.config.ts`
2. Create new translation file in `locales/`
3. Copy structure from existing file and translate
4. Language switch will automatically include it

## Notes

- Default language: Portuguese (pt-BR)
- Strategy: `no_prefix` (no URL prefix for default locale)
- Lazy loading: Translation files loaded on demand
- HTML lang attribute: Automatically updated by module


<template>
  <div class="min-h-screen bg-surface">
    <!-- Hero Section -->
    <section class="relative overflow-hidden border-b border-border bg-highlight pb-16 pt-20 md:pb-28 md:pt-32">
      <!-- Animated Background Elements -->
      <div class="hero-animation absolute inset-0 pointer-events-none overflow-hidden">
        <div class="floating-shape shape-1"></div>
        <div class="floating-shape shape-2"></div>
        <div class="floating-shape shape-3"></div>
      </div>
      
      <!-- Animated Color Balls (reduzido para menor custo de composição) -->
      <div class="balls-container absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div class="ball ball-1"></div>
        <div class="ball ball-2"></div>
        <div class="ball ball-3"></div>
        <div class="ball ball-4"></div>
        <div class="ball ball-5"></div>
        <div class="ball ball-6"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-6xl mx-auto">
          <div class="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div class="text-center lg:text-left order-1">
              <p class="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                {{ $t('home.hero.eyebrow') }}
              </p>
              <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-text-main mb-4 md:mb-5 leading-tight tracking-tight">
                {{ $t('home.hero.headline') }}
              </h1>
              <p class="text-base sm:text-lg md:text-xl text-text-body leading-relaxed max-w-xl mx-auto lg:mx-0 mb-5 md:mb-6">
                {{ $t('home.hero.subheadline') }}
              </p>
              <div class="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                <a
                  :href="googleReviewUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="trust-badge transition-colors hover:border-primary/40 hover:text-text-main"
                  :aria-label="$t('home.stats.rating.linkAria')"
                >
                  <span class="text-accent" aria-hidden="true">★</span>
                  {{ $t('home.hero.trustRating') }}
                </a>
                <span class="trust-badge">
                  <svg class="h-3.5 w-3.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  {{ $t('home.hero.trustCapacity') }}
                </span>
              </div>
            </div>
            <div class="order-2 relative z-10">
              <div class="hero-image-container hero-image-container--mobile mx-auto lg:mx-0 lg:ml-auto">
                <div class="aspect-[4/3] relative overflow-hidden">
                  <HeroGalleryCarousel />
                  <div class="absolute inset-0 hero-gradient-overlay opacity-10 z-20 pointer-events-none"></div>
                </div>
                <div class="capybara-mascot capybara-bottom-left">
                  <OptimizedImage
                    src="/cap.png"
                    alt="Mascote Pamps - Capivara"
                    width="120"
                    height="120"
                    loading="lazy"
                    img-class="w-full h-full object-contain"
                  />
                </div>
                <div class="capybara-mascot capybara-top-right">
                  <OptimizedImage
                    src="/cap.png"
                    alt="Mascote Pamps - Capivara"
                    width="120"
                    height="120"
                    loading="lazy"
                    img-class="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="mt-8 md:mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-3 items-stretch sm:items-center justify-center lg:justify-start">
            <WhatsappLink
              class="btn-primary-lg w-full sm:w-auto"
              :aria-label="$t('cta.whatsappLabel')"
            >
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                />
              </svg>
              <span>{{ $t('home.hero.ctaPrimary') }}</span>
            </WhatsappLink>
            <button
              type="button"
              @click="openCalculator"
              class="calculator-cta-button group relative w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 font-body font-semibold text-lg rounded-lg shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300 overflow-hidden"
              :aria-label="$t('calculator.cta.open')"
            >
              <div class="absolute inset-0 calculator-gradient-bg" aria-hidden="true" />
              <div class="absolute inset-0 calculator-shine" aria-hidden="true" />
              <div class="relative z-10 flex items-center space-x-2">
                <svg class="w-6 h-6 calculator-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <span class="text-white drop-shadow-md">{{ $t('calculator.cta.open') }}</span>
              </div>
            </button>
            <NuxtLink
              to="/gallery"
              class="btn-outline w-full sm:w-auto"
              :aria-label="$t('gallery.view')"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{{ $t('gallery.view') }}</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Showcase: atrações + prova social -->
    <section class="below-fold-section border-b border-border bg-surface pb-16 pt-20 md:pb-20 md:pt-24">
      <div class="container mx-auto px-4">
        <div class="showcase-panel mx-auto max-w-5xl">
          <div class="showcase-panel__accent" aria-hidden="true" />

          <div class="relative z-10 text-center">
            <div class="mb-5 flex flex-wrap items-center justify-center gap-2">
              <span class="showcase-tag">
                {{ $t('home.attractionsCta.tagline') }}
              </span>
              <span class="showcase-badge">
                {{ $t('home.attractionsCta.accessibility') }}
              </span>
            </div>

            <h2 class="showcase-title">
              {{ $t('home.attractionsCta.title') }}
            </h2>
            <p class="showcase-subtitle">
              {{ $t('home.attractionsCta.subtitle') }}
            </p>

            <div
              class="showcase-stats"
              role="list"
              :aria-label="$t('home.stats.eyebrow')"
            >
              <div class="showcase-stat" role="listitem">
                <span class="showcase-stat__value showcase-stat__value--primary">
                  {{ $t('home.stats.attractions.number') }}
                </span>
                <span class="showcase-stat__label">
                  {{ $t('home.stats.attractions.label') }}
                </span>
              </div>

              <a
                :href="googleReviewUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="showcase-stat showcase-stat--interactive group"
                role="listitem"
                :aria-label="$t('home.stats.rating.linkAria')"
              >
                <div class="showcase-stat__rating-row">
                  <span class="showcase-stat__value showcase-stat__value--accent">
                    {{ $t('home.stats.rating.number') }}
                  </span>
                  <div class="showcase-stat__stars" aria-hidden="true">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                </div>
                <span class="showcase-stat__label">
                  {{ $t('home.stats.rating.label') }}
                </span>
                <span class="showcase-stat__cta">
                  {{ $t('home.stats.rating.cta') }}
                </span>
              </a>

              <div class="showcase-stat" role="listitem">
                <span class="showcase-stat__value showcase-stat__value--secondary">
                  {{ $t('home.stats.capacity.number') }}
                </span>
                <span class="showcase-stat__label">
                  {{ $t('home.stats.capacity.label') }}
                </span>
              </div>
            </div>

            <div class="mt-8 md:mt-10">
              <NuxtLink
                to="/attractions"
                class="showcase-cta group"
              >
                {{ $t('home.attractionsCta.button') }}
                <svg class="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section
      id="sobre-pamps"
      class="below-fold-section border-b border-border bg-highlight py-16 md:py-20"
    >
      <div class="container mx-auto px-4">
        <div class="about-panel mx-auto max-w-5xl">
          <div class="grid items-start gap-10 lg:grid-cols-5 lg:gap-12">
            <div class="lg:col-span-3">
              <p class="section-eyebrow text-center lg:text-left">
                {{ $t('home.about.eyebrow') }}
              </p>
              <h2 class="mb-6 text-center font-heading text-3xl font-bold tracking-tight text-text-main md:text-4xl lg:text-left">
                {{ $t('home.about.title') }}
              </h2>
              <div class="space-y-4 text-base leading-relaxed text-text-body md:text-lg">
                <p>{{ $t('home.about.paragraph1') }}</p>
                <p>{{ $t('home.about.paragraph2') }}</p>
              </div>
            </div>
            <aside class="lg:col-span-2">
              <div class="about-location-card rounded-xl border border-border bg-highlight p-6">
                <h3 class="mb-3 font-heading text-base font-semibold text-text-main">
                  {{ $t('home.about.locationTitle') }}
                </h3>
                <address class="not-italic text-sm leading-relaxed text-text-body">
                  {{ $t('contact.addressText') }}
                </address>
                <NuxtLink
                  to="/#mapa-localizacao"
                  class="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-base"
                >
                  {{ $t('home.about.mapCta') }}
                  <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </NuxtLink>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>

    <!-- Event Types Section -->
    <section class="below-fold-section border-b border-border bg-surface py-16 md:py-24">
      <div class="container mx-auto px-4">
        <div class="section-header">
          <p class="section-eyebrow">{{ $t('navigation.events') }}</p>
          <h2 class="section-title">{{ $t('home.eventTypes.title') }}</h2>
          <p class="section-subtitle">{{ $t('home.eventTypes.subtitle') }}</p>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          <NuxtLink
            to="/events"
            class="group card-event-premium"
          >
            <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 class="text-xl font-heading font-semibold text-text-main mb-2">
              {{ $t('home.eventTypes.children.title') }}
            </h3>
            <p class="text-text-body text-sm leading-relaxed flex-1">
              {{ $t('home.eventTypes.children.description') }}
            </p>
            <span class="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-transform group-hover:translate-x-0.5">
              {{ $t('home.eventTypes.learnMore') }}
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </NuxtLink>

          <NuxtLink
            to="/events"
            class="group card-event-premium"
          >
            <div class="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/30 transition-colors">
              <svg class="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-heading font-semibold text-text-main mb-2">
              {{ $t('home.eventTypes.adult.title') }}
            </h3>
            <p class="text-text-body text-sm leading-relaxed flex-1">
              {{ $t('home.eventTypes.adult.description') }}
            </p>
            <span class="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-transform group-hover:translate-x-0.5">
              {{ $t('home.eventTypes.learnMore') }}
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </NuxtLink>

          <NuxtLink
            to="/events"
            class="group card-event-premium"
          >
            <div class="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
              <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-heading font-semibold text-text-main mb-2">
              {{ $t('home.eventTypes.corporate.title') }}
            </h3>
            <p class="text-text-body text-sm leading-relaxed flex-1">
              {{ $t('home.eventTypes.corporate.description') }}
            </p>
            <span class="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-transform group-hover:translate-x-0.5">
              {{ $t('home.eventTypes.learnMore') }}
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </NuxtLink>

          <NuxtLink
            to="/events"
            class="group card-event-premium"
          >
            <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg>
            </div>
            <h3 class="text-xl font-heading font-semibold text-text-main mb-2">
              {{ $t('home.eventTypes.themed.title') }}
            </h3>
            <p class="text-text-body text-sm leading-relaxed flex-1">
              {{ $t('home.eventTypes.themed.description') }}
            </p>
            <span class="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-transform group-hover:translate-x-0.5">
              {{ $t('home.eventTypes.learnMore') }}
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="below-fold-section border-b border-border bg-highlight py-16 md:py-24">
      <div class="container mx-auto px-4">
        <div class="section-header">
          <p class="section-eyebrow">{{ $t('home.features.eyebrow') }}</p>
          <h2 class="section-title">{{ $t('home.features.title') }}</h2>
          <p class="section-subtitle">{{ $t('home.features.subtitle') }}</p>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 max-w-5xl mx-auto">
          <div class="feature-card">
            <div class="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <p class="text-text-main font-medium leading-snug">{{ $t('home.features.climate') }}</p>
          </div>
          <div class="feature-card">
            <div class="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p class="text-text-main font-medium leading-snug">{{ $t('home.features.playground') }}</p>
          </div>
          <div class="feature-card">
            <div class="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
              </svg>
            </div>
            <p class="text-text-main font-medium leading-snug">{{ $t('home.features.parking') }}</p>
          </div>
          <div class="feature-card">
            <div class="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <p class="text-text-main font-medium leading-snug">{{ $t('home.features.reception') }}</p>
          </div>
          <div class="feature-card">
            <div class="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <p class="text-text-main font-medium leading-snug">{{ $t('attractions.main.ledSlide.title') }}</p>
          </div>
          <div class="feature-card">
            <div class="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <p class="text-text-main font-medium leading-snug">{{ $t('home.features.accessibility') }}</p>
          </div>
          <div class="feature-card">
            <div class="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <p class="text-text-main font-medium leading-snug">{{ $t('home.features.capacity') }}</p>
          </div>
          <div class="feature-card">
            <div class="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <p class="text-text-main font-medium leading-snug">{{ $t('home.features.licensed') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Secondary CTA Section -->
    <section class="below-fold-section py-16 md:py-24 bg-highlight">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto cta-panel text-center">
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-text-main mb-4 tracking-tight">
            {{ $t('home.ctaSecondary.title') }}
          </h2>
          <p class="text-lg text-text-body mb-3 leading-relaxed">
            {{ $t('home.ctaSecondary.subtitle') }}
          </p>
          <p class="text-sm font-medium text-primary mb-8">
            {{ $t('home.ctaSecondary.trust') }}
          </p>
          <div class="flex flex-col sm:flex-row gap-3 items-center justify-center">
            <WhatsappLink
              class="btn-primary-lg w-full sm:w-auto text-base"
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
              <span>{{ $t('cta.speakWhatsApp') }}</span>
            </WhatsappLink>
            <button
              type="button"
              @click="openCalculator"
              class="calculator-cta-button group relative w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 font-body font-semibold text-base rounded-lg shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300 overflow-hidden"
              :aria-label="$t('calculator.cta.open')"
            >
              <div class="absolute inset-0 calculator-gradient-bg" aria-hidden="true" />
              <div class="absolute inset-0 calculator-shine" aria-hidden="true" />
              <div class="relative z-10 flex items-center space-x-2">
                <svg class="w-5 h-5 calculator-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <span class="text-white drop-shadow-md">{{ $t('calculator.cta.open') }}</span>
              </div>
            </button>
            <NuxtLink
              to="/contact"
              class="btn-outline w-full sm:w-auto"
            >
              <span>{{ $t('cta.scheduleVisit') }}</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section
      id="mapa-localizacao"
      tabindex="-1"
      class="below-fold-section scroll-mt-24 py-12 outline-none focus:outline-none md:scroll-mt-28 md:py-16 bg-surface border-t border-border"
    >
      <div class="container mx-auto px-4">
        <div class="mx-auto max-w-5xl text-center mb-8 md:mb-10">
          <p class="section-eyebrow">{{ $t('navigation.contact') }}</p>
          <h2 class="section-title">{{ $t('home.map.title') }}</h2>
          <p class="section-subtitle">
            {{ $t('home.map.subtitle') }}
          </p>
        </div>
        <div class="mx-auto max-w-5xl">
          <GoogleMapEmbed size="tall" />
        </div>
      </div>
    </section>

    <!-- Calculator Modal (carregado só após o primeiro clique) -->
    <CalculatorModal
      v-if="calculatorMounted"
      v-model:is-open="isCalculatorOpen"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref, defineAsyncComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import { heroGallerySlides } from '~/config/gallery'

const CalculatorModal = defineAsyncComponent(
  () => import('~/components/CalculatorModal.vue')
)

const { t } = useI18n()
const { googleReviewUrl } = useContact()

const isCalculatorOpen = ref(false)
const calculatorMounted = ref(false)

const openCalculator = () => {
  calculatorMounted.value = true
  isCalculatorOpen.value = true
}

const firstHeroSlideWebp = computed(() => {
  const src = heroGallerySlides[0]?.src
  if (!src) return null
  return src.replace(/\.(jpe?g|png)$/i, '.webp')
})

useHead({
  title: computed(() => t('brand.pageTitle')),
  meta: [
    {
      name: 'description',
      content: computed(() => t('home.hero.subheadline'))
    }
  ],
  link: computed(() => {
    const href = firstHeroSlideWebp.value
    if (!href) return []
    return [
      {
        rel: 'preload',
        as: 'image',
        href,
        type: 'image/webp',
        fetchpriority: 'high'
      }
    ]
  })
})
</script>

<style scoped>
.hero-animation {
  z-index: 0;
  contain: layout paint;
}

.balls-container {
  z-index: 1;
  contain: layout paint;
}

.below-fold-section {
  content-visibility: auto;
  contain-intrinsic-size: auto 420px;
}

@media (max-width: 1023px) {
  .hero-animation,
  .balls-container {
    display: none;
  }
}

.floating-shape {
  position: absolute;
  border-radius: 50%;
  opacity: 0.15;
  filter: blur(40px);
  animation: float 20s infinite ease-in-out;
}

.shape-1 {
  width: 300px;
  height: 300px;
  background: var(--color-primary);
  top: 10%;
  right: 15%;
  animation-delay: 0s;
  animation-duration: 25s;
}

.shape-2 {
  width: 200px;
  height: 200px;
  background: var(--color-secondary);
  bottom: 20%;
  right: 10%;
  animation-delay: -5s;
  animation-duration: 30s;
}

.shape-3 {
  width: 250px;
  height: 250px;
  background: var(--color-accent);
  top: 50%;
  right: 5%;
  animation-delay: -10s;
  animation-duration: 28s;
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(30px, -30px) scale(1.1);
  }
  50% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  75% {
    transform: translate(20px, 30px) scale(1.05);
  }
}

.hero-gradient-overlay {
  background: linear-gradient(
    135deg,
    var(--color-primary) 0%,
    var(--color-secondary) 50%,
    var(--color-accent) 100%
  );
  background-size: 200% 200%;
  animation: gradientShift 8s ease infinite;
}

@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.hero-image-container {
  position: relative;
  padding: 12px;
  background: var(--color-light);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-hero);
  transform: rotate(-1deg);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hero-image-container:hover {
  transform: rotate(0deg) scale(1.02);
  box-shadow: var(--shadow-2xl);
}

.capybara-mascot {
  position: absolute;
  z-index: 20;
  pointer-events: none;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
  animation: capybaraFloat 4s infinite ease-in-out;
}

.capybara-bottom-left {
  bottom: -20px;
  left: -30px;
  width: 120px;
  height: 120px;
  animation-delay: 0s;
  --capybara-rotation: -15deg;
  transform: rotate(-15deg);
}

.capybara-top-right {
  top: -25px;
  right: -35px;
  width: 100px;
  height: 100px;
  animation-delay: -2s;
  --capybara-rotation: 20deg;
  transform: rotate(20deg);
}

.capybara-top-right img {
  transform: scaleX(-1) rotate(0deg);
}

@keyframes capybaraFloat {
  0%, 100% {
    transform: translateY(0) rotate(var(--capybara-rotation, 0deg));
  }
  50% {
    transform: translateY(-10px) rotate(var(--capybara-rotation, 0deg));
  }
}

@media (max-width: 1023px) {
  .hero-image-container--mobile {
    max-width: 22rem;
    margin-inline: auto;
    padding: 8px;
    transform: none;
  }

  .hero-image-container--mobile:hover {
    transform: none;
  }

  .hero-image-container--mobile .hero-image {
    border-width: 4px;
  }
}

@media (max-width: 1024px) {
  .capybara-mascot {
    display: none;
  }
}

.hero-image {
  border-radius: var(--radius-base);
  border: 8px solid var(--color-light);
  box-shadow: 
    0 4px 8px rgba(0, 0, 0, 0.15),
    inset 0 0 0 1px rgba(0, 0, 0, 0.05);
}

.ball {
  position: absolute;
  border-radius: 50%;
  opacity: 0.6;
  filter: blur(1px);
  animation: floatBall 20s infinite ease-in-out;
}

.ball-1 {
  width: 60px;
  height: 60px;
  top: 10%;
  left: 5%;
  background: var(--color-primary-light);
  animation-delay: 0s;
  animation-duration: 18s;
}

.ball-2 {
  width: 80px;
  height: 80px;
  top: 20%;
  left: 85%;
  background: var(--color-accent);
  animation-delay: -2s;
  animation-duration: 22s;
}

.ball-3 {
  width: 50px;
  height: 50px;
  top: 40%;
  left: 8%;
  background: var(--color-secondary-light);
  animation-delay: -4s;
  animation-duration: 16s;
}

.ball-4 {
  width: 70px;
  height: 70px;
  top: 55%;
  left: 88%;
  background: var(--color-primary);
  animation-delay: -1s;
  animation-duration: 24s;
}

.ball-5 {
  width: 65px;
  height: 65px;
  top: 70%;
  left: 12%;
  background: var(--color-secondary);
  animation-delay: -3s;
  animation-duration: 20s;
}

.ball-6 {
  width: 55px;
  height: 55px;
  top: 15%;
  left: 50%;
  background: var(--color-accent-light);
  animation-delay: -5s;
  animation-duration: 19s;
}

@keyframes floatBall {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(30px, -40px) scale(1.1);
  }
  50% {
    transform: translate(-25px, 30px) scale(0.9);
  }
  75% {
    transform: translate(35px, 25px) scale(1.05);
  }
}

/* Showcase: atrações + prova social */
.showcase-panel {
  @apply relative overflow-hidden rounded-3xl border border-border bg-light px-6 py-10 md:px-12 md:py-14;
  box-shadow: var(--shadow-elevated);
}

.showcase-panel__accent {
  @apply pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-40;
  background: radial-gradient(circle, color-mix(in srgb, var(--color-primary) 35%, transparent) 0%, transparent 70%);
}

.showcase-tag {
  @apply inline-flex items-center rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-primary;
  background-color: color-mix(in srgb, var(--color-primary) 15%, var(--color-light));
}

.showcase-badge {
  @apply inline-flex items-center gap-1 rounded-full border border-border px-3.5 py-1.5 text-xs font-medium text-text-body backdrop-blur-sm;
  background-color: color-mix(in srgb, var(--color-surface) 80%, transparent);
}

.showcase-title {
  @apply font-heading text-2xl font-bold tracking-tight text-text-main md:text-4xl;
}

.showcase-subtitle {
  @apply mx-auto mt-3 max-w-2xl text-base leading-relaxed text-text-body md:text-lg;
}

.showcase-stats {
  @apply mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border md:mt-10 md:grid-cols-3;
}

.showcase-stat {
  @apply flex flex-col items-center justify-center gap-1 bg-light px-5 py-6 text-center md:py-7;
}

.showcase-stat--interactive {
  @apply no-underline text-inherit transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary;
}

.showcase-stat--interactive:hover {
  background-color: color-mix(in srgb, var(--color-primary) 5%, var(--color-light));
}

.showcase-stat__value {
  @apply font-heading text-3xl font-bold leading-none md:text-4xl;
}

.showcase-stat__value--primary {
  color: var(--color-primary-dark);
}

.showcase-stat__value--accent {
  color: var(--color-accent-dark);
}

.showcase-stat__value--secondary {
  color: var(--color-secondary-dark);
}

.showcase-stat__rating-row {
  @apply flex items-center gap-2;
}

.showcase-stat__stars {
  @apply flex gap-0.5 text-base leading-none text-accent md:text-lg;
}

.showcase-stat__label {
  @apply text-sm font-semibold text-text-main;
}

.showcase-stat__cta {
  @apply mt-0.5 text-xs font-semibold text-primary underline-offset-2 transition-all group-hover:underline;
}

.showcase-cta {
  @apply inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-text-inverse shadow-lg transition-all duration-300 hover:bg-primary-hover hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2;
}

/* About */
.about-panel {
  @apply rounded-3xl border border-border bg-light px-6 py-10 shadow-sm md:px-10 md:py-12;
}

.about-location-card {
  box-shadow: var(--shadow-sm);
}

.calculator-cta-button {
  position: relative;
  transform: translateY(0);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.calculator-cta-button:hover {
  transform: translateY(-1px);
  box-shadow: 0 10px 25px rgba(247, 159, 31, 0.3), 0 0 15px rgba(247, 159, 31, 0.2);
}

.calculator-cta-button:active {
  transform: translateY(0) scale(0.98);
}

.calculator-gradient-bg {
  background: linear-gradient(
    135deg,
    #f59e0b 0%,
    #f97316 25%,
    #ea580c 50%,
    #f97316 75%,
    #f59e0b 100%
  );
  background-size: 200% 200%;
  animation: gradientFlow 3s ease infinite;
  border-radius: inherit;
}

@keyframes gradientFlow {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.calculator-shine {
  background: linear-gradient(
    110deg,
    transparent 40%,
    rgba(255, 255, 255, 0.3) 50%,
    transparent 60%
  );
  background-size: 200% 100%;
  animation: shine 3s infinite;
  pointer-events: none;
  border-radius: inherit;
}

@keyframes shine {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

.calculator-icon {
  color: white;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
  animation: calculatorIconFloat 3s ease-in-out infinite;
  flex-shrink: 0;
}

@keyframes calculatorIconFloat {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  25% {
    transform: translateY(-2px) rotate(-2deg);
  }
  50% {
    transform: translateY(0) rotate(0deg);
  }
  75% {
    transform: translateY(-2px) rotate(2deg);
  }
}

.calculator-cta-button:focus {
  outline: none;
  ring: 4px;
  ring-color: rgba(247, 159, 31, 0.5);
  ring-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  .floating-shape,
  .hero-gradient-overlay,
  .ball,
  .capybara-mascot,
  .calculator-gradient-bg,
  .calculator-shine,
  .calculator-icon {
    animation: none;
  }
  
  .hero-image-container {
    transform: none;
  }
  
  .hero-image-container:hover {
    transform: none;
  }
}
</style>

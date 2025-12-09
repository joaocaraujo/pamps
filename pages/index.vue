<template>
  <div class="min-h-screen bg-surface">
    <!-- Hero Section -->
    <section class="pt-24 pb-16 md:pt-32 md:pb-24 bg-highlight relative overflow-hidden">
      <!-- Animated Background Elements -->
      <div class="hero-animation absolute inset-0 pointer-events-none overflow-hidden">
        <div class="floating-shape shape-1"></div>
        <div class="floating-shape shape-2"></div>
        <div class="floating-shape shape-3"></div>
        <div class="floating-shape shape-4"></div>
        <div class="floating-shape shape-5"></div>
      </div>
      
      <!-- Animated Color Balls -->
      <div class="balls-container absolute inset-0 pointer-events-none overflow-hidden">
        <div class="ball ball-1"></div>
        <div class="ball ball-2"></div>
        <div class="ball ball-3"></div>
        <div class="ball ball-4"></div>
        <div class="ball ball-5"></div>
        <div class="ball ball-6"></div>
        <div class="ball ball-7"></div>
        <div class="ball ball-8"></div>
        <div class="ball ball-9"></div>
        <div class="ball ball-10"></div>
        <div class="ball ball-11"></div>
        <div class="ball ball-12"></div>
        <div class="ball ball-13"></div>
        <div class="ball ball-14"></div>
        <div class="ball ball-15"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div class="text-center lg:text-left">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-text-main mb-6 leading-tight">
              {{ $t('home.hero.headline') }}
            </h1>
            <p class="text-lg md:text-xl text-text-body mb-8 leading-relaxed">
              {{ $t('home.hero.subheadline') }}
            </p>
            <div class="flex flex-col sm:flex-row gap-4 items-center lg:items-start justify-center lg:justify-start">
              <a
                :href="whatsappLink"
                target="_blank"
                rel="noopener noreferrer"
                class="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 bg-primary text-text-inverse font-body font-semibold text-lg rounded-base shadow-lg hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-300 hover:shadow-xl"
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
              </a>
              <button
                @click="isCalculatorOpen = true"
                class="calculator-cta-button group relative w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 font-body font-semibold text-lg rounded-base shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300 overflow-hidden"
                :aria-label="$t('calculator.cta.open')"
              >
                <!-- Animated gradient background -->
                <div class="absolute inset-0 calculator-gradient-bg"></div>
                
                <!-- Shine effect -->
                <div class="absolute inset-0 calculator-shine"></div>
                
                <!-- Content -->
                <div class="relative z-10 flex items-center space-x-2">
                  <svg class="w-6 h-6 calculator-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <span class="text-white drop-shadow-md">{{ $t('calculator.cta.open') }}</span>
                </div>
              </button>
            </div>
          </div>
          <div class="hidden lg:block relative z-10">
            <div class="hero-image-container">
              <div class="aspect-[4/3] relative overflow-hidden">
                <img
                  src="/hero-image.jpg"
                  :alt="$t('home.hero.imageAlt')"
                  class="hero-image absolute inset-0 w-full h-full object-cover"
                />
                <!-- Animated gradient overlay -->
                <div class="absolute inset-0 hero-gradient-overlay opacity-20"></div>
              </div>
              <!-- Capybara Mascot - Part of the frame -->
              <div class="capybara-mascot capybara-bottom-left">
                <img
                  src="/cap.png"
                  alt="Mascote Pamps - Capivara"
                  class="w-full h-full object-contain"
                />
              </div>
              <div class="capybara-mascot capybara-top-right">
                <img
                  src="/cap.png"
                  alt="Mascote Pamps - Capivara"
                  class="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Statistics Section -->
    <section class="py-12 md:py-16 bg-light/50">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <!-- Festas Realizadas -->
            <div class="stat-card flex items-center space-x-4">
              <div class="stat-circle stat-circle-pink">
                <span class="stat-number">{{ $t('home.stats.parties.number') }}</span>
              </div>
              <div class="stat-text">
                <p class="text-text-main font-medium">{{ $t('home.stats.parties.label') }}</p>
              </div>
            </div>

            <!-- Avaliação -->
            <div class="stat-card flex items-center space-x-4">
              <div class="stat-circle stat-circle-yellow">
                <span class="stat-number">{{ $t('home.stats.rating.number') }}</span>
              </div>
              <div class="stat-text">
                <div class="flex items-center space-x-1 mb-1">
                  <span class="text-yellow-400 text-lg">⭐</span>
                  <span class="text-yellow-400 text-lg">⭐</span>
                  <span class="text-yellow-400 text-lg">⭐</span>
                  <span class="text-yellow-400 text-lg">⭐</span>
                  <span class="text-yellow-400 text-lg">⭐</span>
                </div>
                <p class="text-text-main font-medium text-sm">{{ $t('home.stats.rating.label') }}</p>
              </div>
            </div>

            <!-- Capacidade Máxima -->
            <div class="stat-card flex items-center space-x-4">
              <div class="stat-circle stat-circle-blue">
                <span class="stat-number">{{ $t('home.stats.capacity.number') }}</span>
              </div>
              <div class="stat-text">
                <p class="text-text-main font-medium">{{ $t('home.stats.capacity.label') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Event Types Section -->
    <section class="py-16 md:py-24 bg-highlight">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-heading font-bold text-text-main text-center mb-12">
          {{ $t('home.eventTypes.title') }}
        </h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <NuxtLink
            to="/events"
            class="group card-event bg-light rounded-lg p-6 shadow-base hover:shadow-lg transition-all duration-300 border border-border hover:border-accent"
          >
            <div class="w-12 h-12 bg-primary/10 rounded-base flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 class="text-xl font-heading font-semibold text-text-main mb-2">
              {{ $t('home.eventTypes.children.title') }}
            </h3>
            <p class="text-text-body text-sm">
              {{ $t('home.eventTypes.children.description') }}
            </p>
          </NuxtLink>

          <NuxtLink
            to="/events"
            class="group card-event bg-light rounded-lg p-6 shadow-base hover:shadow-lg transition-all duration-300 border border-border hover:border-accent"
          >
            <div class="w-12 h-12 bg-secondary/20 rounded-base flex items-center justify-center mb-4 group-hover:bg-secondary/30 transition-colors">
              <svg class="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-heading font-semibold text-text-main mb-2">
              {{ $t('home.eventTypes.adult.title') }}
            </h3>
            <p class="text-text-body text-sm">
              {{ $t('home.eventTypes.adult.description') }}
            </p>
          </NuxtLink>

          <NuxtLink
            to="/events"
            class="group card-event bg-light rounded-lg p-6 shadow-base hover:shadow-lg transition-all duration-300 border border-border hover:border-accent"
          >
            <div class="w-12 h-12 bg-accent/20 rounded-base flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
              <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-heading font-semibold text-text-main mb-2">
              {{ $t('home.eventTypes.corporate.title') }}
            </h3>
            <p class="text-text-body text-sm">
              {{ $t('home.eventTypes.corporate.description') }}
            </p>
          </NuxtLink>

          <NuxtLink
            to="/events"
            class="group card-event bg-light rounded-lg p-6 shadow-base hover:shadow-lg transition-all duration-300 border border-border hover:border-accent"
          >
            <div class="w-12 h-12 bg-primary/10 rounded-base flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg>
            </div>
            <h3 class="text-xl font-heading font-semibold text-text-main mb-2">
              {{ $t('home.eventTypes.themed.title') }}
            </h3>
            <p class="text-text-body text-sm">
              {{ $t('home.eventTypes.themed.description') }}
            </p>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-16 md:py-24">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-heading font-bold text-text-main text-center mb-12">
          {{ $t('home.features.title') }}
        </h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div class="flex items-start space-x-3">
            <div class="w-8 h-8 bg-primary/10 rounded-base flex items-center justify-center flex-shrink-0 mt-1">
              <svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <p class="text-text-body">{{ $t('home.features.climate') }}</p>
          </div>
          <div class="flex items-start space-x-3">
            <div class="w-8 h-8 bg-primary/10 rounded-base flex items-center justify-center flex-shrink-0 mt-1">
              <svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p class="text-text-body">{{ $t('home.features.playground') }}</p>
          </div>
          <div class="flex items-start space-x-3">
            <div class="w-8 h-8 bg-primary/10 rounded-base flex items-center justify-center flex-shrink-0 mt-1">
              <svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
              </svg>
            </div>
            <p class="text-text-body">{{ $t('home.features.parking') }}</p>
          </div>
          <div class="flex items-start space-x-3">
            <div class="w-8 h-8 bg-primary/10 rounded-base flex items-center justify-center flex-shrink-0 mt-1">
              <svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <p class="text-text-body">{{ $t('home.features.reception') }}</p>
          </div>
          <div class="flex items-start space-x-3">
            <div class="w-8 h-8 bg-primary/10 rounded-base flex items-center justify-center flex-shrink-0 mt-1">
              <svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <p class="text-text-body">{{ $t('home.features.beverage') }}</p>
          </div>
          <div class="flex items-start space-x-3">
            <div class="w-8 h-8 bg-primary/10 rounded-base flex items-center justify-center flex-shrink-0 mt-1">
              <svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <p class="text-text-body">{{ $t('home.features.accessibility') }}</p>
          </div>
          <div class="flex items-start space-x-3">
            <div class="w-8 h-8 bg-primary/10 rounded-base flex items-center justify-center flex-shrink-0 mt-1">
              <svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <p class="text-text-body">{{ $t('home.features.capacity') }}</p>
          </div>
          <div class="flex items-start space-x-3">
            <div class="w-8 h-8 bg-primary/10 rounded-base flex items-center justify-center flex-shrink-0 mt-1">
              <svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <p class="text-text-body">{{ $t('home.features.licensed') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Secondary CTA Section -->
    <section class="py-16 md:py-24 bg-highlight">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-text-main mb-4">
            {{ $t('home.ctaSecondary.title') }}
          </h2>
          <p class="text-lg text-text-body mb-8">
            {{ $t('home.ctaSecondary.subtitle') }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <div class="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a
              :href="whatsappLink"
              target="_blank"
              rel="noopener noreferrer"
              class="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 bg-primary text-text-inverse font-body font-semibold text-base rounded-base shadow-lg hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-300 hover:shadow-xl"
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
              <span>{{ $t('home.ctaSecondary.contact') }}</span>
            </a>
            <button
              @click="isCalculatorOpen = true"
              class="calculator-cta-button group relative w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 font-body font-semibold text-base rounded-base shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300 overflow-hidden"
              :aria-label="$t('calculator.cta.open')"
            >
              <!-- Animated gradient background -->
              <div class="absolute inset-0 calculator-gradient-bg"></div>
              
              <!-- Shine effect -->
              <div class="absolute inset-0 calculator-shine"></div>
              
              <!-- Content -->
              <div class="relative z-10 flex items-center space-x-2">
                <svg class="w-5 h-5 calculator-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <span class="text-white drop-shadow-md">{{ $t('calculator.cta.open') }}</span>
              </div>
            </button>
            <NuxtLink
              to="/contact"
              class="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 bg-surface text-text-main font-body font-semibold text-base rounded-base border-2 border-primary shadow-base hover:bg-primary hover:text-text-inverse focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-300"
            >
              <span>{{ $t('home.ctaSecondary.visit') }}</span>
            </NuxtLink>
          </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Calculator Modal -->
    <CalculatorModal v-model:is-open="isCalculatorOpen" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const { t } = useI18n()

const isCalculatorOpen = ref(false)

const whatsappLink = computed(() => {
  const message = encodeURIComponent(t('cta.whatsappMessage'))
  return `https://wa.me/5531999999999?text=${message}`
})

useHead({
  title: computed(() => t('brand.pageTitle')),
  meta: [
    {
      name: 'description',
      content: computed(() => t('home.hero.subheadline'))
    }
  ]
})
</script>

<style scoped>
.card-event {
  transition: transform 0.3s ease;
}

.card-event:hover {
  transform: translateY(-4px);
}

.hero-animation {
  z-index: 0;
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

.shape-4 {
  width: 180px;
  height: 180px;
  background: var(--color-primary-light);
  top: 30%;
  right: 25%;
  animation-delay: -15s;
  animation-duration: 22s;
}

.shape-5 {
  width: 220px;
  height: 220px;
  background: var(--color-secondary-light);
  bottom: 10%;
  right: 20%;
  animation-delay: -8s;
  animation-duration: 35s;
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
  border-radius: var(--radius-lg);
  box-shadow: 
    0 8px 16px rgba(0, 0, 0, 0.1),
    0 2px 4px rgba(0, 0, 0, 0.06),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  transform: rotate(-1deg);
  transition: transform 0.3s ease;
}

.hero-image-container:hover {
  transform: rotate(0deg) scale(1.02);
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

.balls-container {
  z-index: 1;
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

.ball-7 {
  width: 75px;
  height: 75px;
  top: 30%;
  left: 70%;
  background: var(--color-primary);
  animation-delay: -2.5s;
  animation-duration: 21s;
}

.ball-8 {
  width: 60px;
  height: 60px;
  top: 50%;
  left: 25%;
  background: var(--color-primary-light);
  animation-delay: -4.5s;
  animation-duration: 17s;
}

.ball-9 {
  width: 70px;
  height: 70px;
  top: 65%;
  left: 55%;
  background: var(--color-secondary-light);
  animation-delay: -1.5s;
  animation-duration: 23s;
}

.ball-10 {
  width: 50px;
  height: 50px;
  top: 8%;
  left: 35%;
  background: var(--color-accent);
  animation-delay: -3.5s;
  animation-duration: 18s;
}

.ball-11 {
  width: 65px;
  height: 65px;
  top: 45%;
  left: 15%;
  background: var(--color-secondary);
  animation-delay: -5.5s;
  animation-duration: 20s;
}

.ball-12 {
  width: 55px;
  height: 55px;
  top: 75%;
  left: 75%;
  background: var(--color-primary);
  animation-delay: -2s;
  animation-duration: 22s;
}

.ball-13 {
  width: 60px;
  height: 60px;
  top: 25%;
  left: 60%;
  background: var(--color-accent-light);
  animation-delay: -4s;
  animation-duration: 19s;
}

.ball-14 {
  width: 70px;
  height: 70px;
  top: 60%;
  left: 45%;
  background: var(--color-secondary);
  animation-delay: -1s;
  animation-duration: 21s;
}

.ball-15 {
  width: 50px;
  height: 50px;
  top: 35%;
  left: 80%;
  background: var(--color-primary-light);
  animation-delay: -3s;
  animation-duration: 17s;
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

/* Statistics Section */
.stat-card {
  @apply p-4 rounded-lg;
}

.stat-circle {
  @apply w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0 shadow-md;
}

.stat-circle-pink {
  background: linear-gradient(135deg, var(--color-primary-light), var(--color-primary));
}

.stat-circle-yellow {
  background: linear-gradient(135deg, var(--color-accent), var(--color-accent-light));
}

.stat-circle-blue {
  background: linear-gradient(135deg, var(--color-secondary), var(--color-secondary-light));
}

.stat-number {
  @apply text-2xl font-heading font-bold text-text-main;
}

.stat-text {
  @apply flex-1;
}

@media (prefers-reduced-motion: reduce) {
  .floating-shape,
  .hero-gradient-overlay,
  .ball {
    animation: none;
  }
  
  .hero-image-container {
    transform: none;
  }
  
  .hero-image-container:hover {
    transform: none;
  }
}

/* Calculator CTA Button Styles */
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
</style>

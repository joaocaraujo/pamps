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
      
      <!-- Animated Stars -->
      <div class="stars-container absolute inset-0 pointer-events-none overflow-hidden">
        <div class="star star-1">⭐</div>
        <div class="star star-2">⭐</div>
        <div class="star star-3">⭐</div>
        <div class="star star-4">⭐</div>
        <div class="star star-5">⭐</div>
        <div class="star star-6">⭐</div>
        <div class="star star-7">⭐</div>
        <div class="star star-8">⭐</div>
        <div class="star star-9">⭐</div>
        <div class="star star-10">⭐</div>
        <div class="star star-11">⭐</div>
        <div class="star star-12">⭐</div>
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
            <a
              :href="whatsappLink"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center space-x-2 px-8 py-4 bg-primary text-text-inverse font-body font-semibold text-lg rounded-base shadow-lg hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-300 hover:shadow-xl"
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

    <!-- About Section -->
    <section class="py-16 md:py-24">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-text-main mb-8">
            {{ $t('home.about.title') }}
          </h2>
          <div class="space-y-6 text-lg text-text-body leading-relaxed">
            <p>{{ $t('home.about.paragraph1') }}</p>
            <p>{{ $t('home.about.paragraph2') }}</p>
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
              <span class="text-2xl">🎉</span>
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
              <span class="text-2xl">🎂</span>
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
              <span class="text-2xl">🤝</span>
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
              <span class="text-2xl">✨</span>
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
              <span class="text-lg">❄️</span>
            </div>
            <p class="text-text-body">{{ $t('home.features.climate') }}</p>
          </div>
          <div class="flex items-start space-x-3">
            <div class="w-8 h-8 bg-primary/10 rounded-base flex items-center justify-center flex-shrink-0 mt-1">
              <span class="text-lg">🎠</span>
            </div>
            <p class="text-text-body">{{ $t('home.features.playground') }}</p>
          </div>
          <div class="flex items-start space-x-3">
            <div class="w-8 h-8 bg-primary/10 rounded-base flex items-center justify-center flex-shrink-0 mt-1">
              <span class="text-lg">🅿️</span>
            </div>
            <p class="text-text-body">{{ $t('home.features.parking') }}</p>
          </div>
          <div class="flex items-start space-x-3">
            <div class="w-8 h-8 bg-primary/10 rounded-base flex items-center justify-center flex-shrink-0 mt-1">
              <span class="text-lg">👋</span>
            </div>
            <p class="text-text-body">{{ $t('home.features.reception') }}</p>
          </div>
          <div class="flex items-start space-x-3">
            <div class="w-8 h-8 bg-primary/10 rounded-base flex items-center justify-center flex-shrink-0 mt-1">
              <span class="text-lg">🥤</span>
            </div>
            <p class="text-text-body">{{ $t('home.features.beverage') }}</p>
          </div>
          <div class="flex items-start space-x-3">
            <div class="w-8 h-8 bg-primary/10 rounded-base flex items-center justify-center flex-shrink-0 mt-1">
              <span class="text-lg">♿</span>
            </div>
            <p class="text-text-body">{{ $t('home.features.accessibility') }}</p>
          </div>
          <div class="flex items-start space-x-3">
            <div class="w-8 h-8 bg-primary/10 rounded-base flex items-center justify-center flex-shrink-0 mt-1">
              <span class="text-lg">👥</span>
            </div>
            <p class="text-text-body">{{ $t('home.features.capacity') }}</p>
          </div>
          <div class="flex items-start space-x-3">
            <div class="w-8 h-8 bg-primary/10 rounded-base flex items-center justify-center flex-shrink-0 mt-1">
              <span class="text-lg">✅</span>
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
            <a
              :href="whatsappLink"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-primary text-text-inverse font-body font-semibold text-base rounded-base shadow-lg hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-300 hover:shadow-xl"
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
            <NuxtLink
              to="/contact"
              class="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-surface text-text-main font-body font-semibold text-base rounded-base border-2 border-primary shadow-base hover:bg-primary hover:text-text-inverse focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-300"
            >
              <span>{{ $t('home.ctaSecondary.visit') }}</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const { t } = useI18n()

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

.stars-container {
  z-index: 1;
}

.star {
  position: absolute;
  font-size: 1.5rem;
  animation: twinkle 3s infinite ease-in-out, floatStar 8s infinite ease-in-out;
  filter: drop-shadow(0 0 4px currentColor);
}

.star-1 {
  top: 15%;
  left: 10%;
  font-size: 1.2rem;
  animation-delay: 0s;
  color: var(--color-primary);
}

.star-2 {
  top: 25%;
  left: 85%;
  font-size: 1.8rem;
  animation-delay: -0.5s;
  color: var(--color-accent);
}

.star-3 {
  top: 45%;
  left: 5%;
  font-size: 1.4rem;
  animation-delay: -1s;
  color: var(--color-secondary);
}

.star-4 {
  top: 60%;
  left: 90%;
  font-size: 1.6rem;
  animation-delay: -1.5s;
  color: var(--color-primary);
}

.star-5 {
  top: 75%;
  left: 15%;
  font-size: 1.3rem;
  animation-delay: -2s;
  color: var(--color-accent);
}

.star-6 {
  top: 20%;
  left: 50%;
  font-size: 1.5rem;
  animation-delay: -2.5s;
  color: var(--color-secondary);
}

.star-7 {
  top: 55%;
  left: 70%;
  font-size: 1.7rem;
  animation-delay: -0.8s;
  color: var(--color-primary);
}

.star-8 {
  top: 35%;
  left: 25%;
  font-size: 1.1rem;
  animation-delay: -1.2s;
  color: var(--color-accent);
}

.star-9 {
  top: 70%;
  left: 60%;
  font-size: 1.4rem;
  animation-delay: -1.8s;
  color: var(--color-secondary);
}

.star-10 {
  top: 10%;
  left: 40%;
  font-size: 1.6rem;
  animation-delay: -0.3s;
  color: var(--color-primary);
}

.star-11 {
  top: 50%;
  left: 30%;
  font-size: 1.3rem;
  animation-delay: -2.2s;
  color: var(--color-accent);
}

.star-12 {
  top: 80%;
  left: 80%;
  font-size: 1.5rem;
  animation-delay: -1.5s;
  color: var(--color-secondary);
}

@keyframes twinkle {
  0%, 100% {
    opacity: 0.3;
    transform: scale(0.8);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}

@keyframes floatStar {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  25% {
    transform: translate(15px, -15px) rotate(90deg);
  }
  50% {
    transform: translate(-10px, 10px) rotate(180deg);
  }
  75% {
    transform: translate(10px, 15px) rotate(270deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .floating-shape,
  .hero-gradient-overlay,
  .star {
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

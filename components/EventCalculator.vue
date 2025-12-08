<template>
  <div class="calculator-container">
    <!-- Progress Steps -->
    <div class="steps-indicator mb-4">
      <div class="flex items-center justify-center space-x-1">
        <div class="step-item" :class="{ active: currentStep === 1, completed: currentStep > 1 }">
          <div class="step-number">1</div>
          <span class="step-label">{{ $t('calculator.steps.eventInfo') }}</span>
        </div>
        <div class="step-divider"></div>
        <div class="step-item" :class="{ active: currentStep === 2, completed: currentStep > 2 }">
          <div class="step-number">2</div>
          <span class="step-label">{{ $t('calculator.steps.food') }}</span>
        </div>
        <div class="step-divider"></div>
        <div class="step-item" :class="{ active: currentStep === 3, completed: currentStep > 3 }">
          <div class="step-number">3</div>
          <span class="step-label">{{ $t('calculator.steps.optional') }}</span>
        </div>
        <div class="step-divider"></div>
        <div class="step-item" :class="{ active: currentStep === 4, completed: currentStep > 4 }">
          <div class="step-number">4</div>
          <span class="step-label">{{ $t('calculator.steps.result') }}</span>
        </div>
      </div>
    </div>

    <form @submit.prevent="handleSubmit" class="flex-1 flex flex-col space-y-3 min-h-0">
      <!-- Step 1: Event Information (Pessoas, Dia, Pacote) -->
      <div v-show="currentStep === 1" class="step-content">
        <div class="calculator-section">
          <div class="section-header">
            <div class="section-icon">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 class="section-title">{{ $t('calculator.requiredFields') }}</h3>
          </div>

          <div class="grid grid-cols-1 gap-3">
            <!-- Number of People -->
            <div class="input-group">
              <label for="people" class="input-label">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {{ $t('calculator.people.label') }} <span class="text-primary">*</span>
              </label>
              <div class="slider-container">
                <div class="slider-value-display">
                  <span class="slider-value-number">{{ form.people || 50 }}</span>
                  <span class="slider-value-label">{{ $t('calculator.people.unit') }}</span>
                </div>
                <input
                  id="people"
                  ref="sliderRef"
                  v-model.number="form.people"
                  type="range"
                  min="1"
                  max="150"
                  step="1"
                  required
                  class="people-slider"
                />
                <div class="slider-labels">
                  <span class="text-xs text-text-light">1</span>
                  <span class="text-xs text-text-light">150</span>
                </div>
              </div>
            </div>

            <!-- Day of Event -->
            <div class="input-group">
              <label for="day" class="input-label">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {{ $t('calculator.day.label') }} <span class="text-primary">*</span>
              </label>
              <select
                id="day"
                v-model="form.day"
                required
                class="modern-select"
              >
                <option value="">{{ $t('calculator.day.select') }}</option>
                <option value="weekday">{{ $t('calculator.day.weekday') }}</option>
                <option value="weekend">{{ $t('calculator.day.weekend') }}</option>
                <option value="saturday">{{ $t('calculator.day.saturday') }}</option>
              </select>
            </div>

            <!-- Package Type -->
            <div class="input-group">
              <label for="package" class="input-label">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                {{ $t('calculator.package.label') }} <span class="text-primary">*</span>
              </label>
              <select
                id="package"
                v-model="form.package"
                required
                class="modern-select"
              >
                <option value="">{{ $t('calculator.package.select') }}</option>
                <option value="simple">{{ $t('calculator.package.simple') }}</option>
                <option value="medium">{{ $t('calculator.package.medium') }}</option>
                <option value="top">{{ $t('calculator.package.top') }}</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Step 1 Navigation -->
        <div class="step-navigation">
          <button
            type="button"
            @click="nextStep"
            class="step-btn step-btn-primary"
            :disabled="!canProceedToStep2"
          >
            {{ $t('calculator.steps.next') }}
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Step 2: Food Consumption (Salgados e Doces) -->
      <div v-show="currentStep === 2" class="step-content">
        <div class="calculator-section">
          <div class="section-header">
            <div class="section-icon">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m6 4a2 2 0 100-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m-2 4a2 2 0 110-4m-2 4v2m0-6V4" />
              </svg>
            </div>
            <h3 class="section-title">{{ $t('calculator.food.label') }}</h3>
          </div>

          <div class="food-consumption-grid">
            <!-- Salgados Card -->
            <div class="food-card food-card-salgados">
              <div class="food-card-header">
                <div class="food-card-icon">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m6 4a2 2 0 100-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m-2 4a2 2 0 110-4m-2 4v2m0-6V4" />
                  </svg>
                </div>
                <div class="food-card-title">
                  <h4 class="food-card-label">{{ $t('calculator.salgados.label') }}</h4>
                  <p class="food-card-subtitle">{{ $t('calculator.salgados.tip') }}</p>
                </div>
              </div>
              <div class="food-card-controls">
                <button
                  type="button"
                  @click="decrement('salgados')"
                  class="food-btn food-btn-decrement"
                  :disabled="form.salgados <= 0"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M20 12H4" />
                  </svg>
                </button>
                <div class="food-value-display">
                  <span class="food-value-number">{{ form.salgados }}</span>
                  <span class="food-value-unit">{{ $t('calculator.food.unit') }}</span>
                </div>
                <button
                  type="button"
                  @click="increment('salgados')"
                  class="food-btn food-btn-increment"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
            </div>

            <!-- Doces Card -->
            <div class="food-card food-card-doces">
              <div class="food-card-header">
                <div class="food-card-icon">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <div class="food-card-title">
                  <h4 class="food-card-label">{{ $t('calculator.doces.label') }}</h4>
                  <p class="food-card-subtitle">{{ $t('calculator.doces.tip') }}</p>
                </div>
              </div>
              <div class="food-card-controls">
                <button
                  type="button"
                  @click="decrement('doces')"
                  class="food-btn food-btn-decrement"
                  :disabled="form.doces <= 0"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M20 12H4" />
                  </svg>
                </button>
                <div class="food-value-display">
                  <span class="food-value-number">{{ form.doces }}</span>
                  <span class="food-value-unit">{{ $t('calculator.food.unit') }}</span>
                </div>
                <button
                  type="button"
                  @click="increment('doces')"
                  class="food-btn food-btn-increment"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Step 2 Navigation -->
        <div class="step-navigation">
          <button
            type="button"
            @click="prevStep"
            class="step-btn step-btn-secondary"
          >
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            {{ $t('calculator.steps.back') }}
          </button>
          <button
            type="button"
            @click="nextStep"
            class="step-btn step-btn-primary"
          >
            {{ $t('calculator.steps.next') }}
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Step 3: Optional Services -->
      <div v-show="currentStep === 3" class="step-content">
        <div class="calculator-section">
          <div class="section-header">
            <div class="section-icon optional">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m6 4a2 2 0 100-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m-2 4a2 2 0 110-4m-2 4v2m0-6V4" />
              </svg>
            </div>
            <h3 class="section-title">{{ $t('calculator.optionalFields') }}</h3>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <label
              v-for="(option, key) in optionalOptions"
              :key="key"
              class="optional-card"
              :class="{ 'optional-card-active': form.optional[key as keyof typeof form.optional] }"
            >
              <input
                v-model="form.optional[key as keyof typeof form.optional]"
                type="checkbox"
                class="optional-checkbox"
              />
              <div class="optional-content">
                <div class="optional-icon">
                  <component :is="option.icon" class="w-5 h-5" />
                </div>
                <span class="optional-label">{{ option.label }}</span>
              </div>
            </label>
          </div>
        </div>

        <!-- Step 3 Navigation -->
        <div class="step-navigation">
          <button
            type="button"
            @click="prevStep"
            class="step-btn step-btn-secondary"
          >
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            {{ $t('calculator.steps.back') }}
          </button>
          <button
            type="button"
            @click="nextStep"
            class="step-btn step-btn-primary"
          >
            {{ $t('calculator.steps.next') }}
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Step 4: Results -->
      <div v-show="currentStep === 4" class="step-content">
        <div v-if="result" class="calculator-section result-section">
          <div class="result-header">
            <div class="result-icon">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p class="result-label">{{ $t('calculator.result.estimated') }}</p>
              <p class="result-value">
                {{ formatCurrency(result.total) }}
              </p>
            </div>
          </div>

          <div class="result-grid">
            <div class="result-item">
              <p class="result-item-label">{{ $t('calculator.result.perPerson') }}</p>
              <p class="result-item-value">{{ formatCurrency(result.perPerson) }}</p>
            </div>
            <div class="result-item">
              <p class="result-item-label">{{ $t('calculator.result.base') }}</p>
              <p class="result-item-value">{{ formatCurrency(result.base) }}</p>
            </div>
            <div v-if="result.optionalTotal > 0" class="result-item result-item-optional">
              <p class="result-item-label">{{ $t('calculator.result.optional') }}</p>
              <p class="result-item-value">{{ formatCurrency(result.optionalTotal) }}</p>
            </div>
          </div>

          <p class="result-disclaimer">
            {{ $t('calculator.result.disclaimer') }}
          </p>

          <!-- WhatsApp CTA -->
          <a
            :href="whatsappLink"
            target="_blank"
            rel="noopener noreferrer"
            class="whatsapp-cta"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span>{{ $t('calculator.cta.whatsapp') }}</span>
          </a>
        </div>

        <!-- Step 4 Navigation -->
        <div class="step-navigation">
          <button
            type="button"
            @click="prevStep"
            class="step-btn step-btn-secondary"
          >
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            {{ $t('calculator.steps.back') }}
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, h, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { calculatorConfig } from '~/config/calculator'

interface Emits {
  (e: 'close'): void
}

defineEmits<Emits>()

const { t } = useI18n()

const sliderRef = ref<HTMLInputElement | null>(null)
const currentStep = ref(1)

const form = ref({
  people: 50,
  day: '',
  package: '',
  salgados: 5,
  doces: 3,
  optional: {
    chopp: false,
    nonAlcoholic: false,
    dj: false,
    lighting: false,
    recreator: false,
    photographer: false
  }
})

const result = ref<{
  total: number
  base: number
  optionalTotal: number
  perPerson: number
} | null>(null)

const canProceedToStep2 = computed(() => {
  return form.value.people > 0 && form.value.day && form.value.package
})

const nextStep = () => {
  if (currentStep.value === 1 && canProceedToStep2.value) {
    currentStep.value = 2
  } else if (currentStep.value === 2) {
    currentStep.value = 3
  } else if (currentStep.value === 3) {
    calculate()
    currentStep.value = 4
  }
}

const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--
  }
}

const handleSubmit = () => {
  // Form submission is handled by step navigation
}

const optionalOptions = computed(() => ({
  chopp: {
    label: t('calculator.optional.chopp'),
    icon: () => h('svg', { class: 'w-5 h-5', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' })
    ])
  },
  nonAlcoholic: {
    label: t('calculator.optional.nonAlcoholic'),
    icon: () => h('svg', { class: 'w-5 h-5', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' })
    ])
  },
  dj: {
    label: t('calculator.optional.dj'),
    icon: () => h('svg', { class: 'w-5 h-5', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3' })
    ])
  },
  lighting: {
    label: t('calculator.optional.lighting'),
    icon: () => h('svg', { class: 'w-5 h-5', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' })
    ])
  },
  recreator: {
    label: t('calculator.optional.recreator'),
    icon: () => h('svg', { class: 'w-5 h-5', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' })
    ])
  },
  photographer: {
    label: t('calculator.optional.photographer'),
    icon: () => h('svg', { class: 'w-5 h-5', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z' }),
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M15 13a3 3 0 11-6 0 3 3 0 016 0z' })
    ])
  }
}))

const increment = (field: 'salgados' | 'doces') => {
  form.value[field]++
}

const decrement = (field: 'salgados' | 'doces') => {
  if (form.value[field] > 0) {
    form.value[field]--
  }
}

const calculate = () => {
  if (!form.value.people || !form.value.day || !form.value.package) {
    return
  }

  const config = calculatorConfig
  const people = form.value.people

  // Base package value
  let basePackage = 0
  switch (form.value.package) {
    case 'simple':
      basePackage = config.baseValues.simplePackage
      break
    case 'medium':
      basePackage = config.baseValues.mediumPackage
      break
    case 'top':
      basePackage = config.baseValues.topPackage
      break
  }

  // Apply package multiplier
  const packageMultiplier = config.packageMultipliers[form.value.package as keyof typeof config.packageMultipliers]
  basePackage *= packageMultiplier

  // Apply day multiplier
  let dayMultiplier = 1.0
  switch (form.value.day) {
    case 'weekday':
      dayMultiplier = config.dayMultipliers.weekday
      break
    case 'weekend':
      dayMultiplier = config.dayMultipliers.weekend
      break
    case 'saturday':
      dayMultiplier = config.dayMultipliers.saturday
      break
  }
  basePackage *= dayMultiplier

  // Food consumption
  const salgadosTotal = people * form.value.salgados * config.baseValues.unitSalgado
  const docesTotal = people * form.value.doces * config.baseValues.unitDoce
  const foodTotal = salgadosTotal + docesTotal

  // Volume discount
  let foodDiscount = 0
  if (people >= config.volumeDiscount.threshold) {
    foodDiscount = foodTotal * config.volumeDiscount.discountPercent
  }

  const foodFinal = foodTotal - foodDiscount

  // Base total
  const base = basePackage + foodFinal

  // Optional services
  let optionalTotal = 0
  if (form.value.optional.chopp) {
    optionalTotal += people * config.optionalServices.chopp.perPerson
  }
  if (form.value.optional.nonAlcoholic) {
    optionalTotal += people * config.optionalServices.nonAlcoholic.perPerson
  }
  if (form.value.optional.dj) {
    optionalTotal += config.optionalServices.dj.fixed
  }
  if (form.value.optional.lighting) {
    optionalTotal += config.optionalServices.lighting.fixed
  }
  if (form.value.optional.recreator) {
    optionalTotal += config.optionalServices.recreator.perHour * config.optionalServices.recreator.defaultHours
  }
  if (form.value.optional.photographer) {
    optionalTotal += config.optionalServices.photographer.fixed
  }

  const total = base + optionalTotal
  const perPerson = total / people

  result.value = {
    total: Math.round(total),
    base: Math.round(base),
    optionalTotal: Math.round(optionalTotal),
    perPerson: Math.round(perPerson * 100) / 100
  }
}

// Update slider progress
const updateSliderProgress = () => {
  if (sliderRef.value) {
    const value = form.value.people || 50
    const percent = ((value - 1) / (150 - 1)) * 100
    sliderRef.value.style.setProperty('--slider-percent', `${percent}%`)
  }
}

watch(() => form.value.people, () => {
  updateSliderProgress()
}, { immediate: true })

onMounted(() => {
  updateSliderProgress()
})

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value)
}

const whatsappLink = computed(() => {
  if (!result.value) return '#'

  const selectedOptionals = []
  if (form.value.optional.chopp) selectedOptionals.push(t('calculator.optional.chopp'))
  if (form.value.optional.nonAlcoholic) selectedOptionals.push(t('calculator.optional.nonAlcoholic'))
  if (form.value.optional.dj) selectedOptionals.push(t('calculator.optional.dj'))
  if (form.value.optional.lighting) selectedOptionals.push(t('calculator.optional.lighting'))
  if (form.value.optional.recreator) selectedOptionals.push(t('calculator.optional.recreator'))
  if (form.value.optional.photographer) selectedOptionals.push(t('calculator.optional.photographer'))

  const message = t('calculator.whatsappMessage', {
    people: `${form.value.people} ${t('calculator.people.unit')}`,
    day: t(`calculator.day.${form.value.day}`),
    package: t(`calculator.package.${form.value.package}`),
    salgados: form.value.salgados,
    doces: form.value.doces,
    optionals: selectedOptionals.length > 0 ? selectedOptionals.join(', ') : t('calculator.none'),
    total: formatCurrency(result.value.total)
  })

  return `https://wa.me/5531999999999?text=${encodeURIComponent(message)}`
})
</script>

<style scoped>
.calculator-container {
  max-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* Steps Indicator */
.steps-indicator {
  @apply mb-4 flex-shrink-0;
}

.step-item {
  @apply flex flex-col items-center space-y-1;
}

.step-number {
  @apply w-7 h-7 rounded-full border-2 border-border bg-light text-text-body text-xs font-semibold flex items-center justify-center transition-all duration-300;
}

.step-item.active .step-number {
  @apply border-primary bg-primary text-text-inverse;
}

.step-item.completed .step-number {
  @apply border-primary bg-primary text-text-inverse;
}

.step-item.completed .step-number::after {
  content: '✓';
}

.step-label {
  @apply text-xs font-medium text-text-body hidden sm:block;
}

.step-item.active .step-label {
  @apply text-primary font-semibold;
}

.step-divider {
  @apply flex-1 h-0.5 bg-border mx-1 mt-3 hidden sm:block;
}

.step-content {
  @apply flex-1 flex flex-col space-y-3 min-h-0 overflow-hidden;
}

.step-navigation {
  @apply flex justify-between items-center pt-3 border-t border-border mt-3 flex-shrink-0;
}

.step-btn {
  @apply inline-flex items-center px-4 py-2 rounded-lg font-semibold text-xs transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2;
}

.step-btn-primary {
  @apply bg-primary text-text-inverse hover:bg-primary-hover shadow-md hover:shadow-lg focus:ring-primary;
}

.step-btn-primary:disabled {
  @apply bg-border text-text-light cursor-not-allowed opacity-50;
}

.step-btn-secondary {
  @apply bg-surface text-text-main border-2 border-border hover:bg-light focus:ring-primary;
}

.calculator-section {
  @apply rounded-lg p-3 shadow-lg border flex-shrink-0;
  border-color: rgba(224, 214, 204, 0.5);
  background: linear-gradient(to bottom right, var(--color-light), var(--color-surface));
}

.section-header {
  @apply flex items-center space-x-2 mb-3;
}

.section-icon {
  @apply w-8 h-8 rounded-lg flex items-center justify-center text-text-inverse shadow-md flex-shrink-0;
  background: linear-gradient(to bottom right, var(--color-primary), var(--color-primary-hover));
}

.section-icon.optional {
  background: linear-gradient(to bottom right, var(--color-secondary), var(--color-secondary-dark));
}

.section-title {
  @apply text-sm font-heading font-bold text-text-main;
}

.input-group {
  @apply space-y-2;
}

.input-label {
  @apply flex items-center text-sm font-semibold text-text-main mb-2;
}

.modern-select {
  @apply w-full px-3 py-2 bg-light border-2 border-border rounded-lg text-text-main text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary shadow-sm;
}
.modern-select:hover {
  border-color: rgba(247, 159, 31, 0.5);
}

.slider-container {
  @apply space-y-2;
}

.slider-value-display {
  @apply flex items-baseline justify-center space-x-1 mb-2;
}

.slider-value-number {
  @apply text-xl font-heading font-bold text-primary;
}

.slider-value-label {
  @apply text-sm text-text-body;
}

.people-slider {
  @apply w-full h-2 bg-border rounded-lg appearance-none cursor-pointer;
  background: linear-gradient(to right, var(--color-primary) 0%, var(--color-primary) var(--slider-percent, 33%), var(--color-border) var(--slider-percent, 33%), var(--color-border) 100%);
}

.people-slider::-webkit-slider-thumb {
  @apply appearance-none w-5 h-5 bg-primary rounded-full cursor-pointer shadow-md;
  transition: all 0.2s ease;
}

.people-slider::-webkit-slider-thumb:hover {
  @apply bg-primary-hover shadow-lg;
  transform: scale(1.1);
}

.people-slider::-moz-range-thumb {
  @apply w-5 h-5 bg-primary border-0 rounded-full cursor-pointer shadow-md;
  transition: all 0.2s ease;
}

.people-slider::-moz-range-thumb:hover {
  @apply bg-primary-hover shadow-lg;
  transform: scale(1.1);
}

.slider-labels {
  @apply flex justify-between text-xs text-text-light;
}

/* Food Consumption Cards */
.food-consumption-grid {
  @apply grid grid-cols-1 gap-4;
}

.food-card {
  @apply rounded-xl p-4 border-2 transition-all duration-300 shadow-md hover:shadow-lg;
  background: linear-gradient(to bottom right, rgba(255, 255, 255, 0.9), rgba(255, 249, 229, 0.5));
}

.food-card-salgados {
  border-color: rgba(247, 159, 31, 0.3);
}

.food-card-salgados:hover {
  border-color: rgba(247, 159, 31, 0.5);
  background: linear-gradient(to bottom right, rgba(255, 255, 255, 0.95), rgba(255, 249, 229, 0.7));
}

.food-card-doces {
  border-color: rgba(181, 214, 132, 0.3);
}

.food-card-doces:hover {
  border-color: rgba(181, 214, 132, 0.5);
  background: linear-gradient(to bottom right, rgba(255, 255, 255, 0.95), rgba(240, 253, 244, 0.7));
}

.food-card-header {
  @apply flex items-start space-x-3 mb-4;
}

.food-card-icon {
  @apply w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md;
  background: linear-gradient(to bottom right, var(--color-primary), var(--color-primary-hover));
}

.food-card-doces .food-card-icon {
  background: linear-gradient(to bottom right, var(--color-secondary), var(--color-secondary-dark));
}

.food-card-title {
  @apply flex-1;
}

.food-card-label {
  @apply text-sm font-heading font-bold text-text-main mb-1;
}

.food-card-subtitle {
  @apply text-xs text-text-body leading-relaxed;
  color: rgba(0, 0, 0, 0.6);
}

.food-card-controls {
  @apply flex items-center justify-between gap-3;
}

.food-btn {
  @apply w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-md hover:shadow-lg;
}

.food-btn-decrement {
  @apply border-2 border-border bg-light text-text-main hover:bg-surface hover:border-primary focus:ring-primary;
}

.food-btn-decrement:disabled {
  @apply opacity-40 cursor-not-allowed hover:bg-light hover:border-border;
}

.food-btn-increment {
  @apply border-2 border-primary bg-primary text-text-inverse hover:bg-primary-hover focus:ring-primary;
}

.food-card-doces .food-btn-increment {
  @apply border-secondary bg-secondary hover:bg-secondary-dark focus:ring-secondary;
}

.food-value-display {
  @apply flex-1 flex flex-col items-center justify-center py-2 px-4 rounded-xl;
  background: linear-gradient(to bottom right, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.4));
  border: 2px solid rgba(224, 214, 204, 0.3);
}

.food-value-number {
  @apply text-3xl font-heading font-bold text-primary mb-0.5;
}

.food-card-doces .food-value-number {
  @apply text-secondary;
}

.food-value-unit {
  @apply text-xs font-medium text-text-body uppercase tracking-wide;
}

.optional-card {
  @apply relative p-3 rounded-xl border-2 border-border bg-light cursor-pointer transition-all duration-200 hover:shadow-md;
}
.optional-card:hover {
  border-color: rgba(247, 159, 31, 0.5);
}

.optional-card-active {
  @apply border-primary shadow-md;
  background: linear-gradient(to bottom right, rgba(247, 159, 31, 0.1), rgba(247, 159, 31, 0.05));
}

.optional-checkbox {
  @apply sr-only;
}

.optional-content {
  @apply flex flex-col items-center space-y-2;
}

.optional-icon {
  @apply w-10 h-10 rounded-lg text-primary flex items-center justify-center transition-all duration-200;
  background-color: rgba(247, 159, 31, 0.1);
}

.optional-card-active .optional-icon {
  @apply bg-primary text-text-inverse;
}

.optional-label {
  @apply text-xs font-medium text-text-main text-center;
}

.result-section {
  @apply border-2;
  border-color: rgba(247, 159, 31, 0.2);
  background: linear-gradient(to bottom right, rgba(247, 159, 31, 0.1), rgba(255, 249, 229, 0.3), rgba(181, 214, 132, 0.1));
}

.result-header {
  @apply flex items-center space-x-3 mb-4 pb-4 border-b-2;
  border-bottom-color: rgba(247, 159, 31, 0.2);
}

.result-icon {
  @apply w-10 h-10 rounded-xl flex items-center justify-center text-text-inverse shadow-lg flex-shrink-0;
  background: linear-gradient(to bottom right, var(--color-primary), var(--color-primary-hover));
}

.result-label {
  @apply text-xs font-medium text-text-body mb-1;
}

.result-value {
  @apply text-2xl md:text-3xl font-heading font-bold text-primary;
}

.result-grid {
  @apply grid grid-cols-1 md:grid-cols-3 gap-3 mb-4;
}

.result-item {
  @apply rounded-lg p-3 border;
  background-color: rgba(255, 255, 255, 0.8);
  border-color: rgba(224, 214, 204, 0.5);
}

.result-item-optional {
  background-color: rgba(181, 214, 132, 0.1);
  border-color: rgba(181, 214, 132, 0.3);
}

.result-item-label {
  @apply text-xs font-medium text-text-body mb-1 uppercase tracking-wide;
}

.result-item-value {
  @apply text-lg font-bold text-text-main;
}

.result-disclaimer {
  @apply text-xs text-text-light text-center italic mb-4;
}

.whatsapp-cta {
  @apply w-full inline-flex items-center justify-center space-x-2 px-6 py-3 bg-primary text-text-inverse font-body font-bold text-base rounded-xl shadow-lg hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-300 hover:shadow-xl transform hover:scale-105;
}

</style>

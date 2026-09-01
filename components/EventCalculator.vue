<template>
  <div class="calculator-container">
    <div class="steps-indicator mb-3 sm:mb-4">
      <div class="flex items-center justify-center gap-1 sm:space-x-1">
        <div class="step-item" :class="{ active: currentStep === 1, completed: currentStep > 1 }">
          <div class="step-number">1</div>
          <span class="step-label">{{ $t('calculator.steps.info') }}</span>
        </div>
        <div class="step-divider" />
        <div class="step-item" :class="{ active: currentStep === 2, completed: currentStep > 2 }">
          <div class="step-number">2</div>
          <span class="step-label">{{ $t('calculator.steps.optional') }}</span>
        </div>
        <div class="step-divider" />
        <div class="step-item" :class="{ active: currentStep === 3, completed: currentStep > 3 }">
          <div class="step-number">3</div>
          <span class="step-label">{{ $t('calculator.steps.result') }}</span>
        </div>
      </div>
    </div>

    <p class="values-notice" role="note">
      <svg class="values-notice-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span>{{ $t('calculator.valuesNotice') }}</span>
    </p>

    <form class="flex-1 flex flex-col space-y-3 min-h-0" @submit.prevent="handleSubmit">
      <!-- Passo 1: convidados, dia, tipo de festa -->
      <div v-show="currentStep === 1" class="step-content step-content-scroll">
        <div class="calculator-section calculator-section-scroll">
          <div class="section-header">
            <div class="section-icon">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 class="section-title">{{ $t('calculator.requiredFields') }}</h3>
          </div>

          <div class="grid grid-cols-1 gap-3">
            <div class="input-group">
              <label for="partyType" class="input-label">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                {{ $t('calculator.party.label') }} <span class="text-primary">*</span>
              </label>
              <select id="partyType" v-model="form.partyType" required class="modern-select">
                <option value="">{{ $t('calculator.party.select') }}</option>
                <option value="festaCompleta">{{ $t('calculator.party.festaCompleta') }}</option>
                <option value="festaLanche">{{ $t('calculator.party.festaLanche') }}</option>
              </select>
              <p v-if="form.partyType === 'festaCompleta'" class="text-xs text-text-light mt-2 leading-relaxed">
                {{ $t('calculator.party.phrase') }}
              </p>
              <p v-else-if="form.partyType === 'festaLanche'" class="text-xs text-text-light mt-2 leading-relaxed">
                {{ $t('calculator.party.phrase') }}
              </p>
            </div>

            <template v-if="form.partyType === 'festaCompleta'">
              <div class="input-group">
                <label for="completaTier" class="input-label">
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  {{ $t('calculator.people.labelCompleta') }} <span class="text-primary">*</span>
                </label>
                <p class="text-xs text-text-light mb-2">{{ $t('calculator.people.hintCompleta') }}</p>
                <div class="slider-container">
                  <div class="slider-value-display">
                    <span class="slider-value-number">{{ selectedCompletaGuests }}</span>
                    <span class="slider-value-label">{{ $t('calculator.people.unit') }}</span>
                  </div>
                  <input
                    id="completaTier"
                    ref="tierSliderRef"
                    v-model.number="completaTierIndex"
                    type="range"
                    min="0"
                    :max="maxTierIndex"
                    step="1"
                    class="people-slider"
                    :aria-valuetext="`${selectedCompletaGuests} ${$t('calculator.people.unit')}`"
                  />
                  <div class="flex justify-between text-[11px] text-text-light px-0.5">
                    <span v-for="n in COMPLETA_GUEST_TIERS" :key="n">{{ n }}</span>
                  </div>
                </div>
              </div>

              <div class="input-group">
                <label for="day" class="input-label">
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {{ $t('calculator.day.label') }} <span class="text-primary">*</span>
                </label>
                <select id="day" v-model="form.day" required class="modern-select">
                  <option value="">{{ $t('calculator.day.select') }}</option>
                  <option value="weekday">{{ $t('packages.complete.days.monThu') }}</option>
                  <option value="friSunHoliday">{{ $t('calculator.day.friSunHoliday') }}</option>
                  <option value="saturday">{{ $t('packages.complete.days.saturday') }}</option>
                </select>
              </div>
            </template>

            <template v-else-if="form.partyType === 'festaLanche'">
              <div
                class="rounded-xl border border-primary/35 bg-primary/10 px-4 py-3 text-sm"
              >
                <p class="font-semibold text-text-main mb-1">{{ $t('calculator.lanche.capacityTitle') }}</p>
                <p class="text-text-body leading-relaxed">
                  {{ $t('packages.items.guestsFestaLanche') }}
                </p>
              </div>
              <div
                class="rounded-xl border border-border bg-surface/80 px-4 py-3 text-sm"
              >
                <p class="text-[10px] uppercase tracking-wide font-semibold text-primary mb-1">
                  {{ $t('packages.common.days') }}
                </p>
                <p class="font-semibold text-text-main">
                  {{ $t('packages.items.daysMonThu') }}
                </p>
              </div>
            </template>
          </div>
        </div>

        <div class="step-navigation step-navigation-sticky">
          <span />
          <button
            type="button"
            class="step-btn step-btn-primary"
            :disabled="!canProceedFromStep1"
            @click="nextStep"
          >
            {{ $t('calculator.steps.next') }}
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Passo 2: opcionais -->
      <div v-show="currentStep === 2" class="step-content step-content-scroll">
        <div class="calculator-section optional-section">
          <div class="section-header optional-header">
            <div class="section-icon optional">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <div class="min-w-0 flex-1">
              <h3 class="section-title">{{ $t('calculator.optionalFields') }}</h3>
              <p class="optional-intro">{{ $t('calculator.optionalIntro') }}</p>
            </div>
          </div>

          <div
            v-if="selectedOptionalsCount > 0"
            class="optional-summary"
            role="status"
            :aria-label="`${selectedOptionalsCount} ${$t('calculator.optionalFields')}`"
          >
            <span class="optional-summary-count">
              {{ selectedOptionalsCount }}
              {{ selectedOptionalsCount === 1 ? $t('calculator.optionalSelectedOne') : $t('calculator.optionalSelectedMany') }}
            </span>
            <span class="optional-summary-total">
              {{ $t('calculator.priceOnRequest') }}
            </span>
          </div>

          <div class="optional-list">
            <label
              v-for="row in optionalRows"
              :key="row.key"
              class="optional-card"
              :class="{ 'optional-card-active': form.optional[row.key] }"
            >
              <input
                v-model="form.optional[row.key]"
                type="checkbox"
                class="optional-checkbox"
              />
              <span class="optional-check" aria-hidden="true">
                <svg v-if="form.optional[row.key]" class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <div class="optional-body">
                <span class="optional-label">{{ row.label }}</span>
                <span class="optional-extra">
                  {{ $t('calculator.priceOnRequest') }}
                </span>
              </div>
            </label>
          </div>
        </div>

        <div class="step-navigation step-navigation-sticky">
          <button type="button" class="step-btn step-btn-secondary" @click="prevStep">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            {{ $t('calculator.steps.back') }}
          </button>
          <button type="button" class="step-btn step-btn-primary" @click="nextStep">
            {{ $t('calculator.steps.next') }}
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Passo 3: resultado -->
      <div v-show="currentStep === 3" class="step-content step-content-scroll">
        <div v-if="result" class="calculator-section calculator-section-scroll result-section">
          <div class="result-header">
            <div class="result-icon">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p class="result-label">{{ $t('calculator.result.title') }}</p>
              <p class="result-value text-base">
                {{ $t('calculator.result.ctaPhrase') }}
              </p>
            </div>
          </div>

          <div v-if="selectedOptionalsCount > 0" class="result-grid">
            <div class="result-item result-item-optional">
              <p class="result-item-label">{{ $t('calculator.result.optional') }}</p>
              <p class="result-item-value">
                <span class="optional-result-list">{{ selectedOptionalsLabels }}</span>
                <span class="optional-result-price">{{ $t('calculator.priceOnRequest') }}</span>
              </p>
            </div>
          </div>

          <p class="result-disclaimer">
            {{ $t('calculator.result.disclaimer') }}
          </p>

          <WhatsappLink
            :href="whatsappLink"
            class="whatsapp-cta"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span>{{ $t('calculator.cta.whatsapp') }}</span>
          </WhatsappLink>
        </div>

        <div class="step-navigation step-navigation-sticky">
          <button type="button" class="step-btn step-btn-secondary" @click="prevStep">
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
import { ref, computed, watch, onMounted, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'
import {
  getPartyBaseTotal,
  CALCULATOR_OPTIONAL_KEYS,
  calculatorOptionalItemI18n,
  COMPLETA_GUEST_TIERS,
  FESTA_LANCHE_GUEST_TOTAL,
  type CalculatorDayType,
  type CalculatorPartyType,
  type CalculatorOptionalKey
} from '~/config/calculator'

interface Emits {
  (e: 'close'): void
}

defineEmits<Emits>()

const { t } = useI18n()
const { whatsappLink: buildWhatsappLink } = useContact()

const OPTIONAL_KEYS = CALCULATOR_OPTIONAL_KEYS

function defaultOptionals(): Record<CalculatorOptionalKey, boolean> {
  return {
    personalized: false,
    ledLetters: false,
    naturalFlowers: false,
    facePaint: false,
    sparkling: false,
    wine: false,
    liveCharacter: false
  }
}

const tierSliderRef = ref<HTMLInputElement | null>(null)
const completaTierIndex = ref(0)
const maxTierIndex = COMPLETA_GUEST_TIERS.length - 1

const selectedCompletaGuests = computed(() => COMPLETA_GUEST_TIERS[completaTierIndex.value])

const currentStep = ref(1)

const form = ref({
  day: '' as '' | CalculatorDayType,
  partyType: '' as '' | CalculatorPartyType,
  optional: defaultOptionals()
})

const result = ref<{
  total: number
  base: number
  perPerson: number
} | null>(null)

const canProceedFromStep1 = computed(() => {
  if (!form.value.partyType) {
    return false
  }
  if (form.value.partyType === 'festaLanche') {
    return true
  }
  return !!form.value.day
})

watch(
  () => form.value.partyType,
  (next, prev) => {
    if (next === 'festaLanche') {
      form.value.day = 'weekday'
    } else if (next === 'festaCompleta' && prev === 'festaLanche') {
      form.value.day = ''
    }
  }
)

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value)
}

const formatEstimateLabel = (value: number) =>
  `${t('calculator.fromPrice')} ${formatCurrency(value)}`

const optionalRows = computed(() =>
  OPTIONAL_KEYS.map((key) => ({
    key,
    label: t(calculatorOptionalItemI18n[key])
  }))
)

const selectedOptionalsCount = computed(() =>
  OPTIONAL_KEYS.filter((key) => form.value.optional[key]).length
)

const selectedOptionalsLabels = computed(() =>
  OPTIONAL_KEYS.filter((key) => form.value.optional[key])
    .map((key) => t(calculatorOptionalItemI18n[key]))
    .join(', ')
)

const nextStep = () => {
  if (currentStep.value === 1 && canProceedFromStep1.value) {
    currentStep.value = 2
  } else if (currentStep.value === 2) {
    calculate()
    currentStep.value = 3
  }
}

const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--
  }
}

const handleSubmit = () => {
  // navegação por botões
}

const calculate = () => {
  if (!form.value.partyType) {
    return
  }
  if (form.value.partyType === 'festaCompleta' && !form.value.day) {
    return
  }
  const guests =
    form.value.partyType === 'festaLanche'
      ? FESTA_LANCHE_GUEST_TOTAL
      : selectedCompletaGuests.value
  const day: CalculatorDayType =
    form.value.partyType === 'festaLanche' ? 'weekday' : (form.value.day as CalculatorDayType)
  const base = getPartyBaseTotal(guests, day, form.value.partyType)
  const total = base
  const perPerson = total / guests

  result.value = {
    total: Math.round(total),
    base: Math.round(base),
    perPerson: Math.round(perPerson * 100) / 100
  }
}

const updateTierSliderProgress = () => {
  if (!tierSliderRef.value || maxTierIndex <= 0) {
    return
  }
  const percent = (completaTierIndex.value / maxTierIndex) * 100
  tierSliderRef.value.style.setProperty('--slider-percent', `${percent}%`)
}

watch(completaTierIndex, async () => {
  await nextTick()
  updateTierSliderProgress()
})

watch(
  () => form.value.partyType,
  async () => {
    await nextTick()
    updateTierSliderProgress()
  }
)

onMounted(() => {
  updateTierSliderProgress()
})

function dayLabel(d: CalculatorDayType): string {
  if (d === 'weekday') {
    return t('packages.complete.days.monThu')
  }
  if (d === 'saturday') {
    return t('packages.complete.days.saturday')
  }
  return t('calculator.day.friSunHoliday')
}

function partyLabel(p: CalculatorPartyType): string {
  return p === 'festaCompleta' ? t('calculator.party.festaCompleta') : t('calculator.party.festaLanche')
}

const whatsappLink = computed(() => {
  if (!result.value || !form.value.partyType) {
    return '#'
  }
  if (form.value.partyType === 'festaCompleta' && !form.value.day) {
    return '#'
  }

  const selectedLabels: string[] = []
  for (const key of OPTIONAL_KEYS) {
    if (form.value.optional[key]) {
      selectedLabels.push(t(calculatorOptionalItemI18n[key]))
    }
  }

  const peopleStr =
    form.value.partyType === 'festaLanche'
      ? t('packages.items.guestsFestaLanche')
      : `${selectedCompletaGuests.value} ${t('calculator.people.unit')}`

  const dayStr =
    form.value.partyType === 'festaLanche'
      ? t('packages.items.daysMonThu')
      : dayLabel(form.value.day as CalculatorDayType)

  const message = t('calculator.whatsappMessage', {
    party: partyLabel(form.value.partyType),
    people: peopleStr,
    day: dayStr,
    optionals: selectedLabels.length > 0 ? selectedLabels.join(', ') : t('calculator.none'),
    total: formatEstimateLabel(result.value.total)
  })

  return buildWhatsappLink(message)
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
  @apply mb-2 sm:mb-3 flex-shrink-0;
}

.values-notice {
  @apply flex items-start gap-2 mb-3 px-2.5 py-2 rounded-lg border text-[11px] leading-snug text-text-body flex-shrink-0;
  border-color: rgba(247, 159, 31, 0.25);
  background-color: rgba(247, 159, 31, 0.08);
}

.values-notice-icon {
  @apply w-4 h-4 flex-shrink-0 text-primary mt-0.5;
}

.estimate-amount {
  @apply inline-flex flex-wrap items-baseline gap-x-1;
}

.estimate-from {
  @apply text-[10px] font-semibold uppercase tracking-wide text-text-light;
}

.estimate-value {
  @apply font-bold text-primary whitespace-nowrap;
}

.estimate-plus {
  @apply text-xs font-bold text-primary;
}

.estimate-amount--large {
  @apply flex flex-col items-start gap-0.5;
}

.estimate-amount--large .estimate-from {
  @apply text-[11px] tracking-wider;
}

.estimate-amount--large .estimate-value {
  @apply text-2xl md:text-3xl font-heading leading-none;
}

.estimate-amount--item {
  @apply flex flex-col items-start gap-0.5;
}

.estimate-amount--item .estimate-from {
  @apply text-[9px];
}

.estimate-amount--item .estimate-value {
  @apply text-lg text-text-main;
}

.estimate-amount--compact {
  @apply flex-col items-start gap-0;
}

.estimate-amount--compact .estimate-from {
  @apply text-[9px] leading-tight;
}

.estimate-amount--compact .estimate-value {
  @apply text-xs;
}

.optional-summary-total {
  @apply text-xs font-semibold text-text-body;
}

.optional-result-list {
  @apply block text-xs text-text-body leading-snug mb-1;
}

.optional-result-price {
  @apply block text-xs font-semibold text-primary;
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
  @apply border-primary bg-primary text-transparent;
}

.step-item.completed .step-number::after {
  content: '✓';
  @apply text-text-inverse;
}

.step-label {
  @apply text-[10px] sm:text-xs font-medium text-text-body text-center leading-tight max-w-[4.5rem] sm:max-w-none;
}

.step-item.active .step-label {
  @apply text-primary font-semibold;
}

.step-divider {
  @apply w-6 sm:flex-1 h-0.5 bg-border mx-0.5 sm:mx-1 mt-3 flex-shrink-0;
}

.step-content {
  @apply flex-1 flex flex-col space-y-3 min-h-0;
}

.step-content-scroll {
  @apply overflow-hidden;
}

.calculator-section-scroll {
  @apply flex-1 min-h-0 overflow-y-auto overflow-x-hidden;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
}

.step-navigation {
  @apply flex justify-between items-center gap-2 pt-3 border-t border-border mt-auto flex-shrink-0;
}

.step-btn {
  @apply inline-flex items-center justify-center px-3 sm:px-4 py-2.5 sm:py-2 rounded-lg font-semibold text-xs transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 min-h-[2.75rem] sm:min-h-0;
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
  @apply rounded-lg p-3 shadow-lg border;
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

.optional-section {
  @apply flex-1 min-h-0 flex flex-col overflow-hidden p-0 border-0 shadow-none;
  background: transparent;
}

.optional-header {
  @apply px-1 pb-3 mb-0 flex-shrink-0;
}

.optional-intro {
  @apply text-xs text-text-light mt-1 leading-relaxed;
}

.optional-summary {
  @apply flex items-center justify-between gap-3 mx-1 mb-3 px-3 py-2.5 rounded-xl border flex-shrink-0;
  border-color: rgba(247, 159, 31, 0.3);
  background: linear-gradient(to right, rgba(247, 159, 31, 0.12), rgba(247, 159, 31, 0.05));
}

.optional-summary-count {
  @apply text-xs font-medium text-text-body;
}

.optional-list {
  @apply flex-1 min-h-0 overflow-y-auto overflow-x-hidden space-y-2 px-1 pb-1;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
}

.optional-card {
  @apply relative flex items-center gap-3 p-3 min-h-[3.25rem] rounded-xl border-2 border-border bg-light cursor-pointer transition-all duration-200 active:scale-[0.99];
  touch-action: manipulation;
}
.optional-card:hover {
  border-color: rgba(247, 159, 31, 0.5);
}

.optional-card-active {
  @apply border-primary shadow-sm;
  background: linear-gradient(to right, rgba(247, 159, 31, 0.12), rgba(247, 159, 31, 0.04));
}

.optional-checkbox {
  @apply sr-only;
}

.optional-check {
  @apply w-5 h-5 rounded-md border-2 border-border bg-surface flex items-center justify-center flex-shrink-0 text-text-inverse transition-all duration-200;
}

.optional-card-active .optional-check {
  @apply border-primary bg-primary;
}

.optional-body {
  @apply flex-1 min-w-0 flex flex-col items-start gap-0.5;
}

.optional-label {
  @apply text-sm font-medium text-text-main leading-snug;
}

.optional-extra {
  @apply text-xs font-bold text-primary;
}

.step-navigation-sticky {
  @apply mt-auto bg-light pt-3 -mx-3 px-3;
  padding-bottom: max(0.25rem, env(safe-area-inset-bottom, 0px));
}

@media (min-width: 640px) {
  .optional-section {
    @apply rounded-lg p-3 shadow-lg border;
    border-color: rgba(224, 214, 204, 0.5);
    background: linear-gradient(to bottom right, var(--color-light), var(--color-surface));
  }

  .optional-list {
    @apply grid grid-cols-2 gap-3 space-y-0 overflow-visible;
  }

  .optional-card {
    @apply flex-col items-center text-center min-h-[7.5rem] p-4;
  }

  .optional-check {
    @apply absolute top-2.5 right-2.5;
  }

  .optional-body {
    @apply flex-col items-center gap-1.5 flex-1 justify-center;
  }

  .optional-label {
    @apply text-xs text-center;
  }

  .optional-extra {
    @apply text-[11px];
  }

  .optional-extra .estimate-amount--compact {
    @apply items-center;
  }
}

@media (min-width: 1024px) {
  .optional-list {
    @apply grid-cols-3;
  }
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
  @apply leading-tight;
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
  @apply leading-tight;
}

.result-disclaimer {
  @apply text-xs text-text-light text-center italic mb-4;
}

.whatsapp-cta {
  @apply w-full inline-flex items-center justify-center space-x-2 px-6 py-3 bg-primary text-text-inverse font-body font-bold text-base rounded-xl shadow-lg hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-300 hover:shadow-xl transform hover:scale-105;
}

</style>

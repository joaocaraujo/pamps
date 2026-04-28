<template>
  <div class="min-h-screen bg-surface pt-24">
    <section class="py-16 md:py-24">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto space-y-8">
          <article class="relative overflow-visible rounded-2xl border-2 border-primary bg-light shadow-xl">
            <div class="relative z-[1] lg:grid lg:grid-cols-12 lg:gap-8 p-6 md:p-8">
              <div class="lg:col-span-4 flex flex-col gap-4">
                <div>
                  <p class="text-xs font-semibold uppercase tracking-widest text-primary mb-1">
                    {{ $t('packages.festaLanche.eyebrow') }}
                  </p>
                  <h2 class="text-2xl md:text-3xl font-heading font-bold text-text-main leading-tight">
                    {{ $t('packages.plans.realeza.name') }}
                  </h2>
                </div>
                <div class="flex flex-col gap-2 max-w-sm">
                  <div class="rounded-xl border border-primary/30 bg-primary/10 px-4 py-3 text-sm">
                    <p class="text-[10px] uppercase tracking-wide font-semibold text-primary mb-0.5">
                      {{ $t('packages.common.days') }}
                    </p>
                    <p class="font-semibold text-text-main leading-snug">
                      {{ $t('packages.items.daysMonThu') }}
                    </p>
                  </div>
                  <div class="rounded-xl border border-primary/30 bg-primary/10 px-4 py-3 text-sm">
                    <p class="text-[10px] uppercase tracking-wide font-semibold text-primary mb-0.5">
                      {{ $t('packages.common.duration') }}
                    </p>
                    <p class="font-semibold text-text-main leading-snug">
                      {{ $t('packages.plans.realeza.duration') }}{{ $t('packages.common.hours') }}
                    </p>
                  </div>
                </div>
                <div class="hidden lg:block rounded-xl border border-border bg-surface/60 p-4 text-sm text-text-body leading-relaxed">
                  {{ $t('packages.festaLanche.sideBlurb') }}
                </div>
              </div>

              <div class="lg:col-span-8 mt-8 lg:mt-0">
                <p class="text-xs font-semibold uppercase tracking-wide text-primary mb-3">
                  {{ $t('packages.festaLanche.includesLabel') }}
                </p>
                <div class="grid sm:grid-cols-2 gap-x-8 gap-y-2">
                  <ul class="space-y-2 text-text-body text-sm">
                    <li v-for="item in festaLancheCol1" :key="item" class="flex items-start gap-2.5">
                      <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                      <span class="leading-snug">{{ $t(`packages.items.${item}`) }}</span>
                    </li>
                  </ul>
                  <ul class="space-y-2 text-text-body text-sm sm:border-l sm:border-border sm:pl-8">
                    <li v-for="item in festaLancheCol2" :key="item" class="flex items-start gap-2.5">
                      <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                      <span class="leading-snug">{{ $t(`packages.items.${item}`) }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="relative z-[1] border-t border-primary/20 bg-surface/50 px-6 md:px-8 py-4 md:py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <p class="text-sm italic text-text-light md:max-w-xl">
                {{ $t('packages.plans.realeza.notes') }}
              </p>
              <a
                :href="whatsappLink($t('packages.plans.realeza.name'))"
                target="_blank"
                rel="noopener noreferrer"
                class="shrink-0 inline-flex items-center justify-center w-full md:w-auto px-8 py-3 bg-primary text-text-inverse rounded-full font-semibold hover:bg-primary-hover transition shadow-md"
              >
                {{ $t('packages.common.cta') }}
              </a>
            </div>
          </article>

          <article class="relative overflow-visible rounded-2xl border border-border bg-light shadow-xl">
            <div class="relative z-[1] border-b border-border bg-gradient-to-r from-primary/12 via-secondary/10 to-accent/10 px-6 md:px-8 py-6 md:py-7">
              <p class="text-xs font-semibold uppercase tracking-widest text-primary mb-1">
                {{ $t('packages.complete.eyebrow') }}
              </p>
              <h2 class="text-3xl md:text-4xl font-heading font-bold text-text-main">
                {{ $t('packages.complete.title') }}
              </h2>
              <p class="text-text-body mt-2 max-w-2xl text-sm md:text-base">
                {{ $t('packages.complete.subtitle') }}
              </p>
            </div>

            <div class="relative z-[1] p-6 md:p-8">
              <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
                <section
                  v-for="section in completeSections"
                  :key="section.key"
                  class="flex flex-col rounded-xl border border-border bg-surface/60 p-4 min-h-[8.5rem] shadow-sm"
                >
                  <h3 class="text-xs uppercase tracking-wide font-semibold text-primary mb-3 border-b border-border/80 pb-2">
                    {{ $t(`packages.complete.sections.${section.key}.title`) }}
                  </h3>
                  <ul class="space-y-1.5 text-sm text-text-body flex-1">
                    <li v-for="item in section.items" :key="item" class="flex items-start gap-2">
                      <span class="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                      <span class="leading-snug">{{ $t(`packages.complete.items.${item}`) }}</span>
                    </li>
                  </ul>
                  <p v-if="section.note" class="mt-3 pt-2 border-t border-border/60 text-xs italic text-text-light">
                    {{ $t(`packages.complete.notes.${section.note}`) }}
                  </p>
                </section>
              </div>

              <div class="mt-8 rounded-xl border border-border bg-surface/40 p-4 md:p-5">
                <h3 class="text-base font-heading font-semibold text-text-main mb-3">
                  {{ $t('packages.complete.daySelector.title') }}
                </h3>
                <div class="flex flex-wrap gap-2">
                  <button
                    v-for="option in dayOptions"
                    :key="option.key"
                    type="button"
                    @click="selectDay(option.key)"
                    class="px-4 py-2.5 rounded-full border text-sm font-semibold transition-all duration-200"
                    :class="selectedDay === option.key ? 'bg-primary text-text-inverse border-primary shadow-md' : 'bg-light text-text-main border-border hover:border-primary'"
                  >
                    {{ $t(`packages.complete.days.${option.key}`) }}
                  </button>
                </div>
              </div>

              <div v-if="selectedDayData" class="mt-4 rounded-xl border border-primary/30 bg-primary/5 p-4 md:p-5">
                <h4 class="text-base font-heading font-bold text-text-main mb-3">
                  {{ $t('packages.complete.modal.title', { day: $t(`packages.complete.days.${selectedDay}`) }) }}
                </h4>
                <div class="grid md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <p class="text-sm font-semibold text-primary mb-1">{{ $t('packages.complete.modal.conditions') }}</p>
                    <p class="text-sm text-text-body leading-relaxed">{{ $t(`packages.complete.conditions.${selectedDayData.condition}`) }}</p>
                  </div>
                  <div>
                    <p class="text-sm font-semibold text-primary mb-2">{{ $t('packages.complete.modal.payment') }}</p>
                    <ul class="space-y-1.5 text-sm text-text-body">
                      <li v-for="payment in paymentItems" :key="payment" class="flex items-start gap-2">
                        <span class="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                        <span class="leading-snug">{{ $t(`packages.complete.payment.${payment}`) }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <a
                :href="whatsappLink($t('packages.complete.title'))"
                target="_blank"
                rel="noopener noreferrer"
                class="mt-6 inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 bg-primary text-text-inverse rounded-full font-semibold hover:bg-primary-hover transition shadow-md"
              >
                {{ $t('packages.common.cta') }}
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const { t } = useI18n()
const { whatsappLink: baseWhatsappLink } = useContact()

const festaLancheCol1 = ['duration3h30', 'guestsFestaLanche', 'salgadosLivre', 'bebidasLivre', 'doces5']
const festaLancheCol2 = ['boloCorte', 'pratoQuente', 'miniDecoracao', 'discountVista', 'card3x']

const completeSections = [
  { key: 'decoration', items: ['themedScene', 'balloonArch', 'balloonCeiling', 'balloonCenterpiece'], note: 'decorationOptional' },
  { key: 'team', items: ['teamCoordinator', 'waiters', 'kidsMonitor', 'recreator', 'cook', 'kitchenAssistant', 'security'] },
  {
    key: 'duration',
    items: ['party4h', 'guestCapacityBands', 'priceVariesByDay'],
    note: 'pricingConsult'
  },
  { key: 'courtesies', items: ['freeUnder6', 'gourmetCart', 'customPartyFavor', 'fakeCake', 'coveredParking', 'earlyWelcome', 'familyFree', 'graduatesFree'] },
  { key: 'services', items: ['tableSetup', 'giftTagging', 'partySupervision', 'ambientSound', 'dishes', 'candle', 'decorationService'] },
  { key: 'buffet', items: ['savoryFree', 'hotDish', 'fiveSweets', 'birthdayCake', 'kidsMenu', 'gourmetCart'] },
  {
    key: 'drinks',
    items: ['sodaFree', 'waterJuiceFree', 'heinekenFree', 'originalFree'],
    note: 'winesOptional'
  },
  {
    key: 'optionals',
    items: [
      'optionalPersonalized',
      'optionalLedLetters',
      'optionalFacePaint',
      'optionalSparkling',
      'optionalWine',
      'optionalBeerAddon',
      'optionalLiveCharacter'
    ],
    note: 'optionalsConsult'
  }
]

const dayOptions = [{ key: 'monThu' },{ key: 'friSun' },{ key: 'saturday' }] as const
const dayDetails = { monThu: { condition: 'default' }, friSun: { condition: 'default' }, saturday: { condition: 'premiumDay' } }
const paymentItems = ['cash10', 'pix7', 'reserve30', 'card6x']
const selectedDay = ref<keyof typeof dayDetails>('monThu')
const selectedDayData = computed(() => dayDetails[selectedDay.value])
const selectDay = (day: keyof typeof dayDetails) => { selectedDay.value = day }

const whatsappLink = (packageName: string) => {
  const message = `Ola! Gostaria de saber mais sobre ${packageName} na Pamps.`
  return baseWhatsappLink(message)
}

useHead({
  title: computed(() => `${t('packages.title')} - ${t('brand.pageTitle')}`),
  meta: [{ name: 'description', content: computed(() => t('packages.subtitle')) }]
})
</script>

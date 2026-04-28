/**
 * Parâmetros da calculadora — Festa Completa alinhada à tabela de orçamento (4h).
 * Festa Lanche: mesmo modelo proporcional da página /packages (40 conv., seg–qui fixos).
 * Opcionais: valores indicativos (contratação com a equipe).
 */

export type CalculatorPartyType = 'festaCompleta' | 'festaLanche'

export type CalculatorDayType = 'weekday' | 'friSunHoliday' | 'saturday'

export type CalculatorOptionalKey =
  | 'personalized'
  | 'ledLetters'
  | 'naturalFlowers'
  | 'facePaint'
  | 'sparkling'
  | 'wine'
  | 'liveCharacter'

/** Festa Completa — lotações tabuladas (igual página de pacotes / proposta de orçamento) */
export const COMPLETA_GUEST_TIERS = [50, 60, 80, 100, 120] as const

export type CompletaGuestTier = (typeof COMPLETA_GUEST_TIERS)[number]

/**
 * Festa Lanche — pacote fixo na calculadora (igual texto em packages.items.*)
 * Total 40 convidados; só segunda à quinta.
 */
export const FESTA_LANCHE_GUEST_TOTAL = 40

/** Base segunda–quinta, 50 convidados (R$) */
const COMPLETA_BASE_50_WEEKDAY = 10390

/** +R$ 500 a cada 10 convidados acima de 50 */
const COMPLETA_EXTRA_PER_GUEST = 50

const COMPLETA_SURCHARGE_FRISUN = 2000
const COMPLETA_SURCHARGE_SATURDAY = 2500

/** Estimativa Lanche sobre a linha Completa mesmo dia hipotético → proporção (@see /packages) */
const LANCHE_RATIO = 0.48

/** Valores estimados por item opcional (R$) */
export const calculatorOptionalPrices: Record<CalculatorOptionalKey, number> = {
  personalized: 450,
  ledLetters: 380,
  naturalFlowers: 750,
  facePaint: 550,
  sparkling: 260,
  wine: 300,
  liveCharacter: 850
}

export const calculatorOptionalItemI18n: Record<CalculatorOptionalKey, string> = {
  personalized: 'packages.complete.items.optionalPersonalized',
  ledLetters: 'packages.complete.items.optionalLedLetters',
  naturalFlowers: 'packages.complete.items.optionalNaturalFlowers',
  facePaint: 'packages.complete.items.optionalFacePaint',
  sparkling: 'packages.complete.items.optionalSparkling',
  wine: 'packages.complete.items.optionalWine',
  liveCharacter: 'packages.complete.items.optionalLiveCharacter'
}

function completaLineWeekday(guests: number): number {
  return COMPLETA_BASE_50_WEEKDAY + (guests - 50) * COMPLETA_EXTRA_PER_GUEST
}

/**
 * Total base do pacote (sem opcionais).
 * - Festa Lanche: ignora guests/day passados — usa sempre 40 conv. e segunda–quinta.
 * - Festa Completa: guests deve pertencer a COMPLETA_GUEST_TIERS; day com acréscimos.
 */
export function getPartyBaseTotal(
  guests: number,
  day: CalculatorDayType,
  party: CalculatorPartyType
): number {
  if (party === 'festaLanche') {
    const g = FESTA_LANCHE_GUEST_TOTAL
    const weekdayLine = completaLineWeekday(g)
    return Math.round(weekdayLine * LANCHE_RATIO)
  }

  const g = guests as CompletaGuestTier
  let weekdayLine = completaLineWeekday(g)

  let surcharge = 0
  if (day === 'friSunHoliday') {
    surcharge = COMPLETA_SURCHARGE_FRISUN
  } else if (day === 'saturday') {
    surcharge = COMPLETA_SURCHARGE_SATURDAY
  }
  return Math.round(weekdayLine + surcharge)
}

export function sumSelectedOptionals(selected: Record<CalculatorOptionalKey, boolean>): number {
  let sum = 0
  for (const key of Object.keys(calculatorOptionalPrices) as CalculatorOptionalKey[]) {
    if (selected[key]) {
      sum += calculatorOptionalPrices[key]
    }
  }
  return sum
}

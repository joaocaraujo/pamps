/**
 * Parâmetros da calculadora — Festa Completa alinhada à proposta oficial (4h).
 * Festa Lanche: pacote fixo (45 conv., seg–qui, R$ 4.990).
 * Opcionais: valor a consultar (não entram no total; só na mensagem do WhatsApp).
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

/** Festa Completa — lotações tabuladas (igual proposta de orçamento) */
export const COMPLETA_GUEST_TIERS = [50, 60, 80, 100, 120] as const

export type CompletaGuestTier = (typeof COMPLETA_GUEST_TIERS)[number]

/** Tabela oficial de valores Festa Completa (4h) — proposta de orçamento */
export const COMPLETA_PRICES: Record<CalculatorDayType, Record<CompletaGuestTier, number>> = {
  weekday: {
    50: 9390,
    60: 9690,
    80: 10390,
    100: 10990,
    120: 11590
  },
  friSunHoliday: {
    50: 11390,
    60: 11690,
    80: 12390,
    100: 12990,
    120: 13590
  },
  saturday: {
    50: 11890,
    60: 12190,
    80: 12890,
    100: 13490,
    120: 13990
  }
}

/**
 * Festa Lanche — pacote fixo na calculadora (igual texto em packages.items.*)
 * 30 crianças + 15 adultos; só segunda à quinta.
 */
export const FESTA_LANCHE_GUEST_TOTAL = 45

/** Valor fixo do pacote Festa Lanche (R$) */
export const FESTA_LANCHE_BASE_PRICE = 4990

export const CALCULATOR_OPTIONAL_KEYS: CalculatorOptionalKey[] = [
  'personalized',
  'ledLetters',
  'naturalFlowers',
  'facePaint',
  'sparkling',
  'wine',
  'liveCharacter'
]

export const calculatorOptionalItemI18n: Record<CalculatorOptionalKey, string> = {
  personalized: 'packages.complete.items.optionalPersonalized',
  ledLetters: 'packages.complete.items.optionalLedLetters',
  naturalFlowers: 'packages.complete.items.optionalNaturalFlowers',
  facePaint: 'packages.complete.items.optionalFacePaint',
  sparkling: 'packages.complete.items.optionalSparkling',
  wine: 'packages.complete.items.optionalWine',
  liveCharacter: 'packages.complete.items.optionalLiveCharacter'
}

export function getCompletaPrice(guests: CompletaGuestTier, day: CalculatorDayType): number {
  return COMPLETA_PRICES[day][guests]
}

/**
 * Total base do pacote (sem opcionais).
 * - Festa Lanche: ignora guests/day passados — usa sempre 45 conv. e segunda–quinta.
 * - Festa Completa: guests deve pertencer a COMPLETA_GUEST_TIERS; day conforme tabela.
 */
export function getPartyBaseTotal(
  guests: number,
  day: CalculatorDayType,
  party: CalculatorPartyType
): number {
  if (party === 'festaLanche') {
    return FESTA_LANCHE_BASE_PRICE
  }

  return getCompletaPrice(guests as CompletaGuestTier, day)
}

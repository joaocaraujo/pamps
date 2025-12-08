export interface CalculatorConfig {
  baseValues: {
    simplePackage: number
    mediumPackage: number
    topPackage: number
    unitSalgado: number
    unitDoce: number
  }
  dayMultipliers: {
    weekday: number // Segunda a Quinta
    weekend: number // Sexta e Domingo
    saturday: number // Sábado
  }
  packageMultipliers: {
    simple: number
    medium: number
    top: number
  }
  optionalServices: {
    chopp: {
      perPerson: number
    }
    nonAlcoholic: {
      perPerson: number
    }
    dj: {
      fixed: number
    }
    lighting: {
      fixed: number
    }
    recreator: {
      perHour: number
      defaultHours: number
    }
    photographer: {
      fixed: number
    }
  }
  volumeDiscount: {
    threshold: number // Pessoas para aplicar desconto
    discountPercent: number // Percentual de desconto
  }
}

export const calculatorConfig: CalculatorConfig = {
  baseValues: {
    simplePackage: 2500,
    mediumPackage: 4900,
    topPackage: 10500,
    unitSalgado: 8.5,
    unitDoce: 6.0
  },
  dayMultipliers: {
    weekday: 1.0, // Segunda a Quinta
    weekend: 1.15, // Sexta e Domingo
    saturday: 1.25 // Sábado
  },
  packageMultipliers: {
    simple: 1.0,
    medium: 1.45,
    top: 2.10
  },
  optionalServices: {
    chopp: {
      perPerson: 25.0
    },
    nonAlcoholic: {
      perPerson: 12.0
    },
    dj: {
      fixed: 800.0
    },
    lighting: {
      fixed: 500.0
    },
    recreator: {
      perHour: 300.0,
      defaultHours: 4
    },
    photographer: {
      fixed: 1200.0
    }
  },
  volumeDiscount: {
    threshold: 100,
    discountPercent: 0.05 // 5% de desconto
  }
}


/**
 * SEO Schema.org helpers — Centraliza geração de JSON-LD para todas as páginas.
 *
 * Uso:
 *   injectSchema(useLocalBusinessSchema())
 *   injectSchema(useFAQSchema(faqs))
 */

export function useLocalBusinessSchema() {
  const config = useRuntimeConfig()
  const siteUrl = config.public.siteUrl || 'https://pampsbh.com.br'

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Pamps Buffet Infantil',
    description: 'Espaço para festas infantis na Pampulha, Belo Horizonte. Buffet completo, espaço climatizado, até 120 convidados.',
    image: `${siteUrl}/hero-image.jpg`,
    url: siteUrl,
    telephone: '+5531985650550',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. Antônio Abrahão Caram, 420',
      addressLocality: 'Belo Horizonte',
      addressRegion: 'MG',
      postalCode: '31275-000',
      addressCountry: 'BR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -19.8610306,
      longitude: -43.9677566,
    },
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday'],
        opens: '09:00',
        closes: '17:00',
      },
    ],
    sameAs: ['https://www.instagram.com/pampsbh/'],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '1',
    },
  }
}

export function useFAQSchema(faqs: Array<{ q: string; a: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  }
}

export function useBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  const config = useRuntimeConfig()
  const siteUrl = config.public.siteUrl || 'https://pampsbh.com.br'

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${siteUrl}${item.url}`,
    })),
  }
}

export function useImageGallerySchema(name: string, description: string, url: string) {
  const config = useRuntimeConfig()
  const siteUrl = config.public.siteUrl || 'https://pampsbh.com.br'

  return {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name,
    description,
    url: `${siteUrl}${url}`,
  }
}

/**
 * Injeta schema(s) JSON-LD no <head> via useHead.
 */
export function injectSchema(
  schema: Record<string, any> | Record<string, any>[]
) {
  const schemas = Array.isArray(schema) ? schema : [schema]
  useHead({
    script: schemas.map((s) => ({
      type: 'application/ld+json',
      innerHTML: JSON.stringify(s),
    })),
  })
}

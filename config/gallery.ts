/**
 * Galeria de eventos realizados na Pamps.
 *
 * Para adicionar um evento:
 * 1. Crie a pasta public/images/gallery/{slug}/
 * 2. Adicione as fotos (01.webp, 02.webp, …)
 * 3. Inclua um item em galleryEvents abaixo
 */

export interface GalleryEvent {
  /** Nome da pasta em public/images/gallery/ */
  slug: string
  /** Nome exibido na galeria (ex.: "Aniversário da Sofia") */
  title: string
  /** Caminhos absolutos a partir de /public */
  images: string[]
}

export const galleryEvents: GalleryEvent[] = [
  {
    slug: 'aniversario-anthony-2026',
    title: 'Aniversário do Anthony',
    images: [
      '/images/gallery/aniversario-anthony-2026/01.jpeg',
      '/images/gallery/aniversario-anthony-2026/02.jpeg',
      '/images/gallery/aniversario-anthony-2026/03.jpeg',
      '/images/gallery/aniversario-anthony-2026/04.jpeg',
      '/images/gallery/aniversario-anthony-2026/05.jpeg',
      '/images/gallery/aniversario-anthony-2026/06.jpeg',
      '/images/gallery/aniversario-anthony-2026/07.jpeg',
      '/images/gallery/aniversario-anthony-2026/08.jpeg'
    ]
  },
  {
    slug: 'aniversario-luisa-2026',
    title: 'Aniversário da Luísa',
    images: [
      '/images/gallery/aniversario-luisa-2026/01.jpeg',
      '/images/gallery/aniversario-luisa-2026/02.jpeg',
      '/images/gallery/aniversario-luisa-2026/03.jpeg',
      '/images/gallery/aniversario-luisa-2026/04.jpeg',
      '/images/gallery/aniversario-luisa-2026/05.jpeg',
      '/images/gallery/aniversario-luisa-2026/06.jpeg'
    ]
  },
  {
    slug: 'aniversario-renata-2026',
    title: 'Aniversário da Renata',
    images: [
      '/images/gallery/aniversario-renata-2026/01.jpeg',
      '/images/gallery/aniversario-renata-2026/02.jpeg',
      '/images/gallery/aniversario-renata-2026/03.jpeg',
      '/images/gallery/aniversario-renata-2026/04.jpeg',
      '/images/gallery/aniversario-renata-2026/05.jpeg',
      '/images/gallery/aniversario-renata-2026/06.jpeg',
      '/images/gallery/aniversario-renata-2026/07.jpeg',
      '/images/gallery/aniversario-renata-2026/08.jpeg',
      '/images/gallery/aniversario-renata-2026/09.jpeg',
      '/images/gallery/aniversario-renata-2026/10.jpeg',
      '/images/gallery/aniversario-renata-2026/11.jpeg',
      '/images/gallery/aniversario-renata-2026/12.jpeg',
      '/images/gallery/aniversario-renata-2026/13.jpeg'
    ]
  },
  {
    slug: 'aniversario-antonella-2026',
    title: 'Aniversário da Antonella',
    images: [
      '/images/gallery/aniversario-antonella-2026/01.jpeg',
      '/images/gallery/aniversario-antonella-2026/02.jpeg',
      '/images/gallery/aniversario-antonella-2026/03.jpeg',
      '/images/gallery/aniversario-antonella-2026/04.jpeg',
      '/images/gallery/aniversario-antonella-2026/05.jpeg',
      '/images/gallery/aniversario-antonella-2026/06.jpeg'
    ]
  },
  {
    slug: 'aniversario-antonio-2026',
    title: 'Aniversário do Antônio',
    images: [
      '/images/gallery/aniversario-antonio-2026/01.jpeg',
      '/images/gallery/aniversario-antonio-2026/02.jpeg',
      '/images/gallery/aniversario-antonio-2026/03.jpeg',
      '/images/gallery/aniversario-antonio-2026/04.jpeg',
      '/images/gallery/aniversario-antonio-2026/05.jpeg',
      '/images/gallery/aniversario-antonio-2026/06.jpeg'
    ]
  },
  {
    slug: 'aniversario-isis-2026',
    title: 'Aniversário da Isis',
    images: [
      '/images/gallery/aniversario-isis-2026/01.jpeg',
      '/images/gallery/aniversario-isis-2026/02.jpeg',
      '/images/gallery/aniversario-isis-2026/03.jpeg',
      '/images/gallery/aniversario-isis-2026/04.jpeg',
      '/images/gallery/aniversario-isis-2026/05.jpeg',
      '/images/gallery/aniversario-isis-2026/06.jpeg'
    ]
  },
  {
    slug: 'aniversario-joao-2026',
    title: 'Aniversário do João',
    images: [
      '/images/gallery/aniversario-joao-2026/01.jpeg',
      '/images/gallery/aniversario-joao-2026/02.jpeg',
      '/images/gallery/aniversario-joao-2026/03.jpeg',
      '/images/gallery/aniversario-joao-2026/04.jpeg',
      '/images/gallery/aniversario-joao-2026/05.jpeg',
      '/images/gallery/aniversario-joao-2026/06.jpeg'
    ]
  },
  {
    slug: 'aniversario-levi-2026',
    title: 'Aniversário do Levi',
    images: [
      '/images/gallery/aniversario-levi-2026/01.jpeg',
      '/images/gallery/aniversario-levi-2026/02.jpeg',
      '/images/gallery/aniversario-levi-2026/03.jpeg',
      '/images/gallery/aniversario-levi-2026/04.jpeg',
      '/images/gallery/aniversario-levi-2026/05.jpeg',
      '/images/gallery/aniversario-levi-2026/06.jpeg'
    ]
  },
  {
    slug: 'aniversario-marina-2026',
    title: 'Aniversário da Marina',
    images: [
      '/images/gallery/aniversario-marina-2026/01.jpeg',
      '/images/gallery/aniversario-marina-2026/02.jpeg',
      '/images/gallery/aniversario-marina-2026/03.jpeg',
      '/images/gallery/aniversario-marina-2026/04.jpeg',
      '/images/gallery/aniversario-marina-2026/05.jpeg',
      '/images/gallery/aniversario-marina-2026/06.jpeg'
    ]
  }
]

/** Primeira foto de cada evento — usada no carousel do hero da home */
export const heroGallerySlides = galleryEvents
  .filter((event) => event.images.length > 0)
  .map((event) => ({
    src: event.images[0],
    alt: event.title
  }))

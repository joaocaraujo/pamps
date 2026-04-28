function digitsOnly(value: string): string {
  return value.replace(/\D/g, '')
}

function formatBrazilMobileFromE164(digits: string): string {
  const d = digitsOnly(digits)
  if (!d.startsWith('55') || d.length < 12) return d
  const withoutCountry = d.slice(2)
  const ddd = withoutCountry.slice(0, 2)
  const subscriber = withoutCountry.slice(2)
  if (subscriber.length === 9) {
    return `(${ddd}) ${subscriber.slice(0, 5)}-${subscriber.slice(5)}`
  }
  if (subscriber.length === 8) {
    return `(${ddd}) ${subscriber.slice(0, 4)}-${subscriber.slice(4)}`
  }
  return d
}

export const useContact = () => {
  const { t } = useI18n()
  const config = useRuntimeConfig()

  const whatsappPhoneDigits = computed(() =>
    digitsOnly(String(config.public.whatsappPhone ?? '').trim())
  )

  const phoneDisplay = computed(() => {
    const override = String(config.public.phoneDisplay ?? '').trim()
    if (override.length > 0) return override
    return formatBrazilMobileFromE164(whatsappPhoneDigits.value)
  })

  const contactEmail = computed(() =>
    String(config.public.contactEmail ?? '').trim()
  )

  const instagramUrl = computed(() =>
    String(config.public.instagramUrl ?? '').trim()
  )

  const instagramHandle = computed(() => t('contact.instagram.handle'))

  const instagramAriaLabel = computed(() => {
    const handle = instagramHandle.value
    return t('contact.instagram.ariaLabel', { handle: `@${handle}` })
  })

  const telHref = computed(() => {
    const d = whatsappPhoneDigits.value
    return d.length > 0 ? `tel:+${d}` : 'tel:'
  })

  const mailtoHref = computed(() => {
    const e = contactEmail.value
    return e.length > 0 ? `mailto:${e}` : 'mailto:'
  })

  const googleReviewUrl = computed(() =>
    String(config.public.googleReviewUrl ?? '').trim()
  )

  const siteUrl = computed(() => String(config.public.siteUrl ?? '').trim())

  const whatsappNumber = whatsappPhoneDigits

  const whatsappLink = (message?: string) => {
    const text =
      message !== undefined && message !== null && message !== ''
        ? message
        : t('cta.whatsappMessage')
    const encodedMessage = encodeURIComponent(text)
    return `https://wa.me/${whatsappNumber.value}?text=${encodedMessage}`
  }

  return {
    whatsappPhoneDigits,
    whatsappNumber,
    phoneDisplay,
    contactEmail,
    telHref,
    mailtoHref,
    instagramUrl,
    instagramHandle,
    instagramAriaLabel,
    googleReviewUrl,
    siteUrl,
    whatsappLink
  }
}

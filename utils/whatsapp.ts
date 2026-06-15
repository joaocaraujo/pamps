const MOBILE_UA =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i

export function isMobileDevice(): boolean {
  if (import.meta.server) return false
  return MOBILE_UA.test(navigator.userAgent)
}

export function buildWhatsappUrl(phoneDigits: string, message: string): string {
  const phone = phoneDigits.replace(/\D/g, '')
  const encodedMessage = encodeURIComponent(message)
  return `https://api.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`
}

export function openWhatsappUrl(url: string): void {
  if (!url || url === '#') return

  if (isMobileDevice()) {
    window.location.assign(url)
    return
  }

  window.open(url, '_blank', 'noopener,noreferrer')
}

import { ref, onMounted, onUnmounted, type Ref } from 'vue'

/**
 * Dispara quando o elemento entra no viewport (uma vez).
 * Útil para adiar iframes, mapas e componentes pesados abaixo da dobra.
 */
export function useInView(
  target: Ref<HTMLElement | null>,
  options?: IntersectionObserverInit
) {
  const isInView = ref(false)
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    const el = target.value
    if (!el || typeof IntersectionObserver === 'undefined') {
      isInView.value = true
      return
    }

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          isInView.value = true
          observer?.disconnect()
          observer = null
        }
      },
      { rootMargin: '120px', threshold: 0.01, ...options }
    )
    observer.observe(el)
  })

  onUnmounted(() => {
    observer?.disconnect()
    observer = null
  })

  return { isInView }
}

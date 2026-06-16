<template>
  <a
    :href="resolvedHref"
    :target="linkTarget"
    rel="noopener noreferrer"
    @click="onClick"
  >
    <slot />
  </a>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { isMobileDevice, openWhatsappUrl, toAppWhatsappUrl } from '~/utils/whatsapp'

const props = defineProps<{
  message?: string
  href?: string
}>()

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const { whatsappLink } = useContact()

const resolvedHref = computed(() => {
  if (props.href !== undefined && props.href !== '') {
    return props.href
  }
  return whatsappLink(props.message)
})

const linkTarget = computed(() => (isMobileDevice() ? undefined : '_blank'))

function onClick(event: MouseEvent) {
  emit('click', event)

  const url = resolvedHref.value
  if (!url || url === '#') return
  if (event.defaultPrevented) return
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
  if (event.button !== 0) return

  if (isMobileDevice()) {
    event.preventDefault()
    openWhatsappUrl(toAppWhatsappUrl(url))
  }
}
</script>

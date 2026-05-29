/**
 * Garante tema claro por defeito: dark só quando o utilizador escolhe no botão.
 * Quem tinha "system" (OS) guardado passa a light.
 */
export default defineNuxtPlugin(() => {
  const colorMode = useColorMode()

  if (colorMode.preference === 'system') {
    colorMode.preference = 'light'
  }
})

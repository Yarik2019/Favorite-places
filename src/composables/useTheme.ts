import { darkTheme, lightTheme } from 'naive-ui'
import type { GlobalTheme } from 'naive-ui'
import { ref } from 'vue'
const theme = ref<GlobalTheme | false>(false)
export const useTheme = () => {
  const toggleTheme = () => {
    return (theme.value = theme.value = !theme.value ? lightTheme : darkTheme)
  }
  return { theme, toggleTheme }
}

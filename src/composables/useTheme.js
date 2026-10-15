import { ref, onMounted } from 'vue'

const STORAGE_KEY = 'karibase-theme'

export function useTheme() {
  const isDarkMode = ref(false)

  const applyTheme = () => {
    document.documentElement.setAttribute('mode', isDarkMode.value ? 'dark' : 'light')
  }

  const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value
    applyTheme()
    localStorage.setItem(STORAGE_KEY, isDarkMode.value ? 'dark' : 'light')
  }

  onMounted(() => {
    isDarkMode.value = localStorage.getItem(STORAGE_KEY) === 'dark'
    if (isDarkMode.value) applyTheme()
  })

  return { isDarkMode, toggleTheme }
}

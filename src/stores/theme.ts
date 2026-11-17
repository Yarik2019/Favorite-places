import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    isActiveTheme: JSON.parse(localStorage.getItem(`dark-theme`) || 'false'),
  }),

  actions: {
    handleThemeChange() {
      this.isActiveTheme = !this.isActiveTheme
      localStorage.setItem(`dark-theme`, JSON.stringify(this.isActiveTheme))
    },
  },
})

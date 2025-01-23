import { defineStore } from 'pinia'

export enum DarkMode {
  Dark = 'dark',
  Light = 'light',
  System = 'system',
}

export const useActionStore = defineStore('action', {
  state: () => ({
    isDropProfile: false,
    isDropNotification: false,
    darkMode: (localStorage.getItem('darkMode') as DarkMode) || DarkMode.System,
  }),

  actions: {
    toggleProfile() {
      this.isDropProfile = !this.isDropProfile
    },

    toggleNotification() {
      this.isDropNotification = !this.isDropNotification
    },

    toggleDarkMode(mode: DarkMode) {
      this.darkMode = mode
      localStorage.setItem('darkMode', mode)
      this.applyDarkMode()
    },

    initialize() {
      this.applyDarkMode()
    },

    applyDarkMode() {
      if (this.darkMode === DarkMode.System) {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          this.setDarkMode()
        } else {
          this.removeDarkMode()
        }
      } else if (this.darkMode === DarkMode.Dark) {
        this.setDarkMode()
      } else {
        this.removeDarkMode()
      }
    },

    setDarkMode() {
      document.documentElement.classList.add('dark')
    },

    removeDarkMode() {
      document.documentElement.classList.remove('dark')
    },
  },
})

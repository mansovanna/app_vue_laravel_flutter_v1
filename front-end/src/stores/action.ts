import { defineStore } from 'pinia'

export const useActionStore = defineStore('action', {
  state: () => ({
    isDropProfile: false,
  }),

  actions: {
    toogleProfile() {
      this.isDropProfile = !this.isDropProfile
    },
  },
})

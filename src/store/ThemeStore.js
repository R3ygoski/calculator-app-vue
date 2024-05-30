import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
    state(){
        return {
            themeState: 'dark',
            themeNumber: 1,
        }
    },
    actions: {
        setDarkTheme(){
            this.themeState = 'dark'
            this.themeNumber = 1
        },
        setLightTheme(){
            this.themeState = 'light'
            this.themeNumber = 2
        },
        setCustomTheme(){
            this.themeState = 'custom'
            this.themeNumber = 3
        }
    }
})
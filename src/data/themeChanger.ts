const main:HTMLElement = document.querySelector('main')!

export default class Toggler{
    main = main

    setDarkTheme():void{
        this.main.classList.remove('light')
        this.main.classList.remove('custom')
        this.main.classList.add('dark')
        this.setLocalStorage('dark')
    }
    setLightTheme():void{
        this.main.classList.remove('dark')
        this.main.classList.remove('custom')
        this.main.classList.add('light')
        this.setLocalStorage('light')
    }
    setCustomTheme():void{
        this.main.classList.remove('dark')
        this.main.classList.remove('light')
        this.main.classList.add('custom')
        this.setLocalStorage('custom')
    }

    setLocalStorage(themeColor:string):void{
        localStorage.setItem('theme', themeColor)
    }
    getLocalStorage():string|null {
        return localStorage.getItem('theme')
    }
}
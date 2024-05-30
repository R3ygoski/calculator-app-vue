import { defineStore } from 'pinia'

export const useCalculatorStore = defineStore('calculator',{
    state(){
        return {
            result: '',
            length: 0,
            isTextBig: false
        }
    },
    actions: {
        reset(){
            this.result = ''
        },
        setLength(){
            this.length = this.result.length
            this.checkLength()
            return this.length
        },
        checkLength(){
            if (this.length >= 12){
                this.isTextBig = true
            } else {
                this.isTextBig = false
            }
        }
    }
})
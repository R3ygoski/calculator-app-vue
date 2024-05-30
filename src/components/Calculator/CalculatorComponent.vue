<script setup lang="ts">
    // Data
    import buttons from '../../data/dataBtn'

    // Component
    import ButtonComponent from './ButtonComponent.vue';

    // Global State
    import { useThemeStore } from '../../store/ThemeStore';
    import { useCalculatorStore } from '../../store/CalculatorStore';

    const theme = useThemeStore()
    const calculator = useCalculatorStore()

    let acc:string = ''
    const calculatorFunction = (value:string) => {
        switch (value) {
            case '=':
                calculator.result = (calculator.result && eval(calculator.result)).toString();
                calculator.setLength()
                break;
            case 'DEL':
                calculator.result = calculator.result.slice(0, -1);
                calculator.setLength()
                break;
            case 'RESET':
                calculator.reset();
                break;
            case 'x':
                value = '*';
            default:
                calculator.result += value;
                calculator.setLength()
        }
    }

</script>

<template>
    <section :class="theme.themeState">
        <ButtonComponent type="button" v-for="button in buttons" :classType="'btn__' + button.style" :value="button.value" :text="button.value" @:click="(e)=>{calculatorFunction(e.target.value)}">
        </ButtonComponent>
    </section>
</template>

<style scoped lang="scss">
    @use '../../scss/var' as v;
    @use '../../scss/mixins/calculatorMixin' as cmx;

    @keyframes calculator-in {
        0% {transform: translate(0, 100vh);}
        100% {transform: translate(0, 0);}
    }

    section {
        display: grid;
        grid-template-columns: repeat(4, 67px);
        grid-template-rows: repeat(5, 71.5px);
        justify-items: center;
        align-items: center;
        height: 420px;
        margin-top: 1.75rem;
        padding: 1.25rem;
        border-radius: 0.5rem;
        gap: 0.375rem;

        animation: calculator-in 0.5s ease-in-out;

        button:nth-child(17),button:nth-child(18){
            width: 97.5%;
        }
        button:nth-child(17){
            grid-area: 5/1/6/3;
        }
        button:nth-child(18){
            grid-area: 5/3/6/5;
        }
    }
    .dark {
        @include cmx.calculatorTheme('dark');
    }
    .light {
        @include cmx.calculatorTheme('light');
    }
    .custom {
        @include cmx.calculatorTheme('custom');
    }

    @media (min-width: 1024px){
        section {
            grid-template-columns: repeat(4, 119px);
            grid-template-rows: repeat(5, 82px);
            height: 480px;
        }
    }
</style>
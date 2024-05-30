<script setup lang="ts">
    import { useCalculatorStore } from '../store/CalculatorStore';
import { useThemeStore } from '../store/ThemeStore';

    const theme = useThemeStore()
    const calculator = useCalculatorStore()

</script>

<template>
    <div :class="theme.themeState">
        <p :class="calculator.isTextBig?'text-small':''">{{ calculator.result }}</p>
    </div>    
</template>

<style scoped lang="scss">
    @use '../scss/var' as v;
    @use '../scss/mixins/displayMixin' as dmx;

    @keyframes display-in {
        0% {transform: translate(0, -100vh);}
        100% {transform: translate(0, 0);}
    }

    div {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        height: 100%;
        width: 100%;
        margin-top: 2rem;
        padding: 0 1.425rem;
        border-radius: 0.5rem;
        font-size: 2.5rem;
        
        animation: display-in 0.5s ease-in-out;
        
        p {
            max-width: 100%;
            text-wrap: break-word;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .text-small {
            font-size: 2rem;
        }
    }
    .dark {
        @include dmx.displayTheme('dark');
    }
    .light {
        @include dmx.displayTheme('light');
    }
    .custom {
        @include dmx.displayTheme('custom');
    }

    @media (min-width: 1024px){
        div {
            height: 128px;
            font-size: 3.5rem;
        }
    }
</style>
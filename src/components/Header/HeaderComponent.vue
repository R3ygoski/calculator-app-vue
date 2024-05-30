<script setup lang="ts">
    import { useThemeStore } from '../../store/ThemeStore';
    import ThemeComponent from './ThemeComponent.vue';
    
    const theme = useThemeStore()

</script>

<template>
    <header :class="theme.themeState">
        <h1>calc</h1>
        <ThemeComponent/>
    </header>
</template>

<style scoped lang="scss">
    @use '../../scss/var' as v;
    @use '../../scss/mixins/headerMixin' as hmx;

    @keyframes header-in {
        0% {transform: translate(0, -100vh);}
        100% {transform: translate(0, 0);}
    }
    
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        animation: header-in 0.5s ease-in-out;

        h1 {
            margin: 0.25rem 0 0 0.25rem;
        }
    }
    .dark {
        @include hmx.headerTheme('dark')
    }
    .light {
        @include hmx.headerTheme('light')
    }
    .custom {
        @include hmx.headerTheme('custom')
    }

    @media (min-width: 1024px){
        header {
            align-self: flex-end;
            h1 {
                font-size: 2rem;
            }
        }
    }
</style>
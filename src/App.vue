<script setup lang="ts">
    import HeaderComponent from './components/Header/HeaderComponent.vue';
    import CalculatorComponent from './components/Calculator/CalculatorComponent.vue';
    import DisplayComponent from './components/DisplayComponent.vue';
</script>

<template>
    <article>
        <HeaderComponent/>
        <DisplayComponent/>
        <CalculatorComponent/>
    </article>
</template>

<style scoped lang="scss">
    @use './scss/var' as v;

    article {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 664px;
        width: 375px;
        padding: 2rem 1.5rem;
    }

    @media (min-width: 1024px){
        article {
            display: grid;
            grid-template-columns: 100%;
            grid-template-rows: 1fr 1fr 1fr;
            height: 832px;
            width: 586px;
        }
    }
</style>
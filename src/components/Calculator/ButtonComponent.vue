<script setup lang="ts">
    import { useThemeStore } from '../../store/ThemeStore';

    defineProps({
        text: String,
        classType: String,
    })

    const theme = useThemeStore()

</script>

<template>
    <button type="button" class="btn" :class=" theme.themeState + '__' + classType">
        {{ text }}
    </button>
</template>

<style scoped lang="scss">
    @use '../../scss/var' as v;
    @use '../../scss/mixins/buttonMixin' as bmx;

    .btn{
        font-size: 2rem;
        border: none;
        border-bottom: 4px solid;
        border-radius: 0.5rem;
        width: 90%;
        height: 90%;
        transition: 0.25s ease-out;
        cursor: pointer;
        &:hover {
            filter: brightness(1.2);
        }
        &:active {
            filter: brightness(0.8);
        }
    }
    .dark__btn__normal {
        @include bmx.buttonTheme('dark', 'normal')
    }
    .light__btn__normal {
        @include bmx.buttonTheme('light', 'normal')
    }
    .custom__btn__normal {
        @include bmx.buttonTheme('custom', 'normal')
    }
    .dark__btn__erase {
        @include bmx.buttonTheme('dark', 'erase')
    }
    .light__btn__erase {
        @include bmx.buttonTheme('light', 'erase')
    }
    .custom__btn__erase {
        @include bmx.buttonTheme('custom', 'erase')
    }
    .dark__btn__result {
        @include bmx.buttonTheme('dark', 'result')
    }
    .light__btn__result {
        @include bmx.buttonTheme('light', 'result')
    }
    .custom__btn__result {
        @include bmx.buttonTheme('custom', 'result')
    }
    .dark__btn__erase, .dark__btn__result, .light__btn__erase, .light__btn__result, .custom__btn__erase, .custom__btn__result {
        font-size: 1.25rem;
    }
</style>
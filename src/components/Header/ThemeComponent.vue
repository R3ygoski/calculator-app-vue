<script setup lang="ts">
    
    import { useThemeStore } from '../../store/ThemeStore'
    import Toggler from '../../data/themeChanger'

    const theme = useThemeStore()
    const mainSectionTheme = new Toggler
    const storedTheme:string = mainSectionTheme.getLocalStorage()!
    
    let count = theme.themeNumber
    const toggler = (storedTheme:string|null) => {
        count++
        switch(storedTheme){
            case 'dark':
                count = 1
                break
            case 'light':
                count = 2
                break
            case 'custom':
                count = 3
                break
            case null:
                if(window.matchMedia('(prefers-color-scheme: dark)').matches){
                    count = 1
                } else {
                    count = 2
                }
                break
            default:
                break
        }

        if (count===1){
            theme.setDarkTheme()
            mainSectionTheme.setDarkTheme()
        } else if (count===2){
            theme.setLightTheme()
            mainSectionTheme.setLightTheme()
        } else if (count===3){
            theme.setCustomTheme()
            mainSectionTheme.setCustomTheme()
        } else {
            theme.setDarkTheme()
            mainSectionTheme.setDarkTheme()
            count = 1
        }
    }

    document.addEventListener('DOMContentLoaded', ()=>{
        toggler(storedTheme)
    })

</script>

<template>
    <section class="theme-section">
        <label class="theme-section__label">Theme</label>
        <div class="theme-section__theme" @:click="toggler">
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <div class="theme-section__theme__toggler" :class="theme.themeState + '__toggler'">
                <div :class="theme.themeState + '__circle'"></div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
    @use '../../scss/var' as v;
    @use '../../scss/mixins/themeMixin' as tmx;

    .theme-section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 138px;
        font-size: 0.825rem;
        text-transform: uppercase;
        &__label {
            margin-top: 0.85rem;
        }
        &__theme {
            display: grid;
            grid-template-columns: 33% 33% 34%;
            grid-template-rows: 35% 65%;
            justify-items: center;
            width: 72px;
            height: 40px;
            &__toggler {
                display: flex;
                align-items: center;

                grid-column: 1/4;
                grid-row: 2/3;

                width: 100%;
                border-radius: 1rem;
                cursor: pointer;
                &>div {
                    margin-left: 0.25rem;
                    width: 20px;
                    height: 20px;
                    border-radius: 1rem;
                    transition: 0.25s ease-in-out;
                    &:hover {
                        filter: brightness(1.2);
                    }
                }
                .dark__circle {
                    transform: translate(0px);
                    @include tmx.togglerBallTheme('dark')
                }
                .light__circle {
                    transform: translate(calc(20px + 4px));
                    @include tmx.togglerBallTheme('light')
                }
                .custom__circle {
                    transform: translate(calc(40px + 4px));
                    @include tmx.togglerBallTheme('custom')
                }
            }
            .dark__toggler {
                @include tmx.togglerTheme('dark')
            }
            .light__toggler {
                @include tmx.togglerTheme('light')
            }
            .custom__toggler {
                @include tmx.togglerTheme('custom')
            }
        }
    }
</style>
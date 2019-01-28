<template>
    <div>
        <app-header/>
        <app-menu></app-menu>
         <transition name="slide-fade" mode="out-in">
            <router-view></router-view>
         </transition>
        <app-footer/>
    </div>    
</template>

<script>
import menuComponent from '../menu/Menu-header.vue'
import headerComponent from '../header/Header.vue'
import footerComponent from '../footer/Footer.vue'

export default {
    data () {
        return {

        }
    },
    components:{
        appHeader : headerComponent,
        appFooter: footerComponent,
        appMenu: menuComponent,
    }
}
</script>

<style>

</style>

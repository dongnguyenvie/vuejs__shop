<template>
    <div>
        
        <app-header/>
         <transition name="slide-fade" mode="out-in">
            <router-view></router-view>
         </transition>
        <app-footer/>
    </div>    
</template>

<script>
import headerComponent from '../header/Header.vue'
import footerComponent from '../footer/Footer.vue'

export default {
    data () {
        return {

        }
    },
    components:{
        appHeader : headerComponent,
        appFooter: footerComponent
    }
}
</script>

<style>

</style>

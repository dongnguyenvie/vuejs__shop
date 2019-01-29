<template>
    <div>
        <app-header/>
        <app-menu/>
        <app-menu-fixed v-bind:style="{ transform: isMenuOpen ? 'translateY(0)': 'translateY(-67px)' }"> </app-menu-fixed>
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
import menuFixedComponent from '../menu/menu-fixed/Menu-fixed.vue'

export default {
    data () {
        return {
            isMenuOpen: false
        }
    },
    components:{
        appHeader : headerComponent,
        appFooter: footerComponent,
        appMenu: menuComponent,
        appMenuFixed: menuFixedComponent,
    },
    methods:{
        handleScroll () {
            this.isMenuOpen = window.scrollY > 70 ? true: false
        }
    },
    created(){
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed(){
        window.removeEventListener('scroll', this.handleScroll);
    }
}
</script>

<style>

</style>

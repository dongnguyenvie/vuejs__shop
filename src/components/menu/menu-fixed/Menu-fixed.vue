<template>
    <div class="container-fluid menu__fixed">
        <div class="container ">
            <div class="row">
                <div class="col-4">
                    <router-link :to="{path: '/home'}" tag="a">
                       <img src="/src/assets/images/logo.png" alt="">
                   </router-link>
                </div>
                <div class="col-8">
                    <app-menu/>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import menuComponent from '../menu-content/Menu-header-content.vue'

export default {
    components: {
        appMenu: menuComponent
    }
}
</script>

<style lang="scss">
    @import 'Menu-fixed.scss'
</style>

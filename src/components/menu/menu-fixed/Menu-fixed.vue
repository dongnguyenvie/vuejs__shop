<template>
    <div class="container-fluid menu__fixed">
        <div class="container ">
            <div class="row">
                <div class="col-4">
                    <img src="/src/assets/images/logo.png" alt="">
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

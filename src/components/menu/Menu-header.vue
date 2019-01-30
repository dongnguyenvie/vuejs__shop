<template>
    <div class="container-fluid menu-header-index">
        <div class="container">
            <app-menu/>
        </div>
    </div>
</template>

<script>

import menuComponent from './menu-content/Menu-header-content.vue'

export default {
    data () {
        return {
            
        }
    },
    components:{
        appMenu:menuComponent
    }
}
</script>

<style lang="scss" scoped>
@import 'Menu-header.scss'
</style>



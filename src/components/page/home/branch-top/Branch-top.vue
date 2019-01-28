<template>
    <div class="container branch-top">
        <div class="branch-top__tool">
            <div class="tool__title">
                <h3 class="h2">Top Brands</h3>
            </div>
            <div class="tool__view">

            </div>
        </div>
        <div class="branch-top__block">
            <carousel 
                :autoplay="true" 
                :responsive="{0:{items:6, dots:false ,center:true,loop:true, nav:false, margin:10}}">
                <div class="product-slide__block"
                    v-for="(branch, index) in branchs" :key="index">
                    <div class="product-slide__border">
                        <div class="block__img">
                            <a :href="branch.link"><img :src="branch.images"></a>
                        </div>
                    </div>
                </div>
            </carousel>
        </div>
    </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
import branchs from './data.js'

export default {
    data () {
        return {
            branchs
        }
    },
    components: {
        carousel
    }
}
</script>

<style lang="scss" scoped>
    @import 'Branch-top.scss'
</style>

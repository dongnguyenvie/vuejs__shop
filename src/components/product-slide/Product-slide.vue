<template>
    <div class="container-fluid product-slide-container">
        <div class="product-slide">
            <carousel 
                :autoplay="true" 
                :responsive="{0:{items:2, dots:false ,center:true,loop:true, nav:false, margin:10}}">
                <div class="product-slide__block"
                    v-for="(slide, index) in slides" :key="index">
                    <div class="product-slide__border">
                        <div class="block__img">
                            <img :src="slide.images">
                        </div>
                        <div class="block__context">
                            <h4 class="context__title">{{slide.title}}</h4>
                            <p class="context__discription h1">{{slide.discription}} </p>
                            <p class="context__sell h1">{{slide.sell}}<sup class="bold-sup">{{slide.typeSell}}</sup></p>
                            <button class="btn btn-primary">Shop now</button>
                        </div>
                    </div>
                </div>
            </carousel>
        </div>
    </div>  
</template>

<script>
import carousel from 'vue-owl-carousel'
import slides from './data.js'

export default {
    data () {
        return{
            slides
        }
    },
    components:{
        carousel,
    }
}
</script>

<style lang="scss" scoped>
    .owl-stage{
        overflow: unset !important;
    }
    @import 'Product-slide'
    
</style>

<template>
    <div class="container-fluid product-slide-container">
        <div class="product-slide">
            <carousel :autoplay="true" :responsive="{0:{items:1,nav:false},600:{items:2, dots:false ,center:true,loop:true, nav:false, margin:10}}">

                <div class="product-slide__block">
                    <div class="product-slide__border">
                        <div class="block__img">
                            <img src="../../assets/images/home2-slider-1.jpg">
                        </div>
                        <div class="block__context">
                            <h4 class="context__title">Women's Special</h4>
                            <p class="context__discription h1">Winter Sale </p>
                            <p class="context__sell h1">50%<sup class="bold-sup">Flat Off</sup></p>
                            <button class="btn btn-primary">Shop now</button>
                        </div>
                    </div>
                </div>

                <div class="product-slide__block">
                    <div class="product-slide__border">
                        <div class="block__img">
                            <img src="../../assets/images/home2-slider-2.jpg">
                        </div>
                        <div class="block__context">
                            <h4 class="context__title">Special Deal</h4>
                            <p class="context__discription h1">Winter Sale </p>
                            <p class="context__sell h1">10% <sup class="bold-sup">Off</sup></p>
                            <button class="btn btn-primary">Shop now</button>
                        </div>
                    </div>
                </div>

                <div class="product-slide__block">
                    <div class="product-slide__border">
                        <div class="block__img">
                            <img src="../../assets/images/home2-slider-3.jpg">
                        </div>
                        <div class="block__context">
                            <h4 class="context__title">Special Deal</h4>
                            <p class="context__discription h1">Mens Collection</p>
                            <p class="context__sell h1">40%<sup class="bold-sup">Flat Off</sup></p>
                            <button class="btn btn-primary">Shop now</button>
                        </div>
                    </div>
                </div>

                <div class="product-slide__block">
                    <div class="product-slide__border">
                        <div class="block__img">
                            <img src="../../assets/images/home2-slider-4.jpg">
                        </div>
                        <div class="block__context">
                            <h4 class="context__title">Women's Special</h4>
                            <p class="context__discription h1">Winter Sale </p>
                            <p class="context__sell h1">50%<sup class="bold-sup">Flat Off</sup></p>
                            <button class="btn btn-primary">Shop now</button>
                        </div>
                    </div>
                </div>

                <div class="product-slide__block">
                    <div class="product-slide__border">
                        <div class="block__img">
                            <img src="../../assets/images/home2-slider-5.jpg">
                        </div>
                        <div class="block__context">
                            <h4 class="context__title">New Arrival</h4>
                            <p class="context__discription h1">Winter Sale </p>
                            <p class="context__sell h1">30%<sup class="bold-sup">Off</sup></p>
                            <button class="btn btn-primary">Shop now</button>
                        </div>
                    </div>
                </div>

                <div class="product-slide__block">
                    <div class="product-slide__border">
                        <div class="block__img">
                            <img src="../../assets/images/home2-slider-6.jpg">
                        </div>
                        <div class="block__context">
                            <h4 class="context__title">Women's Special</h4>
                            <p class="context__discription h1">Winter Sale </p>
                            <p class="context__sell h1">50%<sup class="bold-sup">Flat Off</sup></p>
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

export default {
    data(){
        return{

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

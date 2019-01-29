<template>
    <div class="container product-page">
        <div class="row">
            <div class="col-12 col-md-3">

            </div>
            <div class="col-12 col-md-9 page__product">
                <div class="product__tool">

                </div>
                <div class="row">
                    <div class="col-md-4 col-sm-4 col-6 product__context"
                        v-for="(product, index) in products" :key="index">
                        <div class="product__block">
                            <div class="block__img">
                                <a href="#"><img :src="product.img" alt=""></a>
                            </div>
                            <div class="block__content">
                                <h5><a href="#">{{product.name}}</a></h5>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import products from './data.js'
export default {
    data () {
        return {
            products
        }
    }
}
</script>

<style lang="scss">

</style>

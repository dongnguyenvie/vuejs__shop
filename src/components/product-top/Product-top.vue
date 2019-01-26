<template>
    <div class="container product-wrap">
        <div class="product-wrap__tool">
            <div class="tool__title">
                <h3 class="h2">
                        Top Products
                </h3>
            </div>
            <div class="tool__view">
                <a href="#">View All</a>
            </div>
        </div>
        <div class="product-wrap__block">
            <div class="row">
                <div class="col-md-3 col-sm-4 col-6"
                    v-for="(product, index) in products" :key="index">
                    <div class="block__context">
                        <div class="context__img">
                            <img :src="product.images" alt="">
                        </div>
                        <div class="context__content">
                            <p class="content__category">
                                <a href="#">{{product.category}}</a>
                            </p>
                            <h5><a href="#">{{product.name}}</a></h5>
                            <p class="price">{{product.price}}</p>

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

<style lang="scss" scoped>
    @import 'Product-top'
</style>

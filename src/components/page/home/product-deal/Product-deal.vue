<template>
    <div class="container product-deal">
        <div class="product-wrap__title-toolbar">
            <div class="title-toolbar__block">
                <div class="block__title">
                    <h3 class="h2">
                         Lightening Deals
                    </h3>
                </div>
                <div class="block__view">
                    <a href="#">View All</a>
                </div>
            </div>
        </div>
        <div class="product-wrap__block">
            <div class="row">
                <div class="col-md-3 col-sm-4 col-6 "
                    v-for="(product, index) in listProductDeal" :key="index">
                    <div class="block__context">
                        <div class="context__img">
                            <img :src="product.images" alt="">
                        </div>
                        <div class="context__content">
                            <h5><a href="#">{{product.name}}</a></h5>
                            <p class="content__category">
                                <a href="#">{{product.category}}</a>
                            </p>
                            <p class="price">{{product.price}}</p>

                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import listProductDeal from './data.js'
export default {
    data () {
        return {
            listProductDeal
        }
    }
}
</script>

<style lang="scss" scoped>
    @import 'Product-deal.scss'
</style>
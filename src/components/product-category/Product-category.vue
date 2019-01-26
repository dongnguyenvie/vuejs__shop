<template>
    <div class="container product-category">
        <div class="row">
            <div class="col-12 col-sm-6 col-md-4 product-category__block"
                v-for="(category, index) in productCategorys" :key="index">
                <a href="#">
                    <img :src="category.images" alt="">
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import productCategorys from './data.js'

export default {
    data () {
        return {
            productCategorys
        }
    }
}
</script>

<style lang="scss" scoped>
    @import 'product-category.scss'
</style>

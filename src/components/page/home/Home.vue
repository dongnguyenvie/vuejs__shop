<template>
  <div id="app">

    <!--product slide-->
    <app-product-slide/>
    <!--product-category-images-->
    <app-producte-category/>
    <!-- product wrap -->
    <app-product-wrap/>
    <!-- product top -->
    <app-product-top/>
    <!-- top branch -->
    <app-top-branch />
    <!-- subscribe form -->
    <app-subscribe-form />


  </div>
</template>

<script>


import productSlide from './product-slide/Product-slide.vue'
import productCategory from './product-category/Product-category.vue'
import productWrap from './product-deal/Product-deal.vue'
import productTop from './product-top/Product-top.vue'
import topBranch from './Branch-top/Branch-top.vue'
import subscribeForm from './subscribe-form/Subscribe-form.vue'


export default {
  name: 'app',
  data () {
    return {
    }
  },
  components:{
    appProductSlide: productSlide,
    appProducteCategory:productCategory,
    appProductWrap: productWrap,
    appProductTop: productTop,
    appTopBranch: topBranch,
    appSubscribeForm: subscribeForm,
  }
}
</script>

<style>
</style>

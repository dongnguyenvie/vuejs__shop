<template>
  <div id="app">
    <!--header index -->
    <app-header/>
    <!--menu index-->
    <app-menu-header/>
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

    <!-- END -->
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
  </div>
</template>

<script>
import headerComponent from './components/header/Header.vue'
import menuHeaderComponent from './components/menu/Menu-header.vue'
import productSlide from './components/product-slide/Product-slide.vue'
import productCategory from './components/product-category/Product-category.vue'
import productWrap from './components/product-deal/Product-deal.vue'
import productTop from './components/product-top/Product-top.vue'
import topBranch from './components/Branch-top/Branch-top.vue'
import subscribeForm from './components/subscribe-form/Subscribe-form.vue'

export default {
  name: 'app',
  data () {
    return {
    }
  },
  components:{
    appHeader: headerComponent,
    appMenuHeader: menuHeaderComponent,
    appProductSlide: productSlide,
    appProducteCategory:productCategory,
    appProductWrap: productWrap,
    appProductTop: productTop,
    appTopBranch: topBranch,
    appSubscribeForm: subscribeForm
  }
}
</script>

<style>
body{
  color: rgba(0,0,0,.87);
}
</style>

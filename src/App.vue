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
  </div>
</template>

<script>
import headerComponent from './components/header/Header.vue'
import menuHeaderComponent from './components/menu/Menu-header.vue'
import productSlide from './components/product-slide/Product-slide.vue'
import productCategory from './components/product-category/Product-category.vue'
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
    appProducteCategory:productCategory
  }
}
</script>

<style>

</style>

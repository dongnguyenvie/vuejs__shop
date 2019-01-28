<template>
  <div id="app">
  <!--header index -->
    <app-header/>

    <router-view></router-view>

    <!--footer-->
    <app-footer/>
    <!-- END -->
  </div>
</template>

<script>




export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style>
</style>

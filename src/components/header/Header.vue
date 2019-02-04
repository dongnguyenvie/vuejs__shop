<template>
    <div class="container-fluid header">
         <!-- <router-link to="/test">Go to header</router-link>
         <router-link to="/home">Go to home</router-link>
         <router-link to="/test/menu">Go to menu</router-link> -->
       <div class="container pt-3">
           <div class="row">
               <div class="header__logo col-md-3">
                   <router-link :to="{path: '/home'}" tag="a">
                       <img src="../../assets/images/logo.png" alt="">
                   </router-link>
               </div>
               <div class="header__search col-md-6">
                   <form action="">
                       <div class="form-group">
                           <font-awesome-icon icon="search" class="search__icon" />
                           <input type="text" class="form-control" placeholder="Enter a keyword to search">
                       </div>
                   </form>
               </div>
               <div class="col-md-3 header__profile">
                    <p>
                        <span class="profile__cart --orange" @click="showCart=!showCart"><font-awesome-icon  icon="shopping-cart" />
                        <!-- cart component -->
                        <transition v-if="showCart" name="fade">
                            <app-cart/>
                        </transition>
                            
                        </span>
                        <span class="profile__like --orange"><font-awesome-icon icon="heart" /></span>
                        <span class="profile__avartar">
                            <img v-bind:src="avartar" alt="">
                        </span>
                    </p>
               </div>
           </div>
       </div>
       
      
    </div>
</template>

<script>
import cartComponent from './cart/Cart.vue'

export default{
    data(){
        return {
            avartar: 'https://i.imgur.com/01FDkUW.jpg',
            showCart: false,
            isMenuOpen: false
        }
    },
 
    components:{
        appCart : cartComponent
    }


}
</script>

<style lang="scss" scoped>
     @import 'Header.scss'
</style>

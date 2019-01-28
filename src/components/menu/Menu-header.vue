<template>
    <div class="container-fluid menu-header-index">
        <div class="container">
            <nav>
                <ul class="nav__ul">
                    <li v-for="(menu, index) in data" :key="index" :class="menu.type">
          
                        <router-link :to="{path: menu.path}" tag="a">
                            {{menu.name}}
                        </router-link>

                        <ul v-if="menu.children && menu.type=='nav__dropdown'" class="sub-menu">
                            <li v-for="(sub, index) in menu.children" :key="index">

                                <router-link :to="{path: sub.path}" tag="a">
                                    {{sub.name}}
                                </router-link>

                            </li>
                        </ul>
                        <ul v-else-if="menu.type=='nav__dropdown-style'" class="sub-menu">
                            <li v-for="(subs, key) of menu.children" :key="key">
                                    <a href="#" >{{subs.name}}</a>
                                    <ul>
                                        <li v-for="(sub, index) in subs.children" :key="index">
                                            <router-link :to="{path: sub.path}" tag="a">
                                                {{sub.name}}
                                            </router-link>
                                        </li>
                                    </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <!-- <nav>
                <ul class="nav__ul">
                    <li class="nav__dropdown">
                       <a href="#">Home</a> 
                       <ul class="sub-menu">
                           <li>
                               <a href="#">HOME ONE</a> 
                               <a href="#">home two</a>
                               <a href="#">home tree</a>
                           </li>
                       </ul>
                    </li>
                    <li class="nav__dropdown">
                       <a href="#">shop</a> 
                       <ul class="sub-menu">
                           <li>
                               <a href="#">product details</a> 
                               <a href="#">cart</a>
                               <a href="#">checkout</a>
                               <a href="#">payment</a>   
                           </li>
                       </ul>
                    </li>
                    <li class="nav__dropdown">
                       <a href="#">Accessories</a> 
                       <ul class="sub-menu">
                           <li>
                               <a href="#">Home 1</a> 
                               <a href="#">Home 2</a>
                               <a href="#">Home 3</a>
                               <a href="#">Home 4</a>   
                           </li>
                       </ul>
                    </li>
                    <li class="nav__dropdown-style">
                       <a href="#">Categories</a> 
                       <ul class="sub-menu">
                           <li>
                               <a href="#">Hello one</a>
                               <ul>
                                    <li>
                                        <a href="#">Home one</a>   
                                    </li>
                                    <li>
                                        <a href="#">Home two</a>   
                                    </li>
                                    <li>
                                        <a href="#">Home tree</a>   
                                    </li>
                                    <li>
                                        <a href="#">Home four</a>   
                                    </li>
                               </ul>
                            </li>
                            <li>
                               <a href="#">Hello one</a>
                               <ul>
                                    <li>
                                        <a href="#">Home one</a>   
                                    </li>
                                    <li>
                                        <a href="#">Home two</a>   
                                    </li>
                                    <li>
                                        <a href="#">Home tree</a>   
                                    </li>
                                    <li>
                                        <a href="#">Home four</a>   
                                    </li>
                               </ul>
                            </li>
                            <li>
                               <a href="#">Hello one</a>
                               <ul>
                                    <li>
                                        <a href="#">Home one</a>   
                                    </li>
                                    <li>
                                        <a href="#">Home two</a>   
                                    </li>
                                    <li>
                                        <a href="#">Home tree</a>   
                                    </li>
                                    <li>
                                        <a href="#">Home four</a>   
                                    </li>
                               </ul>
                            </li>
                            <li>
                               <a href="#">Hello one</a>
                               <ul>
                                    <li>
                                        <a href="#">Home one</a>   
                                    </li>
                                    <li>
                                        <a href="#">Home two</a>   
                                    </li>
                                    <li>
                                        <a href="#">Home tree</a>   
                                    </li>
                                    <li>
                                        <a href="#">Home four</a>   
                                    </li>
                               </ul>
                            </li>
                            
                       </ul>
                    </li>
                    <li class="nav__dropdown">
                       <a href="#">pages</a> 
                       <ul class="sub-menu">
                           <li>
                               <a href="#">Home 1</a> 
                               <a href="#">Home 2</a>
                               <a href="#">Home 3</a>
                               <a href="#">Home 4</a>   
                           </li>
                       </ul>
                    </li>
                    <li class="nav__dropdown">
                       <a href="#">session</a> 
                       <ul class="sub-menu">
                           <li>
                               <a href="#">Home 1</a> 
                               <a href="#">Home 2</a>
                               <a href="#">Home 3</a>
                               <a href="#">Home 4</a>   
                           </li>
                       </ul>
                    </li>
                    <li class="nav__dropdown">
                       <a href="#">contact us</a> 
                       <ul class="sub-menu">
                           <li>
                               <a href="#">Home 1</a> 
                               <a href="#">Home 2</a>
                               <a href="#">Home 3</a>
                               <a href="#">Home 4</a>   
                           </li>
                       </ul>
                    </li>
                </ul>
            </nav> -->
        </div>
    </div>
</template>

<script>
import data from './data.js'

export default {
    data () {
        return {
            data
        }
    }
}
</script>

<style lang="scss" scoped>
@import 'Menu-header.scss'
</style>



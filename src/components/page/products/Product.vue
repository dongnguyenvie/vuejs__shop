<template>
    <div class="container product-page">
        <div class="row">
            <div class="col-12 col-md-3 product__tool">
                <div>
                    <div class="tool__wrap">
                        <input class="wrap__input" type="text" placeholder="Search a product" 
                            v-model='searchVal'>
                    </div>
                    <div class="tool__wrap">
                        <div class="wrap__title">
                            <b>Show results for</b>
                        </div>
                        <ul class="wrap__ul">
                            <li v-for="(menu, index) in lstMenu" :key="index">
                                <font-awesome-icon  icon="angle-right" />
                                <a href="" @click.prevent="activeClass($event)">{{menu.name}} 
                                <span class="badge badge-secondary">{{menu.count}}</span></a>
                                <ul>
                                    <li v-for="(menuChild, index) in menu.children" :key="index">
                                        <a href="#" 
                                            @click.prevent="checkFilterProductByCate($event)"
                                            :data-id='menuChild.id' >{{menuChild.name}} 
                                        <span class="badge badge-secondary">{{menuChild.count}}</span></a>  
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div class="tool__wrap">
                        <div class="wrap__title">
                            <b>Categories</b>
                        </div>
                        <ul class="wrap__ul">
                            <li v-for="(category, index) in categories" :key="index">
                                <label for="">
                                    <input type="checkbox"
                                        :data-id='category.id'
                                        @change='checkFilterProduct($event)'/>
                                    {{category.name}} 
                                    <span class="badge badge-secondary">{{category.count}}</span>
                                </label>
                            </li>
                        </ul>
                    </div>


                </div>
            </div>
            <div class="col-12 col-md-9 page__product">
                <div class="row">
                    <div class="col-md-4 col-sm-4 col-6 product__context"
                        v-for="(product, index) in products" :key="index">
                        <div class="product__block">
                            <div class="block__img">
                                <a href="#"><img :src="product.img" alt=""></a>
                            </div>
                            <div class="block__content">
                                <h5><a href="#">{{product.name}}</a></h5>
                                <div class="block__price">
                                    <div class="price">
                                        {{product.price}}
                                    </div>
                                    <div class="cart">
                                        <button ><font-awesome-icon  icon="shopping-cart" /></button>
                                    </div>
                                    <div class="star">
                                        
                                        <font-awesome-icon  icon="star" 
                                            v-for="index in 5" :key="index" 
                                            :class="index <= product.star ? 'active' :'none' " />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import products, {menu, categories} from './data.js'
export default {
    data () {
        return {
            products,
            lstMenu: menu,
            isActive: false,
            searchVal: '',
            categories
        }
    },
    methods: {
        activeClass(e){
            document.querySelectorAll('ul.wrap__ul>li').forEach( el => {
                el.classList.remove('active')
            })
            e.target.parentNode.classList.add('active')
        },
        checkFilterProduct(e) {
            if(e.target.checked) {
                this.products = products.filter( el => {
                    return el.branch == e.target.dataset.id
                })
               // console.log(e.target.dataset.id)
            }
        },
        checkFilterProductByCate(e) {
            this.products = products.filter( el => {
                return el.branch == e.target.dataset.id
            })
           // console.log(e.target.dataset.id)
        }
    },
    watch:{
        searchVal(){
            this.lstMenu = menu.filter( e => {
                if(this.searchVal ==''){
                    return e;
                }
                return e.name.toLowerCase().indexOf(this.searchVal) != -1 ? true : 
                                            e.children.find( el => {
                                                return el.name.toLowerCase().indexOf(this.searchVal) !=-1
                                            }) ? true : false
            })
        }
    }
}
</script>

<style lang="scss">
    @import 'Product.scss'
</style>

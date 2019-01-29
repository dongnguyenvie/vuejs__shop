import header from '../components/header/Header.vue'
import menu from '../components/menu/Menu-header.vue'
import homeLayout from '../components/layout/HomeLayout.vue'
import home from '../components/page/home/Home.vue'
import contact from '../components/page/contact/Contact.vue'
import shop from '../components/page/shop/Shop.vue'
import products from '../components/page/products/product.vue'

let homePage = {
    path: '/',
    name: 'index',
    component: homeLayout,
    redirect: '/home',
    children: [
        {
            path: 'home',
            name: 'home',
            component: home
        },
    ]
}

let contactPage = {
    path: '',
    name: '',
    component: homeLayout,
    children:[
        {
            path: '/contact',
            component: contact
        }
    ]
}
let shopPage = {
    path: '',
    name: '',
    component: homeLayout,
    children:[
        {
            path: '/shop',
            component: shop
        }
    ]
}

let productsPage = {
    path: '',
    name: '',
    component: homeLayout,
    children:[
        {
            path: '/products',
            component: products
        }
    ]
}

let test = {
    path: '/test',
    name: 'test',
    component: homeLayout,
    children: [
        {
            path: '',
            name: '',
            component: header
        },
        {
            path: 'menu',
            name: 'menu',
            component:menu
        }
    ]
}
const routes = [
    homePage,
    contactPage,
    shopPage,
    productsPage
 //   test
]

export default routes;
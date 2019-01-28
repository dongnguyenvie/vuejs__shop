import header from '../components/header/Header.vue'
import menu from '../components/menu/Menu-header.vue'
import homeLayout from '../components/layout/HomeLayout.vue'
import home from '../components/page/home/Home.vue'
import contact from '../components/page/contact/Contact.vue'
import shop from '../components/page/shop/Shop.vue'

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
    test
]

export default routes;
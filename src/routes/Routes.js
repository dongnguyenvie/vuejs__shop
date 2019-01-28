import header from '../components/header/Header.vue'
import menu from '../components/menu/Menu-header.vue'
import homeLayout from '../components/layout/HomeLayout.vue'
import home from '../components/page/home/Home.vue'

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
    test
]

export default routes;
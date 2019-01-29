<template>
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
</template>

<script>
import data from '../data.js'
export default {
    data () {
        return {
            data
        }
    }
}
</script>

<style lang="scss" scoped>
    @import 'Menu-header-content.scss'
</style>


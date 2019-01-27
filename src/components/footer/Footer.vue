<template>
    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <h4 class="h5">{{data.footer1.title}}</h4>
                    <p>{{data.footer1.content}}</p>
                </div>
                <div class="col-md-2">
                    <p>{{data.footer2.title}}</p>
                    <ul>
                        <li v-for='(menu, index) in data.footer2.content' :key='index'>
                            <a :href="menu.link">{{menu.name}}</a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-2">
                    <p>{{data.footer3.title}}</p>
                    <ul>
                        <li v-for='(menu, index) in data.footer3.content' :key='index'>
                            <a :href="menu.link">{{menu.name}}</a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-2">
                    <p>{{data.footer4.title}}</p>
                    <ul>
                        <li v-for='(menu, index) in data.footer4.content' :key='index'>
                            <a :href="menu.link">{{menu.name}}</a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-2">
                    <p>{{data.footer5.title}}</p>
                    <ul>
                        <li v-for='(menu, index) in data.footer5.content' :key='index'>
                            <a :href="menu.link">{{menu.name}}</a>
                        </li>
                    </ul>
                </div>
                <div class="col-12 ">
                    <div class="footer__end">
                        <p>© Copyright 2018, All Rights Reserved | Made With Love by NGUYEN QUY DONG</p>
                    </div>
                </div>
            </div>

        </div>
    </footer>
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
    @import 'Footer.scss'
</style>

<template>
    <div class="container-fluid subcribe-form">
        
        <div class="subcribe-form__circle">
            <font-awesome-icon icon="check-square" />
        </div>
        <div class="container">
            <div class="form__block">
                <div class="block__context">
                    <h4>Subscribe our Newsletter</h4>
                    <p>Stay up to date with our latest new and products</p>
                    <div class="block__form">
                        <span>Your Email address</span>
                        <input type="text" name="email" class="form__email" id="form__email">
                        <!-- <p><font-awesome-icon icon="paper-plane" rotation="45" /></p> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
     @import 'Subscribe-form.scss'
</style>

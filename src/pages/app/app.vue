<template>
    <div>
        <component v-bind:is="currentView">
            <!-- 组件在 vm.currentview 变化时改变！ -->
        </component>
    
        <lb-footer>
            <lb-switchover v-on:increment="incrementTotalhome">
                <i class="fa fa-home fa-2x" aria-hidden="ture"></i>
            </lb-switchover>
            <lb-switchover v-on:increment="incrementTotaluser">
                <i class="fa fa-user fa-2x" aria-hidden="ture"></i>
            </lb-switchover>
        </lb-footer>
    </div>
</template>
<script>

import header from './Mobile/header.vue'
import body from './Mobile/body.vue'
import banner from './Mobile/banner.vue'
import footer from './Mobile/footer.vue'
import user from '../views/user.vue'
import home from '../views/home.vue'
import login from '../views/login.vue'
import switchover from './Mobile/switchover.vue'

export default {
    name: 'app',
    data() {
        let localdata = {}
        return {
            localdata,
            currentView: 'lb-login',

        }
    },
    mounted() {},
    components: {
        'lb-header': header,
        'lb-body': body,
        'lb-banner': banner,
        'lb-footer': footer,
        'lb-home': home,
        'lb-user': user,
        'lb-switchover': switchover,
        'lb-login':login
    },
    methods: {
        incrementTotalhome() {
            this.currentView = 'lb-home'
        },
        incrementTotaluser(){
            this.currentView = 'lb-user'
        }
    }
}
</script>

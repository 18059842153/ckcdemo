<template>
    <div>
        <lb-body>
            <component v-bind:is="currentView">
                <!-- 组件在 vm.currentview 变化时改变！ -->
            </component>
        </lb-body>
        <lb-footer></lb-footer>
    </div>
</template>
<script>

import header from './Mobile/header.vue'
import body from './Mobile/body.vue'
import banner from './Mobile/banner.vue'
import footer from './Mobile/footer.vue'
import user from '../views/user.vue'
import home from '../views/home.vue'

export default {
    name: 'app',
    data() {
        let localdata = {}
        return {
            localdata,
            currentView: 'user',
        }
    },
    components: {
        'lb-header': header,
        'lb-body': body,
        'lb-banner': banner,
        'lb-footer': footer,
    },
    methods: {
    
    }
}
</script>

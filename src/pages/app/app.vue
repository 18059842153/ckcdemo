<template>
    <div>
        <component v-bind:is="currentView">
            <!-- 组件在 vm.currentview 变化时改变！ -->
        </component>
        <lb-footer v-if="currentView!='lb-login'" >
            <lb-switchover v-on:increment="incrementTotalhome">
                <i  :class="{blueer:iscolor1}" class="fa fa-home fa-2x" aria-hidden="ture"></i>
            </lb-switchover>
            <lb-switchover v-on:increment="incrementTotaluser" >
                <i :class="{blueer:iscolor2}" class="fa fa-user fa-2x" aria-hidden="ture"></i>
            </lb-switchover>
        </lb-footer>
    </div>
</template>
<script>

import header from './Mobile/header.vue'
import body from './Mobile/body.vue'
import banner from './Mobile/banner.vue'
import footer from './Mobile/footer.vue'
import switchover from './Mobile/switchover.vue'
import user from '../views/user.vue'
import home from '../views/home.vue'
import login from '../views/login.vue'
import common_use from '../dialogs/common_use/common_use.vue'


export default {
    name: 'app',
    data() {
        let localdata = {}
        return {
            localdata,
            iscolor1: true,
            iscolor2: false,
            /*   currentView: 'lb-login', */
        }
    },
    computed: {
        currentView() {
            return this.$store.getters.yes
        }
    },
    mounted() { },
    components: {
        'lb-header': header,
        'lb-body': body,
        'lb-banner': banner,
        'lb-footer': footer,
        'lb-home': home,
        'lb-user': user,
        'lb-switchover': switchover,
        'lb-login': login,
        'lb-common': common_use,
    },
    methods: {
        incrementTotalhome() {
            this.iscolor1 = true
            if (this.iscolor1 = true) {
                this.iscolor2 = false
            }
            this.$store.commit('homes', 'lb-home')
        },
        incrementTotaluser() {
            this.iscolor2 = true
            if (this.iscolor2 = true) {
                this.iscolor1 = false
            }
            this.$store.commit('homes', 'lb-user')
        }
    }
}
</script>

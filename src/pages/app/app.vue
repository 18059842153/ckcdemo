<template>
    <div>
        <component v-bind:is="currentView">
            <!-- 组件在 vm.currentview 变化时改变！ -->
        </component>
        <lb-footer v-if="currentView!='lb-login flexs  '">
            <lb-switchover v-on:increment="incrementTotalhome" :class="{blueer:iscolor1}" class="footer_icon">
                <i  class="fa fa-circle-o fa-2x bradius" aria-hidden="ture"></i>
            </lb-switchover>
            <lb-switchover v-on:increment="incrementTotaluser" :class="{blueer:iscolor2}" class="footer_icon">
                <i class="fa fa-user-o fa-2x bradius" aria-hidden="ture"></i>
            </lb-switchover>
        </lb-footer>
    </div>
</template>
<script>
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
        }
    },
    computed: {
        currentView() {
            return this.$store.getters.yes
        }
    },
    mounted() {
        if (this.$store.state.models.login) {
            this.getTableApidata('dictionary')
        }
    },
    components: {
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

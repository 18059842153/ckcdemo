<template>
    <div>
        <el-col :span="6" v-for="item in menudata">
            <div class="grid-contes" @click="handleClick">
                <i :class='item.menuIcon'></i>
                <p>{{item.menuTitle}}</p>
            </div>
        </el-col>
    </div>
</template>
<script>
import menu from '~/stores/menu'
export default {
    name: 'home',
    data() {
        let localdata = {}
        return {
            menudata:menu,
            localdata,
        }
    },
    mounted() { },
    components: {

    },
    methods: {
        getTest(val){
            console.log('11',val)
        },
        handleClick() {
            this.$store.commit('homes', 'lb-common')
        }
    }
}
</script>
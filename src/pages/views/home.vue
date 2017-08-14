<template>
    <div>
        <div class="home_header greener">
            <el-row>
                <el-col :span="24">
                    <div>
                        <h3 class='txt-center '>我的主页</h3>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="home_body">
            <template v-for="item in menudata">
                <el-col :span="8">
                    <div class="grid-contes" @click="handleClick(item.pageTable)">
                        <i :class='item.menuIcon'></i>
                        <p class="home_gray">{{item.menuTitle}}</p>
                    </div>
                </el-col>
            </template>
        </div>
    </div>
</template>
<script>
import menu from '~/stores/menu'
export default {
    name: 'home',
    data() {
        let localdata = {}
        return {
            menudata: menu,
            localdata,
        }
    },
    mounted() { },
    components: {

    },
    methods: {
        handleClick(value) {
            this.$store.dispatch('commons',value)
            console.log(this.$store.state.commondata.commondata)
            this.$store.commit('homes', 'lb-common')
        }
    }
}
</script>
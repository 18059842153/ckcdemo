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
            <el-col :span="6" v-for="item in menudata">
                <div class="grid-contes" @click="handleClick">
                    <i :class='item.menuIcon'></i>
                    <p class="home_gray">{{item.menuTitle}}</p>
                </div>
            </el-col>
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
        getTest(val) {
            console.log('11', val)
        },
        handleClick() {
            this.$store.commit('homes', 'lb-common')
        }
    }
}
</script>
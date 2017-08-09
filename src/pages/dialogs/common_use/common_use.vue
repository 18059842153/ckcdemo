<template>
    <div class='gray'>
        <div class='card_header greener'>
            <div class="back" @click="handleBack">
                <i class="fa fa-arrow-circle-o-left fa-2x" aria-hidden="true"></i>
            </div>
            <el-row>
                <el-col :span="24">
                    <div>
                        <h3 class='txt-center '>
                            档案录入
                        </h3>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="card_body">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span style="line-height: 36px;">卡片名称</span>
                </div>
                <div v-for="o in 4" :key="o" class="card_text card_item">
                    {{'列表内容 ' + o }}
                </div>
            </el-card>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    mounted() { },
    computed: {},
    watch: {},
    methods: {
        handleBack() {
            console.log('11')
            this.$store.commit('homes', 'lb-home')
        }
    }
}
</script>

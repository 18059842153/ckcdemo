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
            <template v-for="item in dbdata">
                <el-card class="box-card">
                    <div class="card_text card_item">
                        {{'跟踪回访:' + item.detail }}
                    </div>
                      <div class="card_text card_item">
                        {{'跟踪回访:' + item.detail }}
                    </div>
                </el-card>
                <br/>
            </template>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            dbdata: []
        }
    },
    mounted() {
        let filterObj = []
        filterObj.push({
            'key': 'student_id',
            'value': '597ed44aad2c9f5c898c3d07',
            'type': ''
        })
        let filterTxt = this.base64.encode(JSON.stringify(filterObj))
        this.handleGetFilterTableTable('inquiry', filterTxt).then(obj => {
            this.dbdata = obj.data.data
            console.log(this.dbdata)
        })
    },
    computed: {},
    watch: {},
    methods: {
        handleBack() {
            this.$store.commit('homes', 'lb-home')
        }
    }
}
</script>

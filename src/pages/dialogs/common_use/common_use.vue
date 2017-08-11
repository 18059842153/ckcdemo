<template>
    <div class='gray'>
        <div class='card_header greener'>
            <div class="back" @click="handleBack">
                <i class="fa fa-arrow-circle-o-left fa-2x" aria-hidden="true"></i>
            </div>
            <el-row>
                <el-col :span="24">
                    <div>
                        <h3 class='txt-center margin_bottom'>
                            {{getTitle}}
                        </h3>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="card_body ">
            <template v-for="item in getTime(dbdata)">
                <el-card class="box-card margin_bottom">
                    <template v-for="itemval in getpageTable">
                        <div class="card_text card_item">
                            {{getInfo(itemval,item)}}
    
                        </div>
                    </template>
                </el-card>
            </template>
        </div>
    </div>
</template>
<script>
import pagesmodule from '~/stores/modulestudentinfo.js'
export default {
    name: 'common',
    data() {
        return {
            dbdata: [],
            moduledata: pagesmodule,
        }
    },
    mounted() {
        let filterObj = []
        filterObj.push({
            'key': 'student_id',
            'value': '5983c8f94ffcb068b342d0ac',
            'type': ''
        })
        let filterTxt = this.base64.encode(JSON.stringify(filterObj))
        this.handleGetFilterTableTable(this.$store.state.commondata.commondata, filterTxt).then(obj => {
            this.dbdata = obj.data.data
            console.log(this.dbdata)
        })
    },
    computed: {
        getTitle() {
            let itemLable = ''
            for (let i = 0; i < this.moduledata.length; i++) {
                if (this.moduledata[i].pageTable == this.$store.state.commondata.commondata) {
                    itemLable = this.moduledata[i].pageLable
                }
            }
            console.log(this.moduledata)
            return itemLable
        },

        getpageTable() {
            for (let i = 0; i < this.moduledata.length; i++) {
                if (this.moduledata[i].pageTable == this.$store.state.commondata.commondata) {
                    var itemTable = []
                    for (let j = 0; j < this.moduledata[i].pageTableField.length; j++) {
                        var pageTableField = {}
                        pageTableField.label = this.moduledata[i].pageTableField[j].label
                        pageTableField.prop = this.moduledata[i].pageTableField[j].prop
                        pageTableField.type = this.moduledata[i].pageTableField[j].type
                        itemTable.push(pageTableField)
                    }
                }
            }
            console.log(itemTable)
            return itemTable
        }
    },
    watch: {},
    methods: {
        getInfo(itemval, item) {
            let info
            info = itemval.label + ' : ' + item[itemval.prop]
            if (itemval.type == 'payment') {
                info = itemval.label + ' : ' + this.getDictData('2', item[itemval.prop])
            }
            return info
        },
        handleBack() {
            this.$store.commit('homes', 'lb-home')
        },
        getTime(sum) {
            for (var i = 0; i < sum.length; i++) {
                if (sum[i].track_time || sum[i].arrangestart || sum[i].creattime) {
                    sum[i].track_time = this.getDateFormat(sum[i].track_time)
                    sum[i].arrangestart = this.getDateFormat(sum[i].arrangestart)
                    sum[i].creattime = this.getDateFormat(sum[i].creattime)
                }
            }
            return sum
        },
    }
}
</script>

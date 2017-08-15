<template>
    <div class='gray overflower_hid'>
        <div class='card_header greener flexs'>
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
        <div class="card_body overflower_show">
            <lb-scroll :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :bottomPullText='bottomText' :auto-fill="false" @bottom-status-change="handleBottomChange" ref="loadmore">
                <div>
                    <!--   这里写你需要的另外的模块 -->
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
                <div v-show="loading" slot="bottom" class="loading">
                    <div class="txt-center">
                        <img src="/assets/images/loadup.gif" style="height:15px;with:15px">
                    </div>
                </div>
            </lb-scroll>
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
            scrollHeight: 0,
            scrollTop: 0,
            containerHeight: 0,
            loading: false,
            allLoaded: false,
            bottomText: '上拉加载更多...',
            bottomStatus: '',
            totalCount: '',
        }
    },
    mounted() {
        let filterObj = []
        filterObj.push({
            'key': 'student_id',
            'value': this.$store.state.student_id.student_id,
            'type': ''
        })
        let filterTxt = this.base64.encode(JSON.stringify(filterObj))
        this.handleGetFilterTableTable(this.$store.state.commondata.commondata, filterTxt).then(obj => {
            this.dbdata = obj.data.data
            console.log(this.dbdata[0])
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
            return itemLable
        },
        //配置文件
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
         handleBack() {
            this.$store.commit('homes', 'lb-home')
        },
        loadBottom: function () {
            let filterObj = []
            filterObj.push({
                'key': 'student_id',
                'value': this.$store.state.student_id.student_id,
                'type': ''
            })
            this.loading = true;
            this.pagination.currentPage += 1;   // 每次更迭加载的页数
            /*      console.log(this.pagination.currentPage) */
            let filterTxt = this.base64.encode(JSON.stringify(filterObj))
            if (this.pagination.currentPage * this.pagination.pagesize < this.pagination.total) {
                // 当allLoaded = true时上拉加载停止
                this.loading = false;
                this.allLoaded = true;
                /*     api.commonApi(后台接口，请求参数) 这个api是封装的axios有不懂的可以看vue2+ vuex + axios那篇文章 */
                this.handleGetFilterTableTable(this.$store.state.commondata.commondata, filterTxt).then(res => {
                    setTimeout(() => {
                        /*       要使用的后台返回的数据写在setTimeout里面 */
                        this.$nextTick(() => {
                            this.loading = false;
                        })
                    }, 1000)
                });
            } else {
                this.loading = false;
                this.allLoaded = true;
            }


        },
        handleBottomChange(status) {
            this.bottomStatus = status;
        },
    }
}
</script>

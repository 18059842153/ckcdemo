<template>
    <div>
        <el-row>
            <el-col :span="6">
                <div class="grid-contes">
                    <i class='fa fa-user-plus fa-2x'></i>
                    <p>档案录入</p>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-contes">
                    <i class='fa fa-user-circle fa-2x'></i>
                    <p>学员管理</p>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-contes">
                    <i class='fa fa-pencil fa-2x'></i>
                    <p>修改资料</p>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-contes">
                    <i class='fa fa-shopping-cart fa-2x'></i>
                    <p>报名</p>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="6">
                <div class="grid-contes">
                    <i class='fa fa-money fa-2x'></i>
                    <p>缴费</p>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-contes">
                    <i class='fa fa-phone-square fa-2x'></i>
                    <p>跟踪回访</p>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-contes">
                    <i class='fa fa-flag-o fa-2x'></i>
                    <p>登记赛事记录</p>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-contes">
                    <i class='fa fa-reply fa-2x'></i>
                    <p>退费</p>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="6">
                <div class="grid-contes">
                    <i class='fa fa-envelope-open fa-2x'></i>
                    <p>在读学员</p>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-contes">
                    <i class='fa fa-envelope-open-o fa-2x'></i>
                    <p>已结课学员</p>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-contes">
                    <i class='fa fa-user-circle fa-2x'></i>
                    <p>学员信息</p>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-contes">
                    <i class='fa fa-pencil fa-2x'></i>
                    <p>修改资料</p>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    name: 'home',
    data() {
        let localdata = {}
        return {
            localdata,
        }
    },
        mounted(){},
    components: {

    },
    methods: {
    }
}
</script>
<template>
    <div class="gray">
        <div class='user-header greener '>
            <el-row>
                <el-col :span="24">
                    <div>
                        <h3 class='txt-center '>个人中心</h3>
                    </div>
                </el-col>
            </el-row>
            <el-row class="padbom">
                <el-col :span="2">
                    <div class='grid-contnet'>
                    </div>
                </el-col>
                <el-col :span="16">
                    <div>
                        <img src='/assets/images/1.jpg'>
                        <div class="disinblock header-content">
                            <ul>
                                <li>李平安</li>
                                <li>学号:1</li>
                                <li>电话:15017542357</li>
                            </ul>
                        </div>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class='grid-contnet'>
                    </div>
                </el-col>
            </el-row>
            <div class="back">
                <i class="fa fa-arrow-circle-o-left fa-2x" aria-hidden="true"></i>
            </div>
        </div>
        <div class='user-pwddata'>
            <el-row>
                <el-col :span="24">
                    <div class="grid-content pwddata">
                        <i class="fa fa-paint-brush fa-lg" aria-hidden="true"></i>
                        <div class='disinblock '>修改密码</div>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="user-order">
            <el-row>
                <el-col :span="24">
                    <div class="grid-content orderdata borderbotm">
                        <el-row>
                            <el-col :span="16">
                                <i class="fa fa-file-text-o fa-lg" aria-hidden="true"></i>
                                <div class='disinblock fontwei'>购物订单</div>
                            </el-col>
                            <el-col :span="8">
                                <div class='colorgray floatright'>
                                    <span>查看所有订单</span>
                                    <i class="fa fa-angle-right " aria-hidden="true"></i>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <div class="grid-content order-content">
                        <el-row>
                            <el-col :span="12">
                                <div class="txt-center">
                                    <span>
                                        <el-badge :value="12" class="item">
                                            <i class="fa fa-calendar-o fa-3x" aria-hidden="true"></i>
                                        </el-badge>
                                    </span>
                                </div>
                            </el-col>
                            <el-col :span="12">
                                <div class="txt-center">
                                    <span>
                                        <el-badge :value="43" class="item">
                                            <i class="fa fa-calendar-check-o fa-3x" aria-hidden="true"></i>
                                        </el-badge>
                                    </span>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
            </el-row>
        </div>
 <!--        <div class='user-content'>
            <el-row>
                <el-col :span="24">
                    <div class="grid-content pwddata ">
                        <i class="fa fa-life-ring fa-lg" aria-hidden="true"></i>
                        <div class='disinblock '>推荐中心</div>
                    </div>
    
                </el-col>
            </el-row>
        </div> -->
   <!--      <div class='user-pay'>
            <el-row>
                <el-col :span="24">
                    <div class="grid-content pwddata borderbotm">
                        <i class="fa fa-money" aria-hidden="true"></i>
                        <div class='disinblock '>我的钱包</div>
                    </div>
                </el-col>
            </el-row>
        </div> -->
        <div class="user-pay">
            <el-row>
                <el-col :span="24">
                    <div class="grid-content orderdata borderbotm">
                        <el-row>
                            <el-col :span="24">
                                <i class="fa fa-money fa-lg" aria-hidden="true"></i>
                                <div class='disinblock fontwei'>我的钱包</div>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <div class="grid-content order-content">
                        <el-row>
                            <el-col :span="8">
                                <div class="txt-center">
                                    <p class='colorred'>943154.5</p>
                                    <p>账户余额</p>
                                </div>
                            </el-col>
                            <el-col :span="8">
                                <div class="txt-center">
                                    <p>1</p>
                                    <p>电子卷</p>
                                </div>
                            </el-col>
                            <el-col :span="8">
                                <div class="txt-center">
                                    <p>3095.93</p>
                                    <p>可用积分</p>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
export default {
    name: 'user',
    data() {
        let localdata = {}
        return {
            localdata,
        }
    },
    components: {

    },
    methods: {
    }
}
</script>
<template>
    <div class='modal'>
        <div class="modal-head">
            <h3 class='txt-center greener'>
                登陆
            </h3>
        </div>
        <div class='modal-body'>
            <el-form :model="numberValidateForm" ref="numberValidateForm" label-width='60px'>
                <el-form-item label="电话" prop="age" :rules="[
                                                                              { required: true, message: '电话不能为空'},
                                                                              { type: 'text', message: '电话必须为数字值'}
                                                                            ]">
                    <el-input type="text" v-model="numberValidateForm.user" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item class='padbom' label="验证" :rules="[
                                                                              { required: true, message: '验证码不能为空'},
                                                                              { type: 'text', message: '验证码必须为数字值'}
                                                                            ]">
                    <el-row>
                        <el-col :span="12">
                            <el-input type='text' v-model="numberValidateForm.pwd"></el-input>
                        </el-col>
                        <el-col :span="12">
                            <el-button v-bind:class="{touch:iscolor}" type=" floatright" style="width:70%" @click="handleVerification">验证码</el-button>
                        </el-col>
                    </el-row>
                </el-form-item>
                <div class='text-center login_padleft'>
                    <el-row>
                        <el-col :span="24" class='padbom'>
                            <el-button class="login_button" type="Success" @click="submitForm">登陆</el-button>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="24">
                            <el-button class="login_button" @click="resetForm('numberValidateForm')">重置</el-button>
                        </el-col>
                    </el-row>
                </div>
    
            </el-form>
        </div>
    </div>
</template>
<style>
.touch {
    color: #7D9EC0;
}
</style>

<script>
import md5 from '~/api/md5.min.js'
export default {
    name: 'login',
    data() {
        let localdata = {}
        return {
            localdata,
            numberValidateForm: {
                user: 'luban',
                pwd: '123456'
            },
            iscolor: false

        }
    },
    components: {
    },
    methods: {
        submitForm() {
            let vm = this
            if (this.$store.state.system.name.length > 0) {
                this.numberValidateForm.user = this.$store.state.system.tel
            }
            this.numberValidateForm.pwd = md5(this.numberValidateForm.pwd)
            let account = { user: this.numberValidateForm.user, pwd: this.numberValidateForm.pwd }
            vm.$store.dispatch('loginApi', account).then((data) => {
                if (data.code == 0) {
                    this.$store.commit('user', data.account)
                    this.$store.commit('router', '/web')
                } else {
                    this.$store.commit('user', { name: '', tel: '', _id: '' })
                    this.$message({
                        message: '用户或密码错误！',
                        type: 'error'
                    })
                }
            })
            this.numberValidateForm = {
                user: '',
                pwd: ''
            }
            this.$store.commit('homes', 'lb-home')
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        handleVerification() {
            this.iscolor = true
        }
    }
}
</script>
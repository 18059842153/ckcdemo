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
                                                                      { type: 'number', message: '电话必须为数字值'}
                                                                    ]">
                    <el-input type="age" v-model.number="numberValidateForm.age" auto-complete="off"></el-input>
                </el-form-item>
    
                <el-form-item class='padbom' label="验证"  :rules="[
                                                                      { required: true, message: '验证码不能为空'},
                                                                      { type: 'number', message: '验证码必须为数字值'}
                                                                    ]">
                   <el-row>
                        <el-col :span="12">
                            <el-input type='text'></el-input>
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
.touch{
    color:#7D9EC0;
}
</style>

<script>
export default {
    name: 'login',
    data() {
        let localdata = {}
        return {
            localdata,
            numberValidateForm: {
                age: ''
            },
            iscolor:false

        }
    },
    components: {
    },
    methods: {
        submitForm() {
            /*      this.$refs[formName].validate((valid) => {
                        if (valid) {
                            alert('submit!');
                        } else {
                            console.log('error submit!!');
                            return false;
                        }
                    }); */
            console.log(this.$store.state.login.currentView)
            this.$store.commit('homes', 'lb-home')
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        handleVerification(){
            this.iscolor = true
        }
    }
}
</script>
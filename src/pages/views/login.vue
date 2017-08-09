<template>
    <div class='modal'>
        <div class="modal-head">
            <h3 class='txt-center'>
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
                <el-form-item>
                    <el-row>
                        <el-col :span="12">
                            <el-input type='text'></el-input>
                        </el-col>
                        <el-col :span="12">
                            <el-button type="info floatright">验证码</el-button>
                        </el-col>
                    </el-row>
                </el-form-item>
                <el-form-item>
                    <div class='text-center'>
                        <el-button type="primary" @click="submitForm">登陆</el-button>
                        <el-button @click="resetForm('numberValidateForm')">重置</el-button>
                    </div>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
export default {
    name: 'login',
    data() {
        let localdata = {}
        return {
            localdata,
            numberValidateForm: {
                age: ''
            }

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
        }
    }
}
</script>
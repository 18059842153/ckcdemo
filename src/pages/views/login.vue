<template>
    <div class='modal'>
        <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px">
            <el-form-item label="电话" prop="age" :rules="[
                      { required: true, message: '电话不能为空'},
                      { type: 'number', message: '电话必须为数字值'}
                    ]">
                <el-input type="age" v-model.number="numberValidateForm.age" auto-complete="off" style="width:50%"></el-input>
            </el-form-item>
            <el-form-item>
                <el-row>
                    <el-col :span="6">
                          <el-input type='text'></el-input>
                    </el-col>
                    <el-col :span="6">
                          <el-button type="info">验证码</el-button>
                    </el-col>
                </el-row>
              
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('numberValidateForm')">提交</el-button>
                <el-button @click="resetForm('numberValidateForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<style>
.modal{
    border:1px solid blue;
    width:50%;
    min-height: 300px;
    padding: 50px 0; 
    box-sizing: border-box;
    position: fixed;
    top:50%;
    left:50%;
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
            }

        }
    },
    components: {
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
}
</script>
<template>
    <div class='modal'>
        <div class="modal-head">
            <h3 class='txt-center greener'>
                验证
            </h3>
        </div>
        <div class='modal-body'>
            <el-form :model="numberValidateForm" :rules="rules" ref="numberValidateForm" label-width='60px'>
                <el-form-item label="电话" prop="number">
                    <el-input v-model="numberValidateForm.number" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item class='padbom' label="验证" prop="verification">
                    <el-row>
                        <el-col :span="12">
                            <el-input v-model="numberValidateForm.verification"></el-input>
                        </el-col>
                        <el-col :span="12">
                            <el-button v-bind:class="{touch:iscolor}" class="floatright" type="button" style="width:80%" @click="handleVerification">验证码</el-button>
                        </el-col>
                    </el-row>
                </el-form-item>
                <div class='text-center login_padleft'>
                    <el-row>
                        <el-col :span="24" class='padbom'>
                            <el-button class="login_button" type="Success" @click="submitForm('numberValidateForm')">登陆</el-button>
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
                number: '',
                verification: ''
            },
            iscolor: false,
            rules: {
                number: [
                    { required: true, message: '请输入电话号码', trigger: 'blur' },
                    { min: 11, max: 11, message: '长度在 11 个字符', trigger: 'blur' }
                ],
                verification: [
                    { required: true, message: '请输入验证码', trigger: 'blur' },
                    { min: 4, max: 6, message: '长度在 4 到 6 个字符', trigger: 'blur' }
                ],
            }
        }
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    //键值
                    let token = window.localStorage.getItem('token')
                    let tokentime = window.localStorage.getItem('tokentime')
                    Vue.http.headers.common['authorization'] = token
                    Vue.http.headers.common['authtime'] = tokentime
                    //查询
                    var student_ids = ''
                    let filterObj = []
                    filterObj.push({
                        'key': 'first_tel',
                        'value': this.numberValidateForm.number,
                        'type': ''
                    })
                    let filterTxt = this.base64.encode(JSON.stringify(filterObj))
                    Vue.http.get('http://app.bullstech.cn:8888/lubandemo/api/student?filter=' + filterTxt).then(obj => {
                        console.log(obj)
                        if (obj.body.data[0].first_tel == this.numberValidateForm.number) {
                            student_ids = obj.body.data[0]._id
                        }
                        console.log(student_ids)
                        this.$store.commit('student', student_ids)
                        this.$store.commit('homes', 'lb-home')
                    })
                } else {
                    alert('错误！')
                    return false
                }
            });

        },
        handleVerification() {
            this.iscolor = true
            Vue.http.post('http://app.bullstech.cn:8888/sms/', { phone: this.numberValidateForm.number })
        }
    }
}
</script>
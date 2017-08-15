import login from './modules/login'
import model from './modules/model'
import system from './modules/system'
import commondata from './modules/commondata'
import student_id from './modules/student_id'

export default {
    modules: {
        login: login,
        models: model,
        system: system,
        commondata: commondata,
        student_id: student_id,
    }
}
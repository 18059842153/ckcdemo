const state = {
    commondata:''
}
const getters = {
    commons(state){
        return state.commondata
    }
}
const actions = {
    commons(context, data) {
            context.commit('commons', data)
        }
}
const mutations = {
     commons(state,data){
        state.commondata=data
    },
}
export default {
    state,
    getters,
    actions,
    mutations
}
import './styles/index.css'
import App from './pages/app/app.vue'
import lbCom from './components/src'
import stores from './stores'


Vue.use(Vuex)
Vue.use(lbCom)


 let store = new Vuex.Store(stores)

new Vue({
    el: '#app',
    store,
    render: h => h(App)
})
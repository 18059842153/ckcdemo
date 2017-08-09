import './styles/index.css'
import App from './pages/app/app.vue'
import stores from './stores'


Vue.use(Vuex)
let store = new Vuex.Store(stores)

new Vue({
    el: '#app',
    store,
    render: h => h(App)
})
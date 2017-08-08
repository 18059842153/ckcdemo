import './styles/index.css'
import App from './pages/app/app.vue'


Vue.use(Vuex)


new Vue({
    el: '#app',
    render: h => h(App)
})
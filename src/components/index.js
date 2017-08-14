
import scroll from './scroll/'

const components = [
    scroll
]
const install = function (Vue) {
    if (install.installed) return

    components.map(component => {
        Vue.component(component.name, component)
    })
}
export default {
    version: '1.0.1',
    install,
    scroll

}
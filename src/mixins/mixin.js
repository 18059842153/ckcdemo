import * as types from '~/stores/modules/mutation-types'
import base64 from '~/api/base64.js'

moment.updateLocale('en', {
    relativeTime: {
        future: '%s',
        past: '%s',
        s: '',
        m: 'a minute',
        mm: '%d分钟',
        h: 'an hour',
        hh: '%d小时',
        d: 'a day',
        dd: '%d天',
        M: 'a month',
        MM: '%d月',
        y: 'a year',
        yy: '%d岁'
    }
})

export default {
    created: function () {
        this.modalsType = types.APPEND_API
        this._id = ''
        this.lodash = _
        this.base64 = base64
        this.types = types
        this.pagination = {}
        this.moment = moment
        this.pagination.currentPage = 1
        this.pagination.total = 0
        this.pagination.pagesize = 10
        this.pagination.pagesizes = [5, 10, 20, 50, 100]
    },
    mounted: function () {
        /*   this.handleGetTable() */
    },
    computed: {
        getMenuOption() {
            let menuOption = []
            let to = this.$store.state.system.router
            for (var item of menu) {
                if (item.to == to) {
                    if (item.dropDownMenu) {
                        menuOption = item.dropDownMenu
                    }
                    break
                } else {
                    if (item.menu) {
                        for (var subitem of item.menu) {
                            if (subitem.to == to) {
                                if (subitem.dropDownMenu) {
                                    menuOption = subitem.dropDownMenu
                                }
                                break
                            }
                        }
                    }
                }
            }
            return menuOption
        }
    },
    methods: {
        handleGetFilterTableTable(model, filter) {
            let vm = this
            return new Promise((resolve, reject) => {
                let table = {}
                table.model = model
                table.filter = filter
                table.alias = this.alias
                table.prepage = this.pagination.pagesize
                table.page = this.pagination.currentPage - 1
                vm.$store.dispatch(types.GET_Filter_API, table).then((response) => {
                    resolve(response)
                })
            })
        },
        getDateFormat(datestring) {
            let dateTemp = moment(datestring)
            let datetimestr = ''
            if (dateTemp.isValid()) {
                datetimestr = dateTemp.format('YYYY-MM-DD')
            }
            return datetimestr
        },
        getDictData(type, value) {
          /*   console.log(value, '1111111') */
            let tablaData = []
            let tablaName = 'dictionary'
            tablaData = this.$store.state.models.models[tablaName].data
            let tablaDatas = ''
            for (var i = 0; i < tablaData.length; i++) {
                if (tablaData[i].type == type) {
                    if (tablaData[i]._id == value) {
                        tablaDatas = tablaData[i].text
                       /*  console.log(tablaDatas + 'mixin') */
                        break
                    }
                }
            }
            return tablaDatas
        },
        getTableApidata(table) {
            let vm = this
            return new Promise((resolve) => {
                if (table) {
                    vm.$store.dispatch(types.GET_API, table).then((response) => {
                        resolve(response)
                    })
                }
            })
        },
    },
}
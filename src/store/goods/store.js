import action from './action'
import state from './state'
import mutation from './mutation'

export default {
    actions: action,
    state: state,
    mutations: mutation,
    namespaced: true // 没有这个  无法使用  报错 unknown action type
}
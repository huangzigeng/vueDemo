import Vuex from 'vuex'
import Vue from 'vue'
import state from './state'
import mutation from './mutation'
import action from './action'

import goods from './goods/store'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: state,
    mutations: mutation,
    actions: action,
    modules: {
        goods: goods
    } 
})

export default store
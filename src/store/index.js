import Vue from 'vue'
import Vuex from 'vuex'
import LS from 'storejs'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        canvasPointer: LS.get('VUE_DB_canvasPointer') ? JSON.parse(LS.get('VUE_DB_canvasPointer')) : []
    },
    mutations: {
        setCanvasPointer(state, payload) {
            state.canvasPointer = payload
            LS.set('VUE_DB_canvasPointer', JSON.stringify(state.canvasPointer))
        }
    },
    actions: {
        setCanvasPointer({
            commit
        }, data) {
            commit('setCanvasPointer', data)
        }
    },
    modules: {}
})
import { createStore } from 'vuex'

export default createStore({
    state: {
        tabs: [],
        currentTab: {},
    },

    mutations: {
        addTab(state, payload) {
            state.tabs.push(payload)
            state.currentTab = payload
        },
        deleteTab(state, payload) {
            state.tabs = state.tabs.filter(tab => tab.id !== payload)
            state.currentTab = state.tabs[state.tabs.length - 1]
        },
        setCurrentTab(state, payload) {
            state.currentTab = state.tabs.filter(tab => tab.id === payload)[0]
        }
    },

    getters: {
        getTabs(state) {
            return state.tabs
        },
        getCurrentTab(state) {
            return state.currentTab
        }
    },

    actions: {

    },

    modules: {

    },
})

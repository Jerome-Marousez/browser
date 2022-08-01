import { createStore } from 'vuex'
import { v4 as uuid } from "uuid";

export default createStore({
    state: {
        tabs: [],
        currentTab: {
            id: uuid(),
            date: new Date(),
            component: 'NewTab',
            content: {
                id: uuid(),
                search: '',
            },
        },
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
        },
        openSearchEngine(state) {
            state.currentTab.component = 'SearchEngine'
        },
    },

    getters: {
        getTabs: state => state.tabs,
        getCurrentTab: state => state.currentTab,
    },

    actions: {

    },

    modules: {

    },
})

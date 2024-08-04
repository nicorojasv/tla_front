// src/store/index.js
import { createStore } from 'vuex';

export default createStore({
    state: {
        user: null,
        isAuthenticated: false
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
            state.isAuthenticated = !!user;
        },
        logout(state) {
            state.user = null;
            state.isAuthenticated = false;
        }
    },
    actions: {
        login({ commit }, user) {
            // Simula un login exitoso
            commit('setUser', user);
        },
        logout({ commit }) {
            commit('logout');
        }
    },
    getters: {
        isAuthenticated: state => state.isAuthenticated,
        user: state => state.user
    }
});

const state = {
    user: null
}

// getters
const getters = {
    isLogin: (state) => (state.user !== null)
}

// actions
const actions = {
    setUser ({ commit, state }, user) { 
        console.log("state", state)
        commit('setUser', user)
    }
}

// mutations
const mutations = {
    setUser (state, user) {
        state.user = user;
    }
}

export default {
    state,
    actions,
    getters,
    mutations,
    namespaced: true
}
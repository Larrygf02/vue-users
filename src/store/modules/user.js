const state = {
    user: null
}

// getters
const getters = {
    isLogin: (state) => state.user.login
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
    getters,
    actions,
    mutations
}
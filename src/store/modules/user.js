import axios from 'axios'
const state = {
    user: (localStorage.user) ? JSON.parse(localStorage.user): null,
    login: false
}

// getters
const getters = {
    isLogin: (state) => (state.user !== null)
}

// actions
const actions = {
    async setUser ({ commit }, user) {
        return new Promise((resolve, reject) => {
            axios.post('http://localhost:4000/login', user)
                .then(({data}) => {
                    if (data.status) {            
                        commit('setUser', user)
                        commit('loginSuccess')
                        localStorage.user = JSON.stringify(user)
                        resolve(true)
                    }else{
                        commit('loginFailed')
                        resolve(false)
                    }
                })
                .catch(error => reject(error))
        })
    },
}

// mutations
const mutations = {
    setUser (state, user) {
        state.user = user;
        state.login = true
    },
    loginSuccess () {
        console.log('Login Success')
    },
    loginFailed (state) {
        state.login = false
        console.log('Login Failed')
    }
}

export default {
    state,
    actions,
    getters,
    mutations,
    namespaced: true
}
import axios from 'axios'
import router from '../../router'
const state = {
    user: (localStorage.user) ? JSON.parse(localStorage.user): null,
    login: false
}

// getters
const getters = {
    isLogin: (state) => (state.user !== null),
    getUserId: (state) => state.user.id
}

// actions
const actions = {
    async setUser ({ commit }, user) {
        return new Promise((resolve, reject) => {
            axios.post('http://localhost:4000/login', user)
                .then(({data}) => {
                    if (data.status) {            
                        commit('setUser', data.data)
                        commit('loginSuccess')
                        localStorage.user = JSON.stringify(data.data)
                        resolve(true)
                    }else{
                        commit('loginFailed')
                        resolve(false)
                    }
                })
                .catch(error => reject(error))
        })
    },
    logout({commit}) {
        commit('logoutSuccess')
        localStorage.removeItem('user')
        localStorage.removeItem('permissions')
        router.push({path: 'login'})
    }
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
    },
    logoutSuccess (state) {
        state.user = null
        state.login = false
    }
}

export default {
    state,
    actions,
    getters,
    mutations,
    namespaced: true
}
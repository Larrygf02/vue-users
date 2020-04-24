const state = {
    user: { id: 1, name: 'Grace', login: true}
}

// getters
const getters = {
    isLogin: (state) => state.user.login
}

export default {
    state,
    getters
}
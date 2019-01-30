export default {
    updateUserName ({commit}, data) {
        // 变更状态
        commit('updateUserInfo', data)
    }
}
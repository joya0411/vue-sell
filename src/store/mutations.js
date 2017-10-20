import * as types from './mutation-types'

const mutations = {
    [types.SET_FAVORITELIST](state, favoriteList) {
        state.favoriteList = favoriteList
    }
}

export default mutations
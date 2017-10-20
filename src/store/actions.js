import * as types from './mutation-types'

const FAVORITE_KEY = '__seller__'

function saveFavorite(id, key, value) {
    let seller = localStorage[FAVORITE_KEY]
    if (!seller) {
        seller = {};
        seller[id] = {};
    } else {
        seller = JSON.parse(seller);
        if (!seller[id]) {
            seller[id] = {};
        }
    }

    seller[id][key] = value;

    localStorage[FAVORITE_KEY] = JSON.stringify(seller);

    return JSON.stringify(seller)
}
export const aFavoriteList = function ({ commit, state }, { id, key, value }) {
    commit(types.SET_FAVORITELIST, saveFavorite(id, key, value))
}
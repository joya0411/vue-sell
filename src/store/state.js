const FAVORITE_KEY = '__seller__'
function loadFavorite() {
    return localStorage[FAVORITE_KEY]
}

const state = {
    favoriteList: loadFavorite() //收藏列表
}

export default state
function getLocalStorage(id, key, def) {
    let seller = localStorage.__seller__;
    if (!seller) {
        return def;
    }
    seller = JSON.parse(seller)[id];
    if (!seller) {
        return def;
    }
    let ret = seller[key];
    return ret || def;
}

// export const favorite = function (state) {
//     return function ({ id, key, value }) {
//         return getLocalStorage(id, key, value);
//     }
// }

export const favorite = state => ({ id, key, value }) => getLocalStorage(id, key, value)
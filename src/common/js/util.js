/**
 * 解析url参数
 * @example ?id=12345&a=b
 * @return Object {id:12345,a:b}
 */

export function urlParse() {
    let urlArr = location.search.substr(1).split('&');
    let obj = {};
    for (let i = 0; i < urlArr.length; i++) {
        let item = urlArr[i].split('=');
        obj[item[0]] = item[1];
    }
    return obj;
}

export const isEmptyObj = function (obj) {
    if (!(obj instanceof Object)) return false;
    return !!Object.keys(obj).length
}
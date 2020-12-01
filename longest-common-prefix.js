/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return ""
    let firstElm = strs[0]
    let result = ""
    for (let i = 0; i < firstElm.length; i++) {
        for (j = 1; j < strs.length; j++) {
            if (firstElm[i] != strs[j][i]) {
                return result
            }
        }
        result += firstElm[i]
    }
    return result
};

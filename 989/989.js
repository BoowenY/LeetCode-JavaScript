/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
    let res = ""
    A.forEach(element => {
        res += element   
    });
    res = res - 0;
    let num = res + K;
    let str = num + "";
    let r = [];
    for(let i = 0; i < str.length; i++){
        r.push(str[i])
    }
    return r;
};
/**
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]}
 */
var divingBoard = function(shorter, longer, k) {
    let  arr = []
    const gap = long - shorter
    let res = shorter * k;
    if(k == 0) return arr 
    arr.push(res);
    for(let i = 0 ; i < k ; i++){
        res += gap;
        arr.push(res)
    }
    return Array.from(new Set(arr))
};


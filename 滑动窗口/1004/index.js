/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function(A, K) {
    const n = A.length;
    let res = 0, left = 0, cnt = 0;
    for(let i = 0; i < n; i++) {
        if(A[i] == 0) ++cnt;
        while(cnt > K) {
            if(A[left] == 0) --cnt;
            ++left;
        } 
        res = Math.max(res, i - left + 1)
    }
    return res;
};
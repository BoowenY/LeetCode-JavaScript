/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var minKBitFlips = function (A, K) {
    const n = A.length;
    let res = 0;
    for (let i = 0; i < n; i++) {
        if (A[i] === 1) {
            continue;
        }
        // 当最后区间长度小于K，仍存在0，则无法翻转实现
        if (i > n - K) {
            return -1;
        }
        // 从当前位开始进行翻转区间K
        res++;
        let j = 0;
        while (j < K) {
            A[i + j] = A[i + j] ^ 1;
            j++;
        }
    }
    return res;
};

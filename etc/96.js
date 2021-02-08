/**
 * @param {number} n
 *000 @return {number}
 */
var numTrees = function(n) {
    var res = 1;
        for (let i = n + 1; i <= 2 * n; ++i) {
            res = res * i / (i - n);
        }
        return res / (n + 1);
};
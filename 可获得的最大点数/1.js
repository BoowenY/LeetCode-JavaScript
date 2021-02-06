/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    const n = cardPoints.length
    let total = 0, w_sum = 0
    for(i = 0; i < n; i++) {
        total += cardPoints[i]
        if(i < n-k) w_sum += cardPoints[i]
    }
    let res = total-w_sum
    for(i = n-k; i < n; i++) {
        w_sum += (cardPoints[i]-cardPoints[i-n+k])
        res = Math.max(res, total-w_sum)
    }
    return res
};

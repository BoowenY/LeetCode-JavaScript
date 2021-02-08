var maxScoreSightseeingPair = function (A) {
    let max = 0
    let maxAI = A[0]
    for (let i = 1; i < A.length; i++) {
      let AJ = A[i] - i
      max = Math.max(AJ + maxAI, max)
      maxAI = Math.max(maxAI, A[i] + i)
    }
    return max
  };
  
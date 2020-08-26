/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  var obj = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"],
  };
  var arr = [];
  function dfs(index, digits, result, arr) {
    if (index === digits.length) {
      if (result) arr.push(result);
      return false;
    }

    for (var i = 0; i < obj[digits[index]].length; i++) {
      dfs(index + 1, digits, result + obj[digits[index]][i], arr);
    }
  }
  dfs(0, digits, "", arr);
  return arr;
};

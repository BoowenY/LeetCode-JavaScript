/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  return Array.from(s).reverse().join("").split(" ").reverse().join(" ");
};

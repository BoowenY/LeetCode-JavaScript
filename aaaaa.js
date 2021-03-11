/**
 * @param {number} n
 * @return {boolean}
 */
function check(num) {
  if (num == 0 || num == 1) return true;
//   let base = 3;
//   while (base < num) {
//     base *= 3;
//   }
//   let der = num - base;
//   check(der);
  return false;
}
var checkPowersOfThree = function (n) {
  if (n == 1) return true;
  if (n == 0) return false;
  check(n);
};
console.log(checkPowersOfThree(12));
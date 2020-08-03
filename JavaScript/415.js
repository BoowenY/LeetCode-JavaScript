/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const addStrings = function (num1, num2) {
  const s1 = [...num1];
  const s2 = [...num2];
  let add = 0;
  let total = "";
  while (s1.length || s2.length || add) {
    const n1 = s1.length ? s1.pop() * 1 : 0;
    const n2 = s2.length ? s2.pop() * 1 : 0;
    const num = (n1 + n2 + add) % 10;
    add = Math.floor((n1 + n2 + add) / 10);
    total = num + total;
  }
  return total;
};

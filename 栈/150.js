/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stk = [],
    len = tokens.length;
  for (let i = 0; i < len; i++) {
    let temp;
    switch (tokens[i]) {
      case "+":
        temp = stk.pop() + stk.pop();
        break;
      case "-":
        temp = -stk.pop() + stk.pop();
        break;
      case "*":
        temp = stk.pop() * stk.pop();
        break;
      case "/":
        temp = parseInt((1 / stk.pop()) * stk.pop());
        break;
      default:
        temp = parseInt(tokens[i]);
        break;
    }

    stk.push(temp);
  }
  return stk[0];
};

/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function (S) {
  //模拟栈结构
  const res = [],
    sLen = S.length;
  res.push(S[0]);
  let n = 1;
  for (let i = 1; i < sLen; i++) {
    //相同元素去重
    if (S[i] == res[n - 1]) {
      res.pop();
      n--;
    } else {
      res.push(S[i]);
      n++;
    }
  }
  //数组去间隔转字符串
  return res.join("").toString();
};

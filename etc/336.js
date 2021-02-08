var palindromePairs = function (words) {
  let n = words.length;
  let res = [];
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      let w = words[i] + words[j];
      let rew = words[j] + words[i];
      if (isPalindrom(w)) res.push([i, j]);
      if (isPalindrom(rew)) res.push([j, i]);
    }
  }
  return res;
};

function isPalindrom(str) {
  for (let i = 0; i < str.length / 2; ++i) {
    if (str[i] != str[str.length - 1 - i]) return false;
  }
  return true;
}

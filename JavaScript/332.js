/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  tickets.sort(([a1, a2], [b1, b2]) =>
    a1 > b1 || (a1 === b1 && a2 > b2) ? 1 : -1
  );
  const record = tickets.reduce((t, i) => {
    if (t[i[0]]) t[i[0]].push(i[1]);
    else t[i[0]] = [i[1]];
    return t;
  }, {});
  let res, next, key, nextIsVisited;
  function backTrace(now, path, isVisited) {
    if (res) return;
    if (path.length === tickets.length + 1) {
      res = path;
      return;
    }
    if (!record[now]) return;
    for (let i = 0; i < record[now].length; i++) {
      next = record[now][i];
      key = now + "-" + i;
      if (isVisited[key]) continue;
      nextIsVisited = Object.assign({}, isVisited);
      nextIsVisited[key] = true;
      backTrace(next, path.concat(next), nextIsVisited);
    }
  }
  backTrace("JFK", ["JFK"], {}, 0);
  return res;
};

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
function DFS(board, res, i, j, k) {
  if (
    i >= board.length ||
    i < 0 ||
    j >= board[0].length ||
    j < 0 ||
    board[i][j] != res[k]
  )
    return false;
  if (k == res.length - 1) return true;
  let tmp = board[i][j];
  board[i][j] = "/";
  let bol =
    DFS(board, res, i - 1, j, k + 1) ||
    DFS(board, res, i + 1, j, k + 1) ||
    DFS(board, res, i, j - 1, k + 1) ||
    DFS(board, res, i, j + 1, k + 1);
  board[i][j] = tmp;
  return bol;
}
var exist = function (board, word) {
  const n = board.length,
    m = board[0].length,
    res = [...word];
  const w = res.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (DFS(board, res, i, j, 0)) return true;
    }
  }
  return false;
};

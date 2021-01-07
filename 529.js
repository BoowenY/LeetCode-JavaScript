/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function (board, click) {
  let [x, y] = click;
  let lx = board.length;
  let ly = board[0].length;
  let dir = [
    [0, 1, 1, 1, 0, -1, -1, -1],
    [1, 1, 0, -1, -1, -1, 0, 1],
  ];
  function dfs(board, lx, ly, [x, y], dir) {
    if (board[x][y] == "M") {
      board[x][y] = "X";
      return board;
    }
    let n = 0;
    for (let i = 0; i < 8; i++) {
      if (
        x + dir[0][i] >= 0 &&
        x + dir[0][i] < lx &&
        y + dir[1][i] >= 0 &&
        y + dir[1][i] < ly
      ) {
        if (board[x + dir[0][i]][y + dir[1][i]] == "M") {
          n++;
        }
      }
    }
    if (n > 0) {
      board[x][y] = String(n);
    } else {
      board[x][y] = "B";
      for (let i = 0; i < 8; i++) {
        if (
          x + dir[0][i] >= 0 &&
          x + dir[0][i] < lx &&
          y + dir[1][i] >= 0 &&
          y + dir[1][i] < ly &&
          (board[x + dir[0][i]][y + dir[1][i]] == "E" ||
            board[x + dir[0][i]][y + dir[1][i]] == "M")
        ) {
          dfs(board, lx, ly, [x + dir[0][i], y + dir[1][i]], dir);
        }
      }
    }
  }
  dfs(board, lx, ly, click, dir);
  return board;
};

var setZeroes = (matrix) => {
  //检查第一行第一列是否有0
  let firstCol = false,
    firstRow = false;
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] === 0) firstCol = true;
  }
  for (let i = 0; i < matrix[0].length; i++) {
    if (matrix[0][i] === 0) firstRow = true;
  }
  //检查其他行是否有0
  for (let row = 1; row < matrix.length; row++) {
    for (let col = 1; col < matrix[0].length; col++) {
      if (matrix[row][col] === 0) {
        matrix[row][0] = 0;
        matrix[0][col] = 0;
      }
    }
  }

  for (let row = 1; row < matrix.length; row++) {
    for (let col = 1; col < matrix[0].length; col++) {
      if (matrix[row][0] === 0 || matrix[0][col] === 0) {
        matrix[row][col] = 0;
      }
    }
  }
  if (firstCol) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][0] = 0;
    }
  }
  if (firstRow) {
    for (let i = 0; i < matrix[0].length; i++) {
      matrix[0][i] = 0;
    }
  }
  return matrix;
};

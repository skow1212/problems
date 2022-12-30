/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;
  let zero = false;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 0) {
        matrix[0][j] = 0;
        if (i > 0) {
          matrix[i][0] = 0;
        } else {
          zero = true;
        }
      }
    }
  }
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (matrix[0][j] === 0 || matrix[i][0] === 0) {
        matrix[i][j] = 0;
      }
    }
  }
  if (matrix[0][0] === 0) {
    for (let i = 0; i < rows; i++) {
      matrix[i][0] = 0;
    }
  }
  if (zero) {
    for (let j = 0; j < cols; j++) {
      matrix[0][j] = 0;
    }
  }
};

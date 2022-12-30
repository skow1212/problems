/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let l = 0;
  let r = matrix[0].length - 1;
  while (l < r) {
    for (let i = 0; i < r - l; i++) {
      let t = l;
      let b = r;
      let tmp = matrix[t][l + i];
      matrix[t][l + i] = matrix[b - i][l];
      matrix[b - i][l] = matrix[b][r - i];
      matrix[b][r - i] = matrix[t + i][r];
      matrix[t + i][r] = tmp;
    }
    r--;
    l++;
  }
};

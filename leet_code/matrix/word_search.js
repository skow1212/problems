/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const dfs = function (r, c, i) {
    if (
      r < 0 ||
      c < 0 ||
      r >= board.length ||
      c >= board[0].length ||
      board[r][c] !== word.charAt(i)
    ) {
      return false;
    }
    if (board[r][c] === word.charAt(i) && i === word.length - 1) {
      return true;
    }
    const temp = board[r][c];
    board[r][c] = 0;
    const res =
      dfs(r + 1, c, i + 1) ||
      dfs(r - 1, c, i + 1) ||
      dfs(r, c + 1, i + 1) ||
      dfs(r, c - 1, i + 1);
    board[r][c] = temp;
    return res;
  };
  let rows = board.length;
  let cols = board[0].length;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (dfs(r, c, 0)) {
        return true;
      }
    }
  }
  return false;
};

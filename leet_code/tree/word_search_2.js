/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
  const buildTrie = (words) => {
    let root = {};
    for (let word of words) {
      let curr = root;
      for (let c of word) {
        if (!curr[c]) {
          curr[c] = {};
        }
        curr = curr[c];
      }
    }
    return root;
  };
  const dfs = (node, i, j, res, board) => {
    if (node.word) {
      res.push(node.word);
      node.word = null;
    }
    if (
      i >= 0 &&
      j >= 0 &&
      i <= board.length - 1 &&
      j <= board[0].length &&
      node[board[r][c]]
    ) {
      let c = board[r][c];
      board[r][c] = "#";
      dfs(node[c], i + 1, j, res, board);
      dfs(node[c], i - 1, j, res, board);
      dfs(node[c], i, j + 1, res, board);
      dfs(node[c], i, j - 1, res, board);
      board[r][c] = c;
    }
  };
  let res = [];
  let root = buildTrie(words);
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      dfs(root, i, j, res, board);
    }
  }
  return res;
};

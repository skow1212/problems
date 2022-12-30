/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const dfs = (grid, m, n, i, j) => {
    if (i >= 0 && i < m && j >= 0 && j < n && grid[i][j] === "1") {
      grid[i][j] = "X";
      dfs(grid, m, n, i - 1, j);
      dfs(grid, m, n, i + 1, j);
      dfs(grid, m, n, i, j - 1);
      dfs(grid, m, n, i, j + 1);
    }
  };
  if (grid.length == 0 || grid[0].length == 0) {
    return 0;
  }
  let m = grid.length,
    n = grid[0].length;
  let count = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "1") {
        count++;
        dfs(grid, m, n, i, j);
      }
    }
  }
  return count;
};

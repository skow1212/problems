/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  // Starting from an edge of heights that touches an ocean, move inward and add all cells to the ocean matrix that can spill into the previously vistited cell
  const dfs = (i, j, prev, ocean) => {
    // Stop dfs if we given coordinates that are not on the board, if the value of the cell we are visiting cannot spill water into the previous cell, or if we have already visited this cell
    if (
      i >= 0 &&
      i < r &&
      j >= 0 &&
      j < c &&
      heights[i][j] >= prev &&
      !ocean[i][j]
    ) {
      // Set this cell as visited by the current ocean
      ocean[i][j] = true;

      // Look in all directions to find more nodes that can visit the current ocean by flowing into the cell at [i, j]
      dfs(i + 1, j, heights[i][j], ocean);
      dfs(i - 1, j, heights[i][j], ocean);
      dfs(i, j + 1, heights[i][j], ocean);
      dfs(i, j - 1, heights[i][j], ocean);
    }
  };
  // Set amount of rows and columns to variables
  const r = heights.length;
  const c = heights[0].length;

  // Create matrixes to hold which cells can visit each ocean
  const p = Array(r)
    .fill()
    .map(() => Array(c).fill(false));
  const a = Array(r)
    .fill()
    .map(() => Array(c).fill(false));

  // Run dfs on first and last columns that touch an ocean
  for (let col = 0; col < c; col++) {
    dfs(0, col, -Infinity, p);
    dfs(r - 1, col, -Infinity, a);
  }

  // Run dfs on each cell on the top and bottom rows that touch an ocean
  for (let row = 0; row < r; row++) {
    dfs(row, 0, -Infinity, p);
    dfs(row, c - 1, -Infinity, a);
  }

  const ans = [];

  // Check which cells [i, j] are able to touch both oceans by checking if a cell is in both ocean matrixes
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (a[i][j] && p[i][j]) {
        ans.push([i, j]);
      }
    }
  }
  return ans;
};

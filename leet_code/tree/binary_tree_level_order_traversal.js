/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
//bfs
var levelOrder = function (root) {
  if (!root) {
    return [];
  }
  let res = [];
  let q = [root];
  while (q.length) {
    let lv = [];
    for (let i = q.length; i > 0; i--) {
      let n = q.shift();
      if (n) {
        lv.push(n.val);
        q.push(n.left);
        q.push(n.right);
      }
    }
    if (lv.length) {
      res.push(lv);
    }
  }
  return res;
};
//dfs
var levelOrder = function (root) {
  const levels = {};
  const dfs = (root, lv = 0) => {
    if (root) {
      if (!levels[lv]) {
        levels[lv] = [];
      }
      levels[lv].push(root.val);
      dfs(root.left, lv + 1);
      dfs(root.right, lv + 1);
    }
  };
  dfs(root);
  return Object.keys(levels).map((key) => levels[key]);
};

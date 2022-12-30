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
 * @return {number}
 */
var maxPathSum = function (root) {
  let res = [root.val];
  const dfs = (root) => {
    if (!root) {
      return 0;
    }
    let lmax = dfs(root.left);
    let rmax = dfs(root.right);
    lmax = Math.max(lmax, 0);
    rmax = Math.max(rmax, 0);
    res.unshift(Math.max(res[0], root.val + lmax + rmax));
    return root.val + Math.max(lmax, rmax);
  };
  dfs(root);
  return res.shift();
};

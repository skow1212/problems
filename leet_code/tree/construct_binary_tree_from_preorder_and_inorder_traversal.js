/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  const splitTree = (map, i, l, r) => {
    let rval = preorder[i];
    let root = new TreeNode(rval);
    let mid = map.get(rval);
    if (mid > l) {
      root.left = splitTree(map, i + 1, l, mid - 1);
    }
    if (mid < r) {
      root.right = splitTree(map, i + mid - l + 1, mid + 1, r);
    }
    return root;
  };
  let map = new Map();
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }
  return splitTree(map, 0, 0, inorder.length - 1);
};

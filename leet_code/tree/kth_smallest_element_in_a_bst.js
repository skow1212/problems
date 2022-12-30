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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  const inorder = (node, list) => {
    if (node) {
      inorder(node.left, list);
      list.push(node.val);
      inorder(node.right, list);
    }
  };
  let list = [];
  inorder(root, list);
  return list[k - 1];
};

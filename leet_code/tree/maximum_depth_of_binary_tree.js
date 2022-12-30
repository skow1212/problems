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
//dfs
// var maxDepth = function (root) {
//   if (!root) {
//     return 0;
//   }
//   return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
// };
//bfs
// var maxDepth = function (root) {
//   if (!root) {
//     return 0;
//   }
//   var q = [];
//   q.push(root);
//   var lv = 0;
//   while (q.length > 0) {
//     for (let i = q.length; i > 0; i--) {
//       let n = q.shift();
//       if (n.left) {
//         q.push(n.left);
//       }
//       if (n.right) {
//         q.push(n.right);
//       }
//     }
//     lv++;
//   }
//   return lv;
// };

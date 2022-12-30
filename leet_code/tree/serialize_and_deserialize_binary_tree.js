/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  let res = [];
  const dfs = (node) => {
    if (node) {
      res.push(node.val.toString());
      dfs(node.left);
      dfs(node.right);
    } else {
      res.push("N");
    }
  };
  dfs(root);
  return res.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  let list = data.split(",");
  let i = 0;
  const dfs = () => {
    if (list[i] === "N") {
      i++;
      return null;
    }
    let node = new TreeNode(parseInt(list[i], 10));
    i++;
    node.left = dfs();
    node.right = dfs();
    return node;
  };
  return dfs();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

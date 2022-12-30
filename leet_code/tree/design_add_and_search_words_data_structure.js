var WordDictionary = function () {
  this.root = {};
};

/**
 * Adds a word into the data structure.
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let node = this.root;
  for (let c of word) {
    if (!node[c]) {
      node[c] = {};
    }
    node = node[c];
  }
  node.isEnd = true;
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  const dfs = (word, i, node) => {
    if (i === word.length) {
      return node.isEnd === true;
    }
    if (word[i] == ".") {
      for (let key in node) {
        if (dfs(word, i + 1, node[key])) {
          return true;
        }
      }
    } else {
      if (node[word[i]]) {
        return dfs(word, i + 1, node[word[i]]);
      }
    }
    return false;
  };
  return dfs(word, 0, this.root);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

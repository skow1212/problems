/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const ALPHABET_START = 97;
  let slist = new Array(26).fill(0);
  let tlist = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    slist[s.charCodeAt(i) - ALPHABET_START]++;
    tlist[t.charCodeAt(i) - ALPHABET_START]++;
  }
  return slist.join("") === tlist.join("");
};

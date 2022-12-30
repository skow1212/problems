/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    let l = i;
    let r = i;
    while (i >= 0 && r < s.length && s[l] === s[r]) {
      res++;
      l--;
      r++;
    }
    l = i;
    r = i + 1;
    while (i >= 0 && r < s.length && s[l] === s[r]) {
      res++;
      l--;
      r++;
    }
  }
  return res;
};

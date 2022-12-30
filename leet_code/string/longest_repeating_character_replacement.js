/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let c = {},
    maxf = 0,
    res = 0;
  for (let l = 0, r = 0; r < s.length; r++) {
    c[s[r]] = (c[s[r]] || 0) + 1;
    maxf = Math.max(maxf, c[s[r]]);
    if (r - l + 1 - maxf > k) {
      c[s[l++]]--;
    }
    res = Math.max(res, r - l + 1);
  }
  return res;
};

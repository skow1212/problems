/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
//hard
var minWindow = function (s, t) {
  if (!s || !t || s.length < t.length) {
    return "";
  }

  let l = 0,
    r = 0;
  let cnt = 0,
    minI = s.length + 1,
    minL = s.length + 1;

  const freqMap = {};
  for (const ch of t) {
    freqMap[ch] = (freqMap[ch] || 0) + 1;
  }

  while (r < s.length) {
    if (freqMap[s[r]]-- >= 1) {
      cnt++;
    }
    r++;
    while (cnt == t.length) {
      if (r - l < minL) {
        minL = r - l;
        minI = l;
      }
      if (freqMap[s[l]]++ >= 0) {
        cnt--;
      }
      l++;
    }
  }
  return s.slice(minI, minI + minL);
};

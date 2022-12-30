/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const isPalindrome = function (str) {
    let rev = str.split("").reverse().join("");
    return str === rev;
  };
  if (isPalindrome(s)) {
    return s;
  }
  let max = 1,
    start = 0;
  let low, high;
  for (let i = 0; i < s.length; i++) {
    low = i - 1;
    high = i + 1;
    while (high < s.length && s[high] == s[i])
      //increment 'high'
      high++;
    while (low >= 0 && s[low] == s[i])
      // decrement 'low'
      low--;
    while (low >= 0 && high < s.length && s[low] == s[high]) {
      low--;
      high++;
    }
    let wnd = high - low - 1;
    if (max < wnd) {
      max = wnd;
      start = low + 1;
    }
  }
  return s.substring(start, max + start);
};

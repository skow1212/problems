/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let str = s.match(/[A-Za-z0-9]/g);
  if (str === null) {
    return true;
  }
  str = str.join("").toLowerCase();
  for (let i = 0; i < ~~str.length / 2; i++) {
    if (str.charAt(i) !== str.charAt(str.length - 1 - i)) {
      return false;
    }
  }
  return true;
};

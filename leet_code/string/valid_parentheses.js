/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const pMap = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  if (s.length <= 1) {
    return false;
  }
  let stack = [];
  for (let c of s) {
    if (pMap[c]) {
      stack.push(pMap[c]);
    } else if (stack.length !== 0 && stack[stack.length - 1] === c) {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length === 0;
};

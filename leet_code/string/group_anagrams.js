/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  if (strs.length === 0) {
    return strs;
  }
  let hashMap = new Map();
  let res = [];
  for (let str of strs) {
    let sortedStr = [...str].sort().join("");
    if (!hashMap.has(sortedStr)) {
      hashMap.set(sortedStr, [str]);
    } else {
      hashMap.get(sortedStr).push(str);
    }
  }
  hashMap.forEach((val) => {
    res.push(val);
  });

  return res;
};
let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));

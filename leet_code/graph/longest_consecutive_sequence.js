/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const set = new Set(nums);
  let cnt = 0;
  set.forEach((num) => {
    if (!set.has(num - 1)) {
      let len = 0;
      while (set.has(num + len)) {
        len++;
        cnt = Math.max(len, cnt);
      }
    }
  });
  return cnt;
};

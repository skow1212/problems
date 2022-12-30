/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let set = new Set();
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (set.has(diff)) {
      return [nums.indexOf(diff), i];
    }
    set.add(nums[i]);
  }
  return [];
};

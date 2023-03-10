/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let res = [];
  for (let l = 0; l < nums.length; l++) {
    if (l > 0 && nums[l] == nums[l - 1]) {
      continue;
    }
    let s = l + 1;
    let r = nums.length - 1;
    while (s < r) {
      let sum = nums[l] + nums[s] + nums[r];
      if (sum > 0) {
        r--;
      } else if (sum < 0) {
        s++;
      } else if (sum == 0) {
        res.push([nums[l], nums[s], nums[r]]);
        s++;
        while (nums[s] === nums[s - 1] && l < r) {
          s++;
        }
      }
    }
  }
  return res;
};

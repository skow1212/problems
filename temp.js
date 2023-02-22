/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let prevMax = nums[0];
  let prevMin = nums[0];
  let currMax = nums[0];
  let currMin = nums[0];
  let ans = nums[0];
  let l = 0;
  let r = 0;
  for (let i = 1; i < nums.length; i++) {
    currMax = Math.max(nums[i], nums[i] * prevMax, nums[i] * prevMin);
    currMin = Math.min(nums[i], nums[i] * prevMax, nums[i] * prevMin);
    ans = Math.max(currMax, ans);
    prevMax = currMax;
    prevMin = currMin;
  }
  return ans;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let maxSum = nums[0];
  let innerSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    innerSum = Math.max(innerSum + nums[i], nums[i]);
    maxSum = Math.max(maxSum, innerSum);
  }
  return maxSum;
};

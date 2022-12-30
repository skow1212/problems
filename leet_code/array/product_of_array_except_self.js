/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let ans = [];
  let prefix = 1,
    postfix = 1;
  for (let i = 0; i < nums.length; i++) {
    ans[i] = prefix;
    prefix *= nums[i];
  }
  for (let j = nums.length - 1; j >= 0; j--) {
    ans[j] *= postfix;
    postfix *= nums[j];
  }
  return ans;
};

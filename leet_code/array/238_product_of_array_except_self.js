/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let fw = 1,
    bw = 1;
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    res[i] = fw;
    fw *= nums[i];
  }
  for (let j = nums.length - 1; j >= 0; j--) {
    res[j] *= bw;
    bw *= nums[j];
  }
  return res;
};

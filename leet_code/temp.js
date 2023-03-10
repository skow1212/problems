/**
 * @param {number[]} height
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = nums[0];
  let inner = nums[0];
  let l = 0;
  let r = 0;
  for (let i = 0; i < nums.length; i++) {
    let sum = inner + nums[i];
    if (sum < nums[i]) {
      l = i;
      inner = nums[i];
    } else {
      inner = sum;
    }
    if (max < sum) {
      r = i;
      max = sum;
    }
  }
  let sub = [];
  for (let i = l; i <= r; i++) {
    sub.push(nums[i]);
  }
  console.log(sub);
  return max;
};

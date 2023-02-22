/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  //sum all the elements
  let sum = nums.reduce((a, b) => a + b, 0);
  let curr = 0;
  //curr is current sum of elements and find index when sum-curr=remainder
  for (let i = 0; i < nums.length; i++) {
    curr += nums[i];
    if (curr - nums[i] == sum - curr) {
      return i;
    }
  }
  return -1;
};

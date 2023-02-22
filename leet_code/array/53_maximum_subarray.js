/**
 * @param {number[]} nums
 * @return {number}
 */
//include array
// var maxSubArray = function (nums) {
//   let maxSum = nums[0];
//   let innerSum = nums[0];
//   let l = 0;
//   let r = 0;
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] > innerSum + nums[i]) {
//       l = i;
//       innerSum = nums[i];
//     } else {
//       innerSum += nums[i];
//     }
//     if (maxSum < innerSum) {
//       r = i;
//       maxSum = innerSum;
//     }
//   }
//   let sub = [];
//   for (let i = l; i <= r; i++) {
//     sub.push(nums[i]);
//   }
//   console.log(sub);
//   return maxSum;
// };
//without array
var maxSubArray = function (nums) {
  let maxSum = nums[0];
  let innerSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    innerSum = Math.max(innerSum + nums[i], nums[i]);
    maxSum = Math.max(maxSum, innerSum);
  }
  return maxSum;
};

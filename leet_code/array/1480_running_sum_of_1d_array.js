/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let res = [];
  let sum = 0;
  nums.forEach((num) => res.push((sum += num)));
  return res;
};

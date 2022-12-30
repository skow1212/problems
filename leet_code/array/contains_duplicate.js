/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let set = new Set();
  nums.forEach((num) => set.add(num));
  return nums.length !== set.size;
};

console.log(containsDuplicate([1, 2, 3, 4]));

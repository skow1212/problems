/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let l = 0;
  let r = nums.length - 1;
  if (nums[r] > nums[0]) {
    return nums[0];
  }
  while (l <= r) {
    let mid = ~~((l + r) / 2);
    if (nums[mid] > nums[mid + 1]) {
      return nums[mid + 1];
    }
    if (nums[mid - 1] > nums[mid]) {
      return nums[mid];
    }
    if (nums[mid] > nums[0]) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // if (nums <= target) {
  //   return nums.indexOf(target);
  // } else {
  //   return nums.lastIndexOf(target);
  // }
  if (nums !== null) {
    let l = 0;
    let r = nums.length - 1;
    while (l <= r) {
      let mid = ~~((l + r) / 2);
      if (target === nums[mid]) {
        return mid;
      }
      if (nums[l] <= nums[mid]) {
        if (nums[l] <= target && target <= nums[mid]) {
          r = mid - 1;
        } else {
          l = mid + 1;
        }
      } else {
        if (nums[mid] <= target && target <= nums[r]) {
          l = mid + 1;
        } else {
          r = mid - 1;
        }
      }
    }
  }
  return -1;
};

//recursive
// var search = function (nums, target) {
  const search = (nums, target, l, r) => {
    if (l > r) {
      return -1;
    }
    let mid = ~~((l + r) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[l] <= nums[mid]) {
      return nums[l] <= target && target <= nums[mid]
        ? search(nums, target, l, mid - 1)
        : search(nums, target, mid + 1, r);
    } else {
      return nums[mid] <= target && target <= nums[r]
        ? search(nums, target, mid + 1, r)
        : search(nums, target, l, mid - 1);
    }
  };
  return search(nums, target, 0, nums.length - 1);
// };

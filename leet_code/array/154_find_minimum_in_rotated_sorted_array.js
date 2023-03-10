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

//recursive
// var findMin = function (nums) {
  // const findMin = (nums, l, r) => {
  //   if (l > r) {
  //     return nums[0];
  //   }
  //   let mid = ~~((l + r) / 2);
  //   if (nums[mid] > nums[mid + 1]) {
  //     return nums[mid + 1];
  //   }
  //   if (nums[mid - 1] > nums[mid]) {
  //     return nums[mid];
  //   }
  //   if (nums[mid] > nums[0]) {
  //     return findMin(nums, mid + 1, r);
  //   } else {
  //     return findMin(nums, l, mid - 1);
  //   }
  // };
  // if (nums[nums.length - 1] > nums[0]) {
  //   return nums[0];
  // }
  // return findMin(nums, 0, nums.length - 1);
// };

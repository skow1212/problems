/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let maximumArea = 0,
    i = 0,
    j = height.length - 1;
  while (i < j) {
    const area = Math.min(height[i], height[j]) * (j - i);
    maximumArea = Math.max(maximumArea, area);
    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }

  return maximumArea;
};

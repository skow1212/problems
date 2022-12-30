/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  let sorted = intervals.sort((a, b) => a[0] - b[0]);
  let output = [sorted[0]];
  for (let i = 1; i < sorted.length; i++) {
    let s = sorted[i][0];
    let e = sorted[i][1];
    let last = output[output.length - 1][1];
    if (s <= last) {
      output[output.length - 1][1] = Math.max(last, e);
    } else {
      output.push(sorted[i]);
    }
  }
  return output;
};

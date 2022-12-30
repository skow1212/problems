/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => a[1] - b[1]);
  let prevInterval = intervals[0];
  let cnt = 0;
  for (let i = 1; i < intervals.length; i++) {
    if (prevInterval[1] > intervals[i][0]) {
      cnt++;
    } else {
      prevInterval = intervals[i];
    }
  }
  return cnt;
};

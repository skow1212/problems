/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let max = 0;
  let lowest = prices[0];
  for (let i = 1; i < prices.length; i++) {
    lowest = Math.min(prices[i], lowest);
    max = Math.max(prices[i] - lowest, max);
  }
  return max;
};

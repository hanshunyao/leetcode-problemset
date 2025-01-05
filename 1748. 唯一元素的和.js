/*
 * @Author: Hansy hanshunyao_hansy@163.com
 * @Date: 2025-01-05 14:45:17
 * @LastEditors: Hansy hanshunyao_hansy@163.com
 * @LastEditTime: 2025-01-05 14:45:24
 * @FilePath: \leetcode-problemset\1748. 唯一元素的和.js
 * @Description: 1748. 唯一元素的和
 */
// 给你一个整数数组 nums 。数组中唯一元素是那些只出现 恰好一次 的元素。
// 请你返回 nums 中唯一元素的 和 。
// 示例 1：
// 输入：nums = [1,2,3,2]
// 输出：4
// 解释：唯一元素为 [1,3] ，和为 4 。
// 示例 2：
// 输入：nums = [1,1,1,1,1]
// 输出：0
// 解释：没有唯一元素，和为 0 。
// 示例 3 ：
// 输入：nums = [1,2,3,4,5]
// 输出：15
// 解释：唯一元素为 [1,2,3,4,5] ，和为 15 。
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
  const cnt = new Map();
  for (const num of nums) {
    cnt.set(num, (cnt.get(num) || 0) + 1);
  }
  let ans = 0;
  for (const [num, c] of cnt.entries()) {
    if (c === 1) {
      ans += num;
    }
  }
  return ans;
};

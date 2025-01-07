/*
 * @Author: Hansy hanshunyao_hansy@163.com
 * @Date: 2025-01-07 21:10:10
 * @LastEditors: Hansy hanshunyao_hansy@163.com
 * @LastEditTime: 2025-01-07 21:10:10
 * @FilePath: \leetcode-problemset\209. 长度最小的子数组.js
 * @Description: 209. 长度最小的子数组
 */
// 给定一个含有 n 个正整数的数组和一个正整数 target 。
// 找出该数组中满足其总和大于等于 target 的长度最小的
// 子数组
//  [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。
// 示例 1：
// 输入：target = 7, nums = [2,3,1,2,4,3]
// 输出：2
// 解释：子数组 [4,3] 是该条件下的长度最小的子数组。
// 示例 2：
// 输入：target = 4, nums = [1,4,4]
// 输出：1
// 示例 3：
// 输入：target = 11, nums = [1,1,1,1,1,1,1,1]
// 输出：0
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let start = 0;
  let sum = 0;
  let result = nums.length + 1;
  for (let end = 0; end < nums.length; end++) {
    sum += nums[end];
    while (sum >= target) {
      result = Math.min(result, end - start + 1);
      sum -= nums[start];
      start++;
    }
  }
  return result > nums.length ? 0 : result;
};

/*
 * @Author: Hansy hanshunyao_hansy@163.com
 * @Date: 2025-01-06 22:10:21
 * @LastEditors: Hansy hanshunyao_hansy@163.com
 * @LastEditTime: 2025-01-06 22:11:01
 * @FilePath: \leetcode-problemset\977. 有序数组的平方.js
 * @Description: 977. 有序数组的平方
 */
// 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。
// 示例 1：
// 输入：nums = [-4,-1,0,3,10]
// 输出：[0,1,9,16,100]
// 解释：平方后，数组变为 [16,1,0,9,100]
// 排序后，数组变为 [0,1,9,16,100]
// 示例 2：
// 输入：nums = [-7,-3,2,3,11]
// 输出：[4,9,9,49,121]
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let result = [];
  let k = nums.length - 1;
  while (left <= right) {
    if (nums[left] ** 2 > nums[right] ** 2) {
      result[k] = nums[left] ** 2;
      k--;
      left++;
    } else {
      result[k] = nums[right] ** 2;
      k--;
      right--;
    }
  }
  return result;
};

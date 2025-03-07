/*
 * @Author: hansy hanshunyao_hansy@163.com
 * @Date: 2025-03-07 20:41:48
 * @LastEditors: hansy hanshunyao_hansy@163.com
 * @LastEditTime: 2025-03-07 20:42:00
 * @FilePath: \leetcode-problemset\238-除自身以外数组的乘积.js
 * @Description: 238. 除自身以外数组的乘积
 */
// 给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积 。
// 题目数据 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内。
// 请 不要使用除法，且在 O(n) 时间复杂度内完成此题。
// 示例 1:
// 输入: nums = [1,2,3,4]
// 输出: [24,12,8,6]
// 示例 2:
// 输入: nums = [-1,1,0,-3,3]
// 输出: [0,0,9,0,0]
// 提示：
// 2 <= nums.length <= 105
// -30 <= nums[i] <= 30
// 输入 保证 数组 answer[i] 在  32 位 整数范围内
// 进阶：你可以在 O(1) 的额外空间复杂度内完成这个题目吗？（ 出于对空间复杂度分析的目的，输出数组 不被视为 额外空间。）
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let map1 = new Map();
  let map2 = new Map();
  let len = nums.length;

  for (let i = 0; i < len; i++) {
    if (i === 0) {
      map1.set(i, nums[i]);
      map2.set(len - i - 1, nums[len - i - 1]);
      continue;
    }
    let last = map1.get(i - 1);
    let next = map2.get(len - i - 1 + 1);
    map1.set(i, nums[i] * last);
    map2.set(len - i - 1, nums[len - i - 1] * next);
  }

  let result = [];
  for (let j = 0; j < len; j++) {
    if (j === 0) {
      result.push(map2.get(j + 1));
      continue;
    }
    if (j === len - 1) {
      result.push(map1.get(j - 1));
      continue;
    }
    let num = map1.get(j - 1) * map2.get(j + 1);
    result.push(num);
  }

  return result;
};

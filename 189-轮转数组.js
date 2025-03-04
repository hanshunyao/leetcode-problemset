/*
 * @Author: hansy hanshunyao_hansy@163.com
 * @Date: 2025-03-04 10:09:35
 * @LastEditors: hansy hanshunyao_hansy@163.com
 * @LastEditTime: 2025-03-04 10:09:35
 * @FilePath: \leetcode-problemset\189-轮转数组.js
 * @Description: 189. 轮转数组
 */
// 给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。
// 示例 1:
// 输入: nums = [1,2,3,4,5,6,7], k = 3
// 输出: [5,6,7,1,2,3,4]
// 解释:
// 向右轮转 1 步: [7,1,2,3,4,5,6]
// 向右轮转 2 步: [6,7,1,2,3,4,5]
// 向右轮转 3 步: [5,6,7,1,2,3,4]
// 示例 2:
// 输入：nums = [-1,-100,3,99], k = 2
// 输出：[3,99,-1,-100]
// 解释: 
// 向右轮转 1 步: [99,-1,-100,3]
// 向右轮转 2 步: [3,99,-1,-100]

//  使用三次倒叙 先整体倒叙 再倒叙前k 个 再倒叙后k 个
 /**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const n = nums.length;
  k %= n;
  if (k === 0) return;
  function reverse(start, end) {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    }
  }

  reverse(0, n - 1);
  reverse(0, k - 1);
  reverse(k, n - 1)
};

// 取余之后 截取要移动的部分 然后拼接到数组前面
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  let len = nums.length;
  k %= len;
  let arr = nums.splice(0, len - k);
  nums.push(...arr)
};

// 使用额外数组手动在新的数组 按新的数组组好 之后 手动在 一个一个赋值给 nums

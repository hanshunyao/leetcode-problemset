/*
 * @Author: hansy hanshunyao_hansy@163.com
 * @Date: 2025-04-16 14:46:51
 * @LastEditors: hansy hanshunyao_hansy@163.com
 * @LastEditTime: 2025-04-16 14:46:51
 * @FilePath: \leetcode-problemset\2537-统计好子数组的数目.js
 * @Description: 2537. 统计好子数组的数目
 */
// 给你一个整数数组 nums 和一个整数 k ，请你返回 nums 中 好 子数组的数目。
// 一个子数组 arr 如果有 至少 k 对下标 (i, j) 满足 i < j 且 arr[i] == arr[j] ，那么称它是一个 好 子数组。
// 子数组 是原数组中一段连续 非空 的元素序列。
// 示例 1：
// 输入：nums = [1,1,1,1,1], k = 10
// 输出：1
// 解释：唯一的好子数组是这个数组本身。
// 示例 2：
// 输入：nums = [3,1,4,3,2,2,4], k = 2
// 输出：4
// 解释：总共有 4 个不同的好子数组：
// - [3,1,4,3,2,2] 有 2 对。
// - [3,1,4,3,2,2,4] 有 3 对。
// - [1,4,3,2,2,4] 有 2 对。
// - [4,3,2,2,4] 有 2 对。
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countGood = function (nums, k) {
  const cnt = new Map();
  let ans = 0, pairs = 0, left = 0;
  for (const x of nums) {
    const c = cnt.get(x) ?? 0;
    pairs += c; // 进
    cnt.set(x, c + 1);
    while (pairs >= k) {
      const x = nums[left];
      const c = cnt.get(x);
      pairs -= c - 1; // 出
      cnt.set(x, c - 1);
      left++;
    }
    ans += left;
  }
  return ans;
};

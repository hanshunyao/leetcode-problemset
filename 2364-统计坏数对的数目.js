/*
 * @Author: hansy hanshunyao_hansy@163.com
 * @Date: 2025-04-18 09:49:43
 * @LastEditors: hansy hanshunyao_hansy@163.com
 * @LastEditTime: 2025-04-18 09:49:51
 * @FilePath: \leetcode-problemset\2364-统计坏数对的数目.js
 * @Description: 2364. 统计坏数对的数目
 */
// 给你一个下标从 0 开始的整数数组 nums 。如果 i < j 且 j - i != nums[j] - nums[i] ，那么我们称 (i, j) 是一个 坏数对 。
// 请你返回 nums 中 坏数对 的总数目。
// 示例 1：
// 输入：nums = [4,1,3,3]
// 输出：5
// 解释：数对 (0, 1) 是坏数对，因为 1 - 0 != 1 - 4 。
// 数对 (0, 2) 是坏数对，因为 2 - 0 != 3 - 4, 2 != -1 。
// 数对 (0, 3) 是坏数对，因为 3 - 0 != 3 - 4, 3 != -1 。
// 数对 (1, 2) 是坏数对，因为 2 - 1 != 3 - 1, 1 != 2 。
// 数对 (2, 3) 是坏数对，因为 3 - 2 != 3 - 3, 1 != 0 。
// 总共有 5 个坏数对，所以我们返回 5 。
// 示例 2：
// 输入：nums = [1,2,3,4,5]
// 输出：0
// 解释：没有坏数对。
/**
 * @param {number[]} nums
 * @return {number}
 */
var countBadPairs = function (nums) {
  const n = nums.length;
  let ans = n * (n - 1) / 2;
  const cnt = new Map();
  for (let i = 0; i < n; i++) {
    const x = nums[i] - i;
    const c = cnt.get(x) ?? 0;
    ans -= c;
    cnt.set(x, c + 1);
  }
  return ans;
};

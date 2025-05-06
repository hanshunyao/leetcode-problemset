/*
 * @Author: Hansy hanshunyao_hansy@163.com
 * @Date: 2025-05-06 22:59:04
 * @LastEditors: Hansy hanshunyao_hansy@163.com
 * @LastEditTime: 2025-05-06 22:59:14
 * @FilePath: \leetcode-problemset\1920-基于排列构建数组.js
 * @Description: 1920. 基于排列构建数组
 */
// 给你一个 从 0 开始的排列 nums（下标也从 0 开始）。请你构建一个 同样长度 的数组 ans ，其中，对于每个 i（0 <= i < nums.length），都满足 ans[i] = nums[nums[i]] 。返回构建好的数组 ans 。
// 从 0 开始的排列 nums 是一个由 0 到 nums.length - 1（0 和 nums.length - 1 也包含在内）的不同整数组成的数组。
// 示例 1：
// 输入：nums = [0,2,1,5,3,4]
// 输出：[0,1,2,4,5,3]
// 解释：数组 ans 构建如下：
// ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]
//     = [nums[0], nums[2], nums[1], nums[5], nums[3], nums[4]]
//     = [0,1,2,4,5,3]
// 示例 2：
// 输入：nums = [5,0,1,2,3,4]
// 输出：[4,5,0,1,2,3]
// 解释：数组 ans 构建如下：
// ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]
//     = [nums[5], nums[0], nums[1], nums[2], nums[3], nums[4]]
//     = [4,5,0,1,2,3]
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    const x = nums[i];
    if (x < 0) { // 已搬家
      continue;
    }
    let cur = i;
    while (nums[cur] !== i) {
      const nxt = nums[cur];
      nums[cur] = ~nums[nxt]; // 把下一个数搬过来，同时做标记（取反）
      cur = nxt;
    }
    nums[cur] = ~x; // 对于这一组的最后一个数，把起点 x=nums[i] 搬过来
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] = ~nums[i]; // 复原
  }
  return nums;
};

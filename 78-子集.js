/*
 * @Author: Hansy hanshunyao_hansy@163.com
 * @Date: 2025-04-15 23:17:20
 * @LastEditors: Hansy hanshunyao_hansy@163.com
 * @LastEditTime: 2025-04-15 23:17:20
 * @FilePath: \leetcode-problemset\78-子集.js
 * @Description: 78. 子集
 */
// 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。
// 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。
// 示例 1：
// 输入：nums = [1,2,3]
// 输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// 示例 2：
// 输入：nums = [0]
// 输出：[[],[0]]
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let res = [];
  let len = nums.length;
  let path = [];

  dfs(0)
  return res

  function dfs (i) {
    if (i === len) {
      res.push([...path])
      return;
    }
    dfs(i + 1);
    path.push(nums[i]);
    dfs(i + 1);
    path.pop()
  }

};

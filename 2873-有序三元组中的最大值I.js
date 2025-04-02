/*
 * @Author: hansy hanshunyao_hansy@163.com
 * @Date: 2025-04-02 10:15:44
 * @LastEditors: hansy hanshunyao_hansy@163.com
 * @LastEditTime: 2025-04-02 10:15:52
 * @FilePath: \leetcode-problemset\2873-有序三元组中的最大值I.js
 * @Description: 2873. 有序三元组中的最大值 I
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function (nums) {
  // 一个数 j 左边的 最大值 和 右边的最大值
  let leftMax = [];
  let rightMax = [];
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      leftMax.push(nums[i]);
      continue;
    }
    leftMax.push(Math.max(leftMax[i - 1], nums[i]))
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    if (i === nums.length - 1) {
      rightMax[i] = nums[i];
      continue;
    }
    rightMax[i] = Math.max(rightMax[i + 1], nums[i]);
    const count = (leftMax[i] - nums[i]) * rightMax[i + 1];
    res = Math.max(res, count)
  }
  return res;
};

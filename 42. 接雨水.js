/*
 * @Author: hansy hanshunyao_hansy@163.com
 * @Date: 2025-02-20 16:08:48
 * @LastEditors: hansy hanshunyao_hansy@163.com
 * @LastEditTime: 2025-02-20 16:08:48
 * @FilePath: \leetcode-problemset\42. 接雨水.js
 * @Description: 42. 接雨水
 */
// 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
// 示例 1：
// 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
// 输出：6
// 解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。
// 示例 2：
// 输入：height = [4,2,0,3,2,5]
// 输出：9
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let num = 0;
  let maxLeftList = [];
  let maxRightList = [];
  for (let i = 0; i < height.length; i++) {
    if (i === 0) {
      maxLeftList[i] = 0;
    } else {
      maxLeftList[i] = Math.max(height[i - 1], maxLeftList[i - 1]);
    }
  }

  for (let i = height.length - 1; i >= 0; i--) {
    if (i === height.length - 1) {
      maxRightList[i] = 0;
    } else {
      maxRightList[i] = Math.max(height[i + 1], maxLeftList[i + 1]);
    }
  }

  for (let i = 0; i < height.length; i++) {
    if (i === 0 || i === height.length - 1) continue;
    num = num + Math.min(maxLeftList[i], maxRightList[i]) - height[i];
  }
  return num;
};

/*
 * @Author: Hansy hanshunyao_hansy@163.com
 * @Date: 2025-03-09 18:10:28
 * @LastEditors: Hansy hanshunyao_hansy@163.com
 * @LastEditTime: 2025-03-09 18:10:34
 * @FilePath: \leetcode-problemset\135-分发糖果.js
 * @Description: 135. 分发糖果
 */
// n 个孩子站成一排。给你一个整数数组 ratings 表示每个孩子的评分。
// 你需要按照以下要求，给这些孩子分发糖果：
// 每个孩子至少分配到 1 个糖果。
// 相邻两个孩子评分更高的孩子会获得更多的糖果。
// 请你给每个孩子分发糖果，计算并返回需要准备的 最少糖果数目 。
// 示例 1：
// 输入：ratings = [1,0,2]
// 输出：5
// 解释：你可以分别给第一个、第二个、第三个孩子分发 2、1、2 颗糖果。
// 示例 2：
// 输入：ratings = [1,2,2]
// 输出：4
// 解释：你可以分别给第一个、第二个、第三个孩子分发 1、2、1 颗糖果。
//      第三个孩子只得到 1 颗糖果，这满足题面中的两个条件。
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  let len = ratings.length;
  let sum = new Array(len).fill(1);
  for (let i = 1; i < len; i++) {
    if (ratings[i] > ratings[i - 1]) {
      sum[i] = sum[i - 1] + 1;
    }
  }
  for (let i = len - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      sum[i] = Math.max(sum[i + 1] + 1, sum[i]);
    }
  }
  let res = 0;
  for (let i = 0; i < len; i++) {
    res += sum[i];
  }
  return res;
};

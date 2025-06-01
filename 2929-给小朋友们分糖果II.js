/*
 * @Author: Hansy hanshunyao_hansy@163.com
 * @Date: 2025-06-01 13:48:14
 * @LastEditors: Hansy hanshunyao_hansy@163.com
 * @LastEditTime: 2025-06-01 13:48:37
 * @FilePath: \leetcode-problemset\2929-给小朋友们分糖果II.js
 * @Description: 2929. 给小朋友们分糖果 II
 */
// 给你两个正整数 n 和 limit 。
// 请你将 n 颗糖果分给 3 位小朋友，确保没有任何小朋友得到超过 limit 颗糖果，请你返回满足此条件下的 总方案数 。
// 示例 1：
// 输入：n = 5, limit = 2
// 输出：3
// 解释：总共有 3 种方法分配 5 颗糖果，且每位小朋友的糖果数不超过 2 ：(1, 2, 2) ，(2, 1, 2) 和 (2, 2, 1) 。
// 示例 2：
// 输入：n = 3, limit = 3
// 输出：10
// 解释：总共有 10 种方法分配 3 颗糖果，且每位小朋友的糖果数不超过 3 ：(0, 0, 3) ，(0, 1, 2) ，(0, 2, 1) ，(0, 3, 0) ，(1, 0, 2) ，(1, 1, 1) ，(1, 2, 0) ，(2, 0, 1) ，(2, 1, 0) 和 (3, 0, 0) 。
/**
 * @param {number} n
 * @param {number} limit
 * @return {number}
 */
function c2 (n) {
  return n > 1 ? n * (n - 1) / 2 : 0;
}

var distributeCandies = function (n, limit) {
  return c2(n + 2) - 3 * c2(n - limit + 1) + 3 * c2(n - 2 * limit) - c2(n - 3 * limit - 1);
};

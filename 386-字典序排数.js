/*
 * @Author: Hansy hanshunyao_hansy@163.com
 * @Date: 2025-06-08 22:34:57
 * @LastEditors: Hansy hanshunyao_hansy@163.com
 * @LastEditTime: 2025-06-08 22:35:06
 * @FilePath: \leetcode-problemset\386-字典序排数.js
 * @Description: 386. 字典序排数
 */
// 给你一个整数 n ，按字典序返回范围 [1, n] 内所有整数。
// 你必须设计一个时间复杂度为 O(n) 且使用 O(1) 额外空间的算法。
// 示例 1：
// 输入：n = 13
// 输出：[1,10,11,12,13,2,3,4,5,6,7,8,9]
// 示例 2：
// 输入：n = 2
// 输出：[1,2]
/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function (n) {
  const ret = [];
  let number = 1;
  for (let i = 0; i < n; i++) {
    ret.push(number);
    if (number * 10 <= n) {
      number *= 10;
    } else {
      while (number % 10 === 9 || number + 1 > n) {
        number = Math.floor(number / 10);
      }
      number++;
    }
  }
  return ret;
};

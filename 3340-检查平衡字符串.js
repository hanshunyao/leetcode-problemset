/*
 * @Author: hansy hanshunyao_hansy@163.com
 * @Date: 2025-03-14 09:39:01
 * @LastEditors: hansy hanshunyao_hansy@163.com
 * @LastEditTime: 2025-03-14 09:39:01
 * @FilePath: \leetcode-problemset\3340-检查平衡字符串.js
 * @Description: 3340. 检查平衡字符串
 */
// 给你一个仅由数字 0 - 9 组成的字符串 num。如果偶数下标处的数字之和等于奇数下标处的数字之和，则认为该数字字符串是一个 平衡字符串。
// 如果 num 是一个 平衡字符串，则返回 true；否则，返回 false。
// 示例 1：
// 输入：num = "1234"
// 输出：false
// 解释：
// 偶数下标处的数字之和为 1 + 3 = 4，奇数下标处的数字之和为 2 + 4 = 6。
// 由于 4 不等于 6，num 不是平衡字符串。
// 示例 2：
// 输入：num = "24123"
// 输出：true
// 解释：
// 偶数下标处的数字之和为 2 + 1 + 3 = 6，奇数下标处的数字之和为 4 + 2 = 6。
// 由于两者相等，num 是平衡字符串。
/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function (num) {
  let arr = num.split('');
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < arr.length; i++) {
    let tempNum = parseInt(num[i]);
    if (i % 2) {
      sum1 += tempNum;
    } else {
      sum2 += tempNum;
    }
  }
  return sum1 === sum2;
};

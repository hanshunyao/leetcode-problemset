/*
 * @Author: hansy hanshunyao_hansy@163.com
 * @Date: 2025-03-27 10:02:33
 * @LastEditors: hansy hanshunyao_hansy@163.com
 * @LastEditTime: 2025-03-27 10:02:47
 * @FilePath: \leetcode-problemset\2712-使所有字符相等的最小成本.js
 * @Description: 2712. 使所有字符相等的最小成本
 */
// 给你一个下标从 0 开始、长度为 n 的二进制字符串 s ，你可以对其执行两种操作：
// 选中一个下标 i 并且反转从下标 0 到下标 i（包括下标 0 和下标 i ）的所有字符，成本为 i + 1 。
// 选中一个下标 i 并且反转从下标 i 到下标 n - 1（包括下标 i 和下标 n - 1 ）的所有字符，成本为 n - i 。
// 返回使字符串内所有字符 相等 需要的 最小成本 。
// 反转 字符意味着：如果原来的值是 '0' ，则反转后值变为 '1' ，反之亦然。
// 示例 1：
// 输入：s = "0011"
// 输出：2
// 解释：执行第二种操作，选中下标 i = 2 ，可以得到 s = "0000" ，成本为 2 。可以证明 2 是使所有字符相等的最小成本。
// 示例 2：
// 输入：s = "010101"
// 输出：9
// 解释：执行第一种操作，选中下标 i = 2 ，可以得到 s = "101101" ，成本为 3 。
// 执行第一种操作，选中下标 i = 1 ，可以得到 s = "011101" ，成本为 2 。
// 执行第一种操作，选中下标 i = 0 ，可以得到 s = "111101" ，成本为 1 。
// 执行第二种操作，选中下标 i = 4 ，可以得到 s = "111110" ，成本为 2 。
// 执行第二种操作，选中下标 i = 5 ，可以得到 s = "111111" ，成本为 1 。
// 使所有字符相等的总成本等于 9 。可以证明 9 是使所有字符相等的最小成本。 
/**
 * @param {string} s
 * @return {number}
 */
var minimumCost = function (s) {
  let res = 0;
  if(s.length === 1) return 0;
  for (let i = 1; i < s.length; i++) {
    if (s[i] !== s[i - 1]) {
      res += Math.min(i, s.length - i)
    }
  }
  return res;
};

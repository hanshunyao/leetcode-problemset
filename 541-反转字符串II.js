/*
 * @Author: Hansy hanshunyao_hansy@163.com
 * @Date: 2025-02-05 21:03:43
 * @LastEditors: Hansy hanshunyao_hansy@163.com
 * @LastEditTime: 2025-02-05 21:03:43
 * @FilePath: \leetcode-problemset\541. 反转字符串II.js
 * @Description: 541. 反转字符串 II
 */
// 给定一个字符串 s 和一个整数 k，从字符串开头算起，每计数至 2k 个字符，就反转这 2k 字符中的前 k 个字符。
// 如果剩余字符少于 k 个，则将剩余字符全部反转。
// 如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。
// 示例 1：
// 输入：s = "abcdefg", k = 2
// 输出："bacdfeg"
// 示例 2：
// 输入：s = "abcd", k = 2
// 输出："bacd"
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

function reverse(i, j, s) {
  let left = i;
  let right = j;
  while (left < right) {
    let temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left++;
    right--;
  }
}

var reverseStr = function (s, k) {
  const n = s.length;
  const result = Array.from(s);
  for (let i = 0; i < n; i += 2 * k) {
    reverse(i, Math.min(i + k, n) - 1, result);
  }
  return result.join('');
};

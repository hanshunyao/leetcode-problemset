/*
 * @Author: Hansy hanshunyao_hansy@163.com
 * @Date: 2025-04-01 21:09:10
 * @LastEditors: Hansy hanshunyao_hansy@163.com
 * @LastEditTime: 2025-04-01 21:09:16
 * @FilePath: \leetcode-problemset\28-找出字符串中第一个匹配项的下标.js
 * @Description: 28. 找出字符串中第一个匹配项的下标
 */
// 给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串的第一个匹配项的下标（下标从 0 开始）。如果 needle 不是 haystack 的一部分，则返回  -1 。
// 示例 1：
// 输入：haystack = "sadbutsad", needle = "sad"
// 输出：0
// 解释："sad" 在下标 0 和 6 处匹配。
// 第一个匹配项的下标是 0 ，所以返回 0 。
// 示例 2：
// 输入：haystack = "leetcode", needle = "leeto"
// 输出：-1
// 解释："leeto" 没有在 "leetcode" 中出现，所以返回 -1 。
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let cur2 = needle.length;
  if (haystack.length === 1) return 0;
  for (let cur1 = 0; cur1 + cur2 <= haystack.length; cur1++) {
    if (haystack.slice(cur1, cur1 + cur2) === needle) {
      return cur1;
    }
  }
  return -1;
};

/*
 * @Author: Hansy hanshunyao_hansy@163.com
 * @Date: 2025-01-22 22:15:08
 * @LastEditors: Hansy hanshunyao_hansy@163.com
 * @LastEditTime: 2025-01-22 22:15:18
 * @FilePath: \leetcode-problemset\242. 有效的字母异位词.js
 * @Description: 242. 有效的字母异位词
 */
// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的 字母异位词。
// 示例 1:
// 输入: s = "anagram", t = "nagaram"
// 输出: true
// 示例 2:
// 输入: s = "rat", t = "car"
// 输出: false
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let arr = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    arr[s[i].charCodeAt() - 'a'.charCodeAt()]++;
  }
  for (let i = 0; i < t.length; i++) {
    arr[t[i].charCodeAt() - 'a'.charCodeAt()]--;
  }
  let result = true;
  arr.forEach((ele) => {
    if (ele !== 0) {
      result = false;
    }
  });

  return result;
};

/*
 * @Author: Hansy hanshunyao_hansy@163.com
 * @Date: 2025-04-23 00:23:25
 * @LastEditors: Hansy hanshunyao_hansy@163.com
 * @LastEditTime: 2025-05-16 11:42:07
 * @FilePath: \leetcode-problemset\392-判断子序列.js
 * @Description: 392. 判断子序列
 */
// 给定字符串 s 和 t ，判断 s 是否为 t 的子序列。
// 字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。
// 进阶：
// 如果有大量输入的 S，称作 S1, S2, ... , Sk 其中 k >= 10亿，你需要依次检查它们是否为 T 的子序列。在这种情况下，你会怎样改变代码？
// 示例 1：
// 输入：s = "abc", t = "ahbgdc"
// 输出：true
// 示例 2：
// 输入：s = "axc", t = "ahbgdc"
// 输出：false
var isSubsequence = function (s, t) {
  if (s.length === 0) {
    return true;
  }
  let i = 0;
  for (const c of t) {
    if (s[i] === c && ++i === s.length) { // 所有字符匹配完毕
      return true; // s 是 t 的子序列
    }
  }
  return false;
};
var isSubsequence = function (s, t) {
  let tlen = t.length
  let slen = s.length
  if (tlen === 0 && slen === 0) return true;
  let cur = 0;
  for (let i = 0; i < tlen; i++) {
    if (t[i] === s[cur]) {
      cur++;
    }
    if (cur === s.length) {
      return true
    }
  }
  return false

};

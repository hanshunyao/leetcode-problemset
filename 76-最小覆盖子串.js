/*
 * @Author: Hansy hanshunyao_hansy@163.com
 * @Date: 2025-04-23 00:26:02
 * @LastEditors: Hansy hanshunyao_hansy@163.com
 * @LastEditTime: 2025-04-23 00:26:02
 * @FilePath: \leetcode-problemset\76-最小覆盖子串.js
 * @Description: 76. 最小覆盖子串
 */
// 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。
// 注意：
// 对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
// 如果 s 中存在这样的子串，我们保证它是唯一的答案。
// 示例 1：
// 输入：s = "ADOBECODEBANC", t = "ABC"
// 输出："BANC"
// 解释：最小覆盖子串 "BANC" 包含来自字符串 t 的 'A'、'B' 和 'C'。
// 示例 2：
// 输入：s = "a", t = "a"
// 输出："a"
// 解释：整个字符串 s 是最小覆盖子串。
// 示例 3:
// 输入: s = "a", t = "aa"
// 输出: ""
// 解释: t 中两个字符 'a' 均应包含在 s 的子串中，
// 因此没有符合条件的子字符串，返回空字符串。
function isCovered (cntS, cntT) {
  for (let i = 'A'.charCodeAt(0); i <= 'Z'.charCodeAt(0); i++) {
    if (cntS[i] < cntT[i]) {
      return false;
    }
  }
  for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
    if (cntS[i] < cntT[i]) {
      return false;
    }
  }
  return true;
}

var minWindow = function (s, t) {
  const m = s.length;
  let ansLeft = -1, ansRight = m;
  const cntS = Array(128).fill(0); // s 子串字母的出现次数
  const cntT = Array(128).fill(0); // t 中字母的出现次数
  for (const c of t) {
    cntT[c.codePointAt(0)]++;
  }

  let left = 0;
  for (let right = 0; right < m; right++) { // 移动子串右端点
    cntS[s[right].codePointAt(0)]++; // 右端点字母移入子串
    while (isCovered(cntS, cntT)) { // 涵盖
      if (right - left < ansRight - ansLeft) { // 找到更短的子串
        ansLeft = left; // 记录此时的左右端点
        ansRight = right;
      }
      cntS[s[left].codePointAt(0)]--; // 左端点字母移出子串
      left++;
    }
  }
  return ansLeft < 0 ? "" : s.substring(ansLeft, ansRight + 1);
};

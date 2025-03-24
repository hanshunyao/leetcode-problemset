/*
 * @Author: hansy hanshunyao_hansy@163.com
 * @Date: 2025-03-24 09:27:33
 * @LastEditors: hansy hanshunyao_hansy@163.com
 * @LastEditTime: 2025-03-24 09:28:24
 * @FilePath: \leetcode-problemset\14-最长公共前缀.js
 * @Description: 14-最长公共前缀.js
 */
// 编写一个函数来查找字符串数组中的最长公共前缀。
// 如果不存在公共前缀，返回空字符串 ""。
// 示例 1：
// 输入：strs = ["flower","flow","flight"]
// 输出："fl"
// 示例 2：
// 输入：strs = ["dog","racecar","car"]
// 输出：""
// 解释：输入不存在公共前缀。
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let len = strs.length;
  let res = '';
  let cur = 0;
  const s0 = strs[0];
  if (len === 1) {
    return s0;
  }
  while (cur < s0.length) {
    for (let i = 1; i < len; i++) {
      if (strs[i][cur] !== strs[i - 1][cur]) {
        return res;
      }
      if (i === len - 1) {
        res += strs[i][cur];
        cur++;
      }
    }
  }
  return res;
};

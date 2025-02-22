/*
 * @Author: Hansy hanshunyao_hansy@163.com
 * @Date: 2025-02-10 20:41:39
 * @LastEditors: Hansy hanshunyao_hansy@163.com
 * @LastEditTime: 2025-02-10 20:41:40
 * @FilePath: \leetcode-problemset\20. 有效的括号.js
 * @Description: 20. 有效的括号
 */
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
// 有效字符串需满足：
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 每个右括号都有一个对应的相同类型的左括号。
// 示例 1：
// 输入：s = "()"
// 输出：true
// 示例 2：
// 输入：s = "()[]{}"
// 输出：true
// 示例 3：
// 输入：s = "(]"
// 输出：false
// 示例 4：
// 输入：s = "([])"
// 输出：true
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 !== 0) return false;
  let arr = Array.from(s);
  let rArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '{') rArr.push('}');
    else if (arr[i] === '[') rArr.push(']');
    else if (arr[i] === '(') rArr.push(')');
    else if (!rArr.length || arr[i] !== rArr[rArr.length - 1]) return false;
    else rArr.pop();
  }
  return !rArr.length;
};

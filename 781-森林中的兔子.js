/*
 * @Author: Hansy hanshunyao_hansy@163.com
 * @Date: 2025-04-20 12:15:32
 * @LastEditors: Hansy hanshunyao_hansy@163.com
 * @LastEditTime: 2025-04-20 12:15:38
 * @FilePath: \leetcode-problemset\781-森林中的兔子.js
 * @Description: 781. 森林中的兔子
 */
/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function (answers) {
  let ans = 0;
  const left = new Map();
  for (const x of answers) {
    const c = left.get(x) ?? 0;
    if (c == 0) {
      ans += x + 1;
      left.set(x, x);
    } else {
      left.set(x, c - 1);
    }
  }
  return ans;
};

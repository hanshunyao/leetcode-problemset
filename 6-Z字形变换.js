/*
 * @Author: Hansy hanshunyao_hansy@163.com
 * @Date: 2025-03-29 11:07:43
 * @LastEditors: Hansy hanshunyao_hansy@163.com
 * @LastEditTime: 2025-03-29 11:07:43
 * @FilePath: \leetcode-problemset\6-Z字形变换.js
 * @Description: 6. Z 字形变换
 */
var convert = function(s, numRows) {
  const n = s.length, r = numRows;
  if (r === 1 || r >= n) {
      return s;
  }
  const t = r * 2 - 2;
  const ans = [];
  for (let i = 0; i < r; i++) { // 枚举矩阵的行
      for (let j = 0; j < n - i; j += t) { // 枚举每个周期的起始下标
          ans.push(s[j + i]); // 当前周期的第一个字符
          if (0 < i && i < r - 1 && j + t - i < n) {
              ans.push(s[j + t - i]); // 当前周期的第二个字符
          }
      }
  }
  return ans.join('');
};

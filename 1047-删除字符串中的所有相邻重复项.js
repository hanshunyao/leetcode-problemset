/*
 * @Author: Hansy hanshunyao_hansy@163.com
 * @Date: 2025-02-11 19:39:08
 * @LastEditors: Hansy hanshunyao_hansy@163.com
 * @LastEditTime: 2025-02-11 19:39:08
 * @FilePath: \leetcode-problemset\1047. 删除字符串中的所有相邻重复项.js
 * @Description: 1047. 删除字符串中的所有相邻重复项
 */
// 给出由小写字母组成的字符串 s，重复项删除操作会选择两个相邻且相同的字母，并删除它们。
// 在 s 上反复执行重复项删除操作，直到无法继续删除。
// 在完成所有重复项删除操作后返回最终的字符串。答案保证唯一。
// 示例：
// 输入："abbaca"
// 输出："ca"
// 解释：
// 例如，在 "abbaca" 中，我们可以删除 "bb" 由于两字母相邻且相同，这是此时唯一可以执行删除操作的重复项。之后我们得到字符串 "aaca"，其中又只有 "aa" 可以执行重复项删除操作，所以最后的字符串为 "ca"。
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  let result = [];
  for (e of s) {
    if (e !== result[result.length - 1]) {
      result[result.length || 0] = e;
    } else {
      result.pop();
    }
  }
  return result.join('');
};

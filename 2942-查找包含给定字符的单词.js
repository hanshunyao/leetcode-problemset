/*
 * @Author: Hansy hanshunyao_hansy@163.com
 * @Date: 2025-05-24 18:44:09
 * @LastEditors: Hansy hanshunyao_hansy@163.com
 * @LastEditTime: 2025-05-24 18:44:15
 * @FilePath: \leetcode-problemset\2942-查找包含给定字符的单词.js
 * @Description: 2942. 查找包含给定字符的单词
 */
// 给你一个下标从 0 开始的字符串数组 words 和一个字符 x 。
// 请你返回一个 下标数组 ，表示下标在数组中对应的单词包含字符 x 。
// 注意 ，返回的数组可以是 任意 顺序。
// 示例 1：
// 输入：words = ["leet","code"], x = "e"
// 输出：[0,1]
// 解释："e" 在两个单词中都出现了："leet" 和 "code" 。所以我们返回下标 0 和 1 。
// 示例 2：
// 输入：words = ["abc","bcd","aaaa","cbc"], x = "a"
// 输出：[0,2]
// 解释："a" 在 "abc" 和 "aaaa" 中出现了，所以我们返回下标 0 和 2 。
// 示例 3：
// 输入：words = ["abc","bcd","aaaa","cbc"], x = "z"
// 输出：[]
// 解释："z" 没有在任何单词中出现。所以我们返回空数组。
var findWordsContaining = function (words, x) {
  const ans = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) {
      ans.push(i);
    }
  }
  return ans;
};

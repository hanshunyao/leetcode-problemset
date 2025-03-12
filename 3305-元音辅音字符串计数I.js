/*
 * @Author: hansy hanshunyao_hansy@163.com
 * @Date: 2025-03-12 10:05:16
 * @LastEditors: hansy hanshunyao_hansy@163.com
 * @LastEditTime: 2025-03-12 10:05:29
 * @FilePath: \leetcode-problemset\3305-元音辅音字符串计数I.js
 * @Description: 3305. 元音辅音字符串计数 I
 */
// 给你一个字符串 word 和一个 非负 整数 k。
// 返回 word 的 子字符串 中，每个元音字母（'a'、'e'、'i'、'o'、'u'）至少 出现一次，并且 恰好 包含 k 个辅音字母的子字符串的总数。
// 示例 1：
// 输入：word = "aeioqq", k = 1
// 输出：0
// 解释：
// 不存在包含所有元音字母的子字符串。
// 示例 2：
// 输入：word = "aeiou", k = 0
// 输出：1
// 解释：
// 唯一一个包含所有元音字母且不含辅音字母的子字符串是 word[0..4]，即 "aeiou"。
// 示例 3：
// 输入：word = "ieaouqqieaouqq", k = 1
// 输出：3
// 解释：
// 包含所有元音字母并且恰好含有一个辅音字母的子字符串有：
// word[0..5]，即 "ieaouq"。
// word[6..11]，即 "qieaou"。
// word[7..12]，即 "ieaouq"。
/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var countOfSubstrings = function (word, k) {
  const checkWordSet = new Set(['a', 'e', 'i', 'o', 'u']);

  const findCount = function (m) {
    let n = word.length;
    let res = 0;
    let fWords = 0;
    let countMap = new Map();
    for (let i = 0, j = 0; i < n; i++) {
      while (j < n && (fWords < m || countMap.size < 5)) {
        let ch = word[j];
        if (checkWordSet.has(ch)) {
          countMap.set(ch, (countMap.get(ch) || 0) + 1);
        } else {
          fWords++;
        }
        j++;
      }

      if (countMap.size === 5 && fWords >= m) {
        res += n - j + 1;
      }

      let left = word[i];

      if (checkWordSet.has(left)) {
        let nowCount = countMap.get(left) - 1;
        if (nowCount) {
          countMap.set(left, nowCount);
        } else {
          countMap.delete(left);
        }
      } else {
        fWords--;
      }
    }
    return res;
  };

  return findCount(k) - findCount(k + 1);
};

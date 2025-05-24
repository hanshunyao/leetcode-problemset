/*
 * @Author: Hansy hanshunyao_hansy@163.com
 * @Date: 2025-05-25 05:02:17
 * @LastEditors: Hansy hanshunyao_hansy@163.com
 * @LastEditTime: 2025-05-25 05:02:26
 * @FilePath: \leetcode-problemset\2131-连接两字母单词得到的最长回文串.js
 * @Description: 2131. 连接两字母单词得到的最长回文串
 */
// 给你一个字符串数组 words 。words 中每个元素都是一个包含 两个 小写英文字母的单词。
// 请你从 words 中选择一些元素并按 任意顺序 连接它们，并得到一个 尽可能长的回文串 。每个元素 至多 只能使用一次。
// 请你返回你能得到的最长回文串的 长度 。如果没办法得到任何一个回文串，请你返回 0 。
// 回文串 指的是从前往后和从后往前读一样的字符串。
// 示例 1：
// 输入：words = ["lc","cl","gg"]
// 输出：6
// 解释：一个最长的回文串为 "lc" + "gg" + "cl" = "lcggcl" ，长度为 6 。
// "clgglc" 是另一个可以得到的最长回文串。
// 示例 2：
// 输入：words = ["ab","ty","yt","lc","cl","ab"]
// 输出：8
// 解释：最长回文串是 "ty" + "lc" + "cl" + "yt" = "tylcclyt" ，长度为 8 。
// "lcyttycl" 是另一个可以得到的最长回文串。
// 示例 3：
// 输入：words = ["cc","ll","xx"]
// 输出：2
// 解释：最长回文串是 "cc" ，长度为 2 。
// "ll" 是另一个可以得到的最长回文串。"xx" 也是。
/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function (words) {
  const cnt = Array.from({ length: 26 }, () => Array(26).fill(0));
  const ordA = 'a'.charCodeAt(0);
  for (const w of words) {
    cnt[w.charCodeAt(0) - ordA][w.charCodeAt(1) - ordA]++;
  }

  let ans = 0, odd = 0;
  for (let i = 0; i < 26; i++) {
    const c = cnt[i][i];
    ans += c - c % 2; // 保证结果是偶数，也可以写成 c & ~1
    odd |= c % 2; // 存在出现奇数次的 cnt[i][i]
    for (let j = i + 1; j < 26; j++) {
      ans += Math.min(cnt[i][j], cnt[j][i]) * 2;
    }
  }
  return (ans + odd) * 2; // 上面统计的是字符串个数，乘以 2 就是长度
};

/*
 * @Author: Hansy hanshunyao_hansy@163.com
 * @Date: 2025-04-23 00:24:23
 * @LastEditors: Hansy hanshunyao_hansy@163.com
 * @LastEditTime: 2025-04-23 00:24:32
 * @FilePath: \leetcode-problemset\3-无重复字符的最长子串.js
 * @Description: 3. 无重复字符的最长子串
 */
// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长 子串 的长度。
// 示例 1:
// 输入: s = "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// 示例 2:
// 输入: s = "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
// 示例 3:
// 输入: s = "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
var lengthOfLongestSubstring = function (s) {
  let ans = 0;
  let left = 0;
  const cnt = new Map(); // 维护从下标 left 到下标 right 的字符
  for (let right = 0; right < s.length; right++) {
    const c = s[right];
    cnt.set(c, (cnt.get(c) ?? 0) + 1);
    while (cnt.get(c) > 1) { // 窗口内有重复字母
      cnt.set(s[left], cnt.get(s[left]) - 1); // 移除窗口左端点字母
      left++; // 缩小窗口
    }
    ans = Math.max(ans, right - left + 1); // 更新窗口长度最大值
  }
  return ans;
};

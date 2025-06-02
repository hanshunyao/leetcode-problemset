/*
 * @Author: Hansy hanshunyao_hansy@163.com
 * @Date: 2025-06-02 16:39:44
 * @LastEditors: Hansy hanshunyao_hansy@163.com
 * @LastEditTime: 2025-06-02 16:47:21
 * @FilePath: \leetcode-problemset\383-赎金信.js
 * @Description: 383. 赎金信
 */
// 给你两个字符串：ransomNote 和 magazine ，判断 ransomNote 能不能由 magazine 里面的字符构成。
// 如果可以，返回 true ；否则返回 false 。
// magazine 中的每个字符只能在 ransomNote 中使用一次。
// 示例 1：
// 输入：ransomNote = "a", magazine = "b"
// 输出：false
// 示例 2：
// 输入：ransomNote = "aa", magazine = "ab"
// 输出：false
// 示例 3：
// 输入：ransomNote = "aa", magazine = "aab"
// 输出：true
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  if (ransomNote.length > magazine.length) return false;
  const arr1 = magazine.split('');
  const map1 = new Map()
  arr1.forEach(ele => {
    if (map1.has(ele)) {
      let newNum = map1.get(ele) + 1
      map1.set(ele, newNum)
    } else {
      map1.set(ele, 1)
    }
  })

  const arr2 = ransomNote.split('');
  for (let i = 0; i < arr2.length; i++) {
    if (map1.has(arr2[i])) {
      let newNum = map1.get(arr2[i]) - 1;
      if (newNum < 0) {
        return false
      }
      map1.set(arr2[i], newNum)
    } else {
      return false
    }
  }

  return true;
};

/*
 * @Author: Hansy hanshunyao_hansy@163.com
 * @Date: 2025-02-06 21:25:01
 * @LastEditors: Hansy hanshunyao_hansy@163.com
 * @LastEditTime: 2025-02-06 21:25:09
 * @FilePath: \leetcode-problemset\151. 反转字符串中的单词.js
 * @Description: 151. 反转字符串中的单词
 */
// 给你一个字符串 s ，请你反转字符串中 单词 的顺序。
// 单词 是由非空格字符组成的字符串。s 中使用至少一个空格将字符串中的 单词 分隔开。
// 返回 单词 顺序颠倒且 单词 之间用单个空格连接的结果字符串。
// 注意：输入字符串 s中可能会存在前导空格、尾随空格或者单词间的多个空格。返回的结果字符串中，单词间应当仅用单个空格分隔，且不包含任何额外的空格。
// 示例 1：
// 输入：s = "the sky is blue"
// 输出："blue is sky the"
// 示例 2：
// 输入：s = "  hello world  "
// 输出："world hello"
// 解释：反转后的字符串中不能存在前导空格和尾随空格。
// 示例 3：
// 输入：s = "a good   example"
// 输出："example good a"
// 解释：如果两个单词间有多余的空格，反转后的字符串需要将单词间的空格减少到仅有一个。
var reverse = (strArr, start, end) => {
  let left = start;
  let right = end;

  while (left < right) {
    let temp = strArr[left];
    strArr[left] = strArr[right];
    strArr[right] = temp;
    left++;
    right--;
  }
};
/**
 * @param {string} s
 * @return {string}
 */

var reverseWords = function (s) {
  const strArr = Array.from(s);
  let slow = 0;
  for (let fast = 0; fast < strArr.length; fast++) {
    console.log(slow);
    if (
      strArr[fast] !== ' ' ||
      (fast !== 0 &&
        slow !== 0 &&
        strArr[fast] === ' ' &&
        strArr[slow - 1] !== ' ')
    ) {
      strArr[slow] = strArr[fast];
      slow++;
    }
  }
  strArr.length = strArr[slow - 1] === ' ' ? slow - 1 : slow;
  reverse(strArr, 0, strArr.length - 1);

  let start = 0;
  for (let i = 0; i <= strArr.length; i++) {
    if (strArr[i] === ' ' || i === strArr.length) {
      reverse(strArr, start, i - 1);
      start = i + 1;
    }
  }

  return strArr.join('');
};

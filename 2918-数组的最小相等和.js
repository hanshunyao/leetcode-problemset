/*
 * @Author: Hansy hanshunyao_hansy@163.com
 * @Date: 2025-05-10 09:18:50
 * @LastEditors: Hansy hanshunyao_hansy@163.com
 * @LastEditTime: 2025-05-10 09:19:01
 * @FilePath: \leetcode-problemset\2918-数组的最小相等和.js
 * @Description: 2918-数组的最小相等和.js
 */
// 给你两个由正整数和 0 组成的数组 nums1 和 nums2 。
// 你必须将两个数组中的 所有 0 替换为 严格 正整数，并且满足两个数组中所有元素的和 相等 。
// 返回 最小 相等和 ，如果无法使两数组相等，则返回 -1 。
// 示例 1：
// 输入：nums1 = [3,2,0,1,0], nums2 = [6,5,0]
// 输出：12
// 解释：可以按下述方式替换数组中的 0 ：
// - 用 2 和 4 替换 nums1 中的两个 0 。得到 nums1 = [3,2,2,1,4] 。
// - 用 1 替换 nums2 中的一个 0 。得到 nums2 = [6,5,1] 。
// 两个数组的元素和相等，都等于 12 。可以证明这是可以获得的最小相等和。
// 示例 2：
// 输入：nums1 = [2,0,2,0], nums2 = [1,4]
// 输出：-1
// 解释：无法使两个数组的和相等。
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function calc (nums) {
  let sum = 0;
  let zero = false;
  for (const x of nums) {
    if (x === 0) {
      zero = true;
      sum++;
    } else {
      sum += x;
    }
  }
  return [sum, zero];
}

var minSum = function (nums1, nums2) {
  const [s1, zero1] = calc(nums1);
  const [s2, zero2] = calc(nums2);
  if (!zero1 && s1 < s2 || !zero2 && s2 < s1) {
    return -1;
  }
  return Math.max(s1, s2);
};

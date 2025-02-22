/*
 * @Author: Hansy hanshunyao_hansy@163.com
 * @Date: 2025-01-22 22:15:08
 * @LastEditors: Hansy hanshunyao_hansy@163.com
 * @LastEditTime: 2025-01-28 22:58:13
 * @FilePath: \leetcode-problemset\349. 两个数组的交集.js
 * @Description: 349. 两个数组的交集
 */
// 给定两个数组 nums1 和 nums2 ，返回 它们的 交集 。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。
// 示例 1：
// 输入：nums1 = [1,2,2,1], nums2 = [2,2]
// 输出：[2]
// 示例 2：
// 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出：[9,4]
// 解释：[4,9] 也是可通过的
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  var newNums1 = new Set(nums1);
  var newNums2 = new Set(nums2);
  const result = [];
  for (item of newNums2) {
    if (newNums1.has(item)) {
      result.push(item);
    }
  }
  return result;
};
var intersection = function (nums1, nums2) {
  nums1.sort((x, y) => x - y);
  nums2.sort((x, y) => x - y);
  const length1 = nums1.length,
    length2 = nums2.length;
  let index1 = 0,
    index2 = 0;
  const intersection = [];
  while (index1 < length1 && index2 < length2) {
    const num1 = nums1[index1],
      num2 = nums2[index2];
    if (num1 === num2) {
      // 保证加入元素的唯一性
      if (
        !intersection.length ||
        num1 !== intersection[intersection.length - 1]
      ) {
        intersection.push(num1);
      }
      index1++;
      index2++;
    } else if (num1 < num2) {
      index1++;
    } else {
      index2++;
    }
  }
  return intersection;
};

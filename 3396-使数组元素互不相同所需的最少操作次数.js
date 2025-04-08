/*
 * @Author: hansy hanshunyao_hansy@163.com
 * @Date: 2025-04-08 17:32:10
 * @LastEditors: hansy hanshunyao_hansy@163.com
 * @LastEditTime: 2025-04-08 17:32:10
 * @FilePath: \leetcode-problemset\3396-使数组元素互不相同所需的最少操作次数.js
 * @Description: 3396. 使数组元素互不相同所需的最少操作次数
 */
// 给你一个整数数组 nums，你需要确保数组中的元素 互不相同 。为此，你可以执行以下操作任意次：
// 从数组的开头移除 3 个元素。如果数组中元素少于 3 个，则移除所有剩余元素。
// 注意：空数组也视作为数组元素互不相同。返回使数组元素互不相同所需的 最少操作次数 。
// 示例 1：
// 输入： nums = [1,2,3,4,2,3,3,5,7]
// 输出： 2
// 解释：
// 第一次操作：移除前 3 个元素，数组变为 [4, 2, 3, 3, 5, 7]。
// 第二次操作：再次移除前 3 个元素，数组变为 [3, 5, 7]，此时数组中的元素互不相同。
// 因此，答案是 2。
// 示例 2：
// 输入： nums = [4,5,6,4,4]
// 输出： 2
// 解释：
// 第一次操作：移除前 3 个元素，数组变为 [4, 4]。
// 第二次操作：移除所有剩余元素，数组变为空。
// 因此，答案是 2。
// 示例 3：
// 输入： nums = [6,7,8,9]
// 输出： 0
// 解释：
// 数组中的元素已经互不相同，因此不需要进行任何操作，答案是 0。
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  let len = nums.length;
  let set1 = new Set()
  for (let i = len - 1; i >= 0; i--) {
    if (set1.has(nums[i])) {
      break;
    } else {
      set1.add(nums[i])
    }
  }
  return Math.ceil((len - set1.size) / 3)
};

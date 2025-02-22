/*
 * @Author: Hansy hanshunyao_hansy@163.com
 * @Date: 2025-02-03 17:33:59
 * @LastEditors: Hansy hanshunyao_hansy@163.com
 * @LastEditTime: 2025-02-03 17:33:59
 * @FilePath: \leetcode-problemset\15. 三数之和.js
 * @Description: 15. 三数之和
 */
// 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请你返回所有和为 0 且不重复的三元组。
// 注意：答案中不可以包含重复的三元组。
// 示例 1：
// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]
// 解释：
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
// 不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
// 注意，输出的顺序和三元组的顺序并不重要。
// 示例 2：
// 输入：nums = [0,1,1]
// 输出：[]
// 解释：唯一可能的三元组和不为 0 。
// 示例 3：
// 输入：nums = [0,0,0]
// 输出：[[0,0,0]]
// 解释：唯一可能的三元组和为 0 。
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const result = [];
  const sortArr = nums.sort((a, b) => a - b);
  for (let i = 0; i < sortArr.length; i++) {
    if (sortArr[i] > 0) return result;
    if (sortArr[i] === sortArr[i - 1]) continue;
    let left = i + 1;
    let right = sortArr.length - 1;
    while (left < right) {
      let count = sortArr[i] + sortArr[left] + sortArr[right];
      if (count < 0) {
        left++;
      } else if (count > 0) {
        right--;
      } else {
        result.push([sortArr[i], sortArr[left], sortArr[right]]);
        while (left < right && sortArr[left] === sortArr[left + 1]) {
          left++;
        }
        while (left < right && sortArr[right] === sortArr[right - 1]) {
          right--;
        }
        left++;
        right--;
      }
    }
  }
  return result;
};

/*
 * @Author: hansy hanshunyao_hansy@163.com
 * @Date: 2025-03-11 10:08:30
 * @LastEditors: hansy hanshunyao_hansy@163.com
 * @LastEditTime: 2025-03-11 10:08:30
 * @FilePath: \leetcode-problemset\2012-数组美丽值求和.js
 * @Description: 2012. 数组美丽值求和
 */
// 给你一个下标从 0 开始的整数数组 nums 。对于每个下标 i（1 <= i <= nums.length - 2），nums[i] 的 美丽值 等于：
// 2，对于所有 0 <= j < i 且 i < k <= nums.length - 1 ，满足 nums[j] < nums[i] < nums[k]
// 1，如果满足 nums[i - 1] < nums[i] < nums[i + 1] ，且不满足前面的条件
// 0，如果上述条件全部不满足
// 返回符合 1 <= i <= nums.length - 2 的所有 nums[i] 的 美丽值的总和 。
// 示例 1：
// 输入：nums = [1,2,3]
// 输出：2
// 解释：对于每个符合范围 1 <= i <= 1 的下标 i :
// - nums[1] 的美丽值等于 2
// 示例 2：
// 输入：nums = [2,4,6,4]
// 输出：1
// 解释：对于每个符合范围 1 <= i <= 2 的下标 i :
// - nums[1] 的美丽值等于 1
// - nums[2] 的美丽值等于 0
// 示例 3：
// 输入：nums = [3,2,1]
// 输出：0
// 解释：对于每个符合范围 1 <= i <= 1 的下标 i :
// - nums[1] 的美丽值等于 0
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfBeauties = function (nums) {
  let len = nums.length;
  let rightMin = new Array(len);
  rightMin[len - 1] = nums[len - 1];
  for (let i = len - 2; i >= 0; i--) {
    rightMin[i] = Math.min(rightMin[i + 1], nums[i]);
  }

  let leftMax = nums[0];
  let res = 0;
  for (let i = 1; i < len; i++) {
    if (leftMax < nums[i] && nums[i] < rightMin[i + 1]) {
      res += 2;
    } else if (nums[i - 1] < nums[i] && nums[i] < nums[i + 1]) {
      res += 1;
    }
    leftMax = Math.max(leftMax, nums[i]);
  }
  return res;
};

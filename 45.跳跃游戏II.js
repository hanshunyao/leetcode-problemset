/*
 * @Author: Hansy hanshunyao_hansy@163.com
 * @Date: 2024-12-31 09:51:19
 * @LastEditors: Hansy hanshunyao_hansy@163.com
 * @LastEditTime: 2024-12-31 09:52:47
 * @FilePath: \leetcode-problemset\45. 跳跃游戏 II.js
 * @Description: 45. 跳跃游戏 II
 */
// 给定一个长度为 n 的 0 索引整数数组 nums。初始位置为 nums[0]。
// 每个元素 nums[i] 表示从索引 i 向前跳转的最大长度。换句话说，如果你在 nums[i] 处，你可以跳转到任意 nums[i + j] 处:
// 0 <= j <= nums[i]
// i + j < n
// 返回到达 nums[n - 1] 的最小跳跃次数。生成的测试用例可以到达 nums[n - 1]。
// 示例 1:
// 输入: nums = [2,3,1,1,4]
// 输出: 2
// 解释: 跳到最后一个位置的最小跳跃数是 2。
//      从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。
// 示例 2:
// 输入: nums = [2,3,0,1,4]
// 输出: 2
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  if (nums.length === 1) return 0;
  let step = 0;
  let count = 0;
  let maxStep = 0;
  for (let i = 0; i < nums.length; i++) {
    maxStep = Math.max(maxStep, i + nums[i]);
    if (i === step && i != nums.length - 1) {
      count++;
      step = maxStep;
      if (step >= nums.length - 1) break;
    }
  }

  return count;
};

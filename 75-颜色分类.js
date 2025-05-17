/*
 * @Author: Hansy hanshunyao_hansy@163.com
 * @Date: 2025-05-17 17:31:21
 * @LastEditors: Hansy hanshunyao_hansy@163.com
 * @LastEditTime: 2025-05-17 17:31:27
 * @FilePath: \leetcode-problemset\75-颜色分类.js
 * @Description: 75. 颜色分类
 */
// 给定一个包含红色、白色和蓝色、共 n 个元素的数组 nums ，原地 对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
// 我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
// 必须在不使用库内置的 sort 函数的情况下解决这个问题。
// 示例 1：
// 输入：nums = [2,0,2,1,1,0]
// 输出：[0,0,1,1,2,2]
// 示例 2：
// 输入：nums = [2,0,1]
// 输出：[0,1,2]
// 提示：
// n == nums.length
// 1 <= n <= 300
// nums[i] 为 0、1 或 2
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let p0 = 0, p1 = 0;
  for (let i = 0; i < nums.length; i++) {
    const x = nums[i];
    nums[i] = 2;
    if (x <= 1) {
      nums[p1++] = 1;
    }
    if (x === 0) {
      nums[p0++] = 0;
    }
  }
};

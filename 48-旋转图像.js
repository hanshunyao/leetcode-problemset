/*
 * @Author: Hansy hanshunyao_hansy@163.com
 * @Date: 2025-04-23 00:28:46
 * @LastEditors: Hansy hanshunyao_hansy@163.com
 * @LastEditTime: 2025-04-23 00:28:46
 * @FilePath: \leetcode-problemset\48-旋转图像.js
 * @Description: 48. 旋转图像
 */
// 给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。
// 你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。
// 示例 1：
// 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
// 输出：[[7,4,1],[8,5,2],[9,6,3]]
// 示例 2：
// 输入：matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
// 输出：[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
var rotate = function (matrix) {
  const n = matrix.length;
  // 第一步：转置
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) { // 遍历对角线下方元素
      const tmp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = tmp;
    }
  }

  // 第二步：行翻转
  for (const row of matrix) {
    row.reverse();
  }
};

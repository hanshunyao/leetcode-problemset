/*
 * @Author: Hansy hanshunyao_hansy@163.com
 * @Date: 2025-04-23 00:27:57
 * @LastEditors: Hansy hanshunyao_hansy@163.com
 * @LastEditTime: 2025-04-23 00:27:57
 * @FilePath: \leetcode-problemset\54-螺旋矩阵.js
 * @Description: 54. 螺旋矩阵
 */
// 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。
// 示例 1：
// 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
// 输出：[1,2,3,6,9,8,7,4,5]
// 示例 2：
// 输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// 输出：[1,2,3,4,8,12,11,10,9,5,6,7]
const DIRS = [[0, 1], [1, 0], [0, -1], [-1, 0]]; // 右下左上

var spiralOrder = function (matrix) {
  const m = matrix.length, n = matrix[0].length;
  const ans = Array(m * n);
  let i = 0, j = 0, di = 0;
  for (let k = 0; k < m * n; k++) { // 一共走 mn 步
    ans[k] = matrix[i][j];
    matrix[i][j] = Infinity; // 标记，表示已经访问过（已经加入答案）
    const x = i + DIRS[di][0];
    const y = j + DIRS[di][1]; // 下一步的位置
    // 如果 (x, y) 出界或者已经访问过
    if (x < 0 || x >= m || y < 0 || y >= n || matrix[x][y] === Infinity) {
      di = (di + 1) % 4; // 右转 90°
    }
    i += DIRS[di][0];
    j += DIRS[di][1]; // 走一步
  }
  return ans;
};

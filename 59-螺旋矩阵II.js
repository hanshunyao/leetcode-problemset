/*
 * @Author: Hansy hanshunyao_hansy@163.com
 * @Date: 2025-01-08 22:03:48
 * @LastEditors: Hansy hanshunyao_hansy@163.com
 * @LastEditTime: 2025-01-31 10:41:15
 * @FilePath: \leetcode-problemset\59. 螺旋矩阵II.js
 * @Description: 59. 螺旋矩阵 II
 */
// 给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。
// 示例 1：
// 输入：n = 3
// 输出：[[1,2,3],[8,9,4],[7,6,5]]
// 示例 2：
// 输入：n = 1
// 输出：[[1]]
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let startX = 0;
  let startY = 0;
  let offset = 1;
  let count = 1;
  let loop = Math.floor(n / 2);
  let result = new Array(n).fill(0).map(() => new Array(n).fill(0));
  while (loop--) {
    let tempX = startX;
    let tempY = startY;
    for (; tempY < n - offset; tempY++) {
      result[startX][tempY] = count++;
    }
    for (; tempX < n - offset; tempX++) {
      result[tempX][tempY] = count++;
    }
    for (; tempY > startY; tempY--) {
      result[tempX][tempY] = count++;
    }
    for (; tempX > startX; tempX--) {
      result[tempX][tempY] = count++;
    }
    startX++;
    startY++;
    offset++;
  }
  if (n % 2 === 1) {
    let middle = Math.floor(n / 2);
    result[middle][middle] = count++;
  }
  return result;
};
var generateMatrix = function (n) {
  const maxNum = n * n;
  let curNum = 1;
  const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
  let row = 0,
    column = 0;
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let directionIndex = 0;
  while (curNum <= maxNum) {
    matrix[row][column] = curNum;
    curNum++;
    const nextRow = row + directions[directionIndex][0],
      nextColumn = column + directions[directionIndex][1];
    if (
      nextRow < 0 ||
      nextRow >= n ||
      nextColumn < 0 ||
      nextColumn >= n ||
      matrix[nextRow][nextColumn] !== 0
    ) {
      directionIndex = (directionIndex + 1) % 4;
    }
    row = row + directions[directionIndex][0];
    column = column + directions[directionIndex][1];
  }
  return matrix;
};

/*
 * @Author: hansy hanshunyao_hansy@163.com
 * @Date: 2025-03-26 09:37:05
 * @LastEditors: hansy hanshunyao_hansy@163.com
 * @LastEditTime: 2025-03-26 09:37:05
 * @FilePath: \leetcode-problemset\2829-k-avoiding数组的最小总和.js
 * @Description: 2829. k-avoiding 数组的最小总和
 */
// 给你两个整数 n 和 k 。
// 对于一个由 不同 正整数组成的数组，如果其中不存在任何求和等于 k 的不同元素对，则称其为 k-avoiding 数组。
// 返回长度为 n 的 k-avoiding 数组的可能的最小总和。
// 示例 1：
// 输入：n = 5, k = 4
// 输出：18
// 解释：设若 k-avoiding 数组为 [1,2,4,5,6] ，其元素总和为 18 。
// 可以证明不存在总和小于 18 的 k-avoiding 数组。
// 示例 2：
// 输入：n = 2, k = 6
// 输出：3
// 解释：可以构造数组 [1,2] ，其元素总和为 3 。
// 可以证明不存在总和小于 3 的 k-avoiding 数组。
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var minimumSum = function (n, k) {
  let arr1 = [];
  let arr2 = [];
  let i = 1;
  while (arr1.length < n) {
    if (!arr2.includes(i)) {
      arr1.push(i);
      arr2.push(k - i);
    }
    i++;
  }
  const sum = arr1.reduce((a, b) => a + b, 0);
  return sum
};

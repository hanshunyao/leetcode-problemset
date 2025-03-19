/*
 * @Author: hansy hanshunyao_hansy@163.com
 * @Date: 2025-03-19 09:56:04
 * @LastEditors: hansy hanshunyao_hansy@163.com
 * @LastEditTime: 2025-03-19 09:56:11
 * @FilePath: \leetcode-problemset\2610-转换二维数组.js
 * @Description: 2610. 转换二维数组
 */
// 给你一个整数数组 nums 。请你创建一个满足以下条件的二维数组：
// 二维数组应该 只 包含数组 nums 中的元素。
// 二维数组中的每一行都包含 不同 的整数。
// 二维数组的行数应尽可能 少 。
// 返回结果数组。如果存在多种答案，则返回其中任何一种。
// 请注意，二维数组的每一行上可以存在不同数量的元素。
// 示例 1：
// 输入：nums = [1,3,4,1,2,3,1]
// 输出：[[1,3,4,2],[1,3],[1]]
// 解释：根据题目要求可以创建包含以下几行元素的二维数组：
// - 1,3,4,2
// - 1,3
// - 1
// nums 中的所有元素都有用到，并且每一行都由不同的整数组成，所以这是一个符合题目要求的答案。
// 可以证明无法创建少于三行且符合题目要求的二维数组。
// 示例 2：
// 输入：nums = [1,2,3,4]
// 输出：[[4,3,2,1]]
// 解释：nums 中的所有元素都不同，所以我们可以将其全部保存在二维数组中的第一行。
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function (nums) {
  let map1 = new Map();
  for (const x of nums) {
    map1.set(x, (map1.get(x) ?? 0) + 1);
  }
  let res = [];
  while (map1.size) {
    let tempArr = [...map1.keys()];
    for (num of tempArr) {
      if (map1.get(num) === 1) {
        map1.delete(num);
        continue;
      }
      map1.set(num, map1.get(num) - 1);
    }
    res.push(tempArr);
  }
  return res;
};

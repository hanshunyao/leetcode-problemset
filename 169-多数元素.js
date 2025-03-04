/*
 * @Author: hansy hanshunyao_hansy@163.com
 * @Date: 2025-03-04 09:36:38
 * @LastEditors: hansy hanshunyao_hansy@163.com
 * @LastEditTime: 2025-03-04 09:36:47
 * @FilePath: \leetcode-problemset\169-多数元素.js
 * @Description: 169. 多数元素
 */
// 给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
// 示例 1：
// 输入：nums = [3,2,3]
// 输出：3
// 示例 2：
// 输入：nums = [2,2,1,1,1,2,2]
// 输出：2
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let map1 = new Map();
  nums.forEach((ele) => {
    if (map1.has(ele)) {
      let val = map1.get(ele);
      map1.set(ele, val + 1);
    } else {
      map1.set(ele, 1);
    }
  });

  let res = 0;
  let half = nums.length / 2;
  map1.forEach((val, key) => {
    if (val > half) {
      res = key;
    }
  });
  return res;
};

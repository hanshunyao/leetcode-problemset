/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2025-02-13 19:26:58
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2025-02-13 19:27:03
 * @FilePath: \leetcode-problemset\239. 滑动窗口最大值.js
 * @Description: 239. 滑动窗口最大值
 */
// 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。
// 返回 滑动窗口中的最大值 。
// 示例 1：
// 输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
// 输出：[3,3,5,5,6,7]
// 解释：
// 滑动窗口的位置                最大值
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7
// 示例 2：
// 输入：nums = [1], k = 1
// 输出：[1]
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  class MonoQueue {
    queue;
    constructor() {
      this.queue = [];
    }
    enqueue(value) {
      let back = this.queue[this.queue.length - 1];
      while (back !== undefined && back < value) {
        this.queue.pop();
        back = this.queue[this.queue.length - 1];
      }
      this.queue.push(value);
    }
    dequeue(value) {
      let front = this.front();
      if (front === value) {
        this.queue.shift();
      }
    }
    front() {
      return this.queue[0];
    }
  }
  let helperQueue = new MonoQueue();
  let i = 0,
    j = 0;
  let resArr = [];
  while (j < k) {
    helperQueue.enqueue(nums[j++]);
  }
  resArr.push(helperQueue.front());
  while (j < nums.length) {
    helperQueue.enqueue(nums[j]);
    helperQueue.dequeue(nums[i]);
    resArr.push(helperQueue.front());
    i++, j++;
  }
  return resArr;
};

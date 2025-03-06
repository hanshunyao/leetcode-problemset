/*
 * @Author: hansy hanshunyao_hansy@163.com
 * @Date: 2025-03-06 14:27:36
 * @LastEditors: hansy hanshunyao_hansy@163.com
 * @LastEditTime: 2025-03-06 14:27:36
 * @FilePath: \leetcode-problemset\380-O(1) 时间插入、删除和获取随机元素.js
 * @Description: 380. O(1) 时间插入、删除和获取随机元素
 */
// 实现RandomizedSet 类：
// RandomizedSet() 初始化 RandomizedSet 对象
// bool insert(int val) 当元素 val 不存在时，向集合中插入该项，并返回 true ；否则，返回 false 。
// bool remove(int val) 当元素 val 存在时，从集合中移除该项，并返回 true ；否则，返回 false 。
// int getRandom() 随机返回现有集合中的一项（测试用例保证调用此方法时集合中至少存在一个元素）。每个元素应该有 相同的概率 被返回。
// 你必须实现类的所有函数，并满足每个函数的 平均 时间复杂度为 O(1) 。
// 示例：
// 输入
// ["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
// [[], [1], [2], [2], [], [1], [2], []]
// 输出
// [null, true, false, true, 2, true, false, 2]
// 解释
// RandomizedSet randomizedSet = new RandomizedSet();
// randomizedSet.insert(1); // 向集合中插入 1 。返回 true 表示 1 被成功地插入。
// randomizedSet.remove(2); // 返回 false ，表示集合中不存在 2 。
// randomizedSet.insert(2); // 向集合中插入 2 。返回 true 。集合现在包含 [1,2] 。
// randomizedSet.getRandom(); // getRandom 应随机返回 1 或 2 。
// randomizedSet.remove(1); // 从集合中移除 1 ，返回 true 。集合现在包含 [2] 。
// randomizedSet.insert(2); // 2 已在集合中，所以返回 false 。
// randomizedSet.getRandom(); // 由于 2 是集合中唯一的数字，getRandom 总是返回 2 。

var RandomizedSet = function () {
  this.map1 = new Map();
  this.keysArr = [];
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.map1.has(val)) return false;
  let len = this.keysArr.length;
  this.map1.set(val, len);
  this.keysArr.push(val);
  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!this.map1.has(val)) return false;
  let idx = this.map1.get(val);
  let len = this.keysArr.length;
  this.keysArr[idx] = this.keysArr[len - 1];
  this.map1.set(this.keysArr[idx], idx);
  this.keysArr.pop();
  this.map1.delete(val);
  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  let idx = Math.floor(Math.random() * this.map1.size);
  return this.keysArr[idx];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

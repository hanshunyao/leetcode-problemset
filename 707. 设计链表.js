/*
 * @Author: Hansy hanshunyao_hansy@163.com
 * @Date: 2025-01-14 22:31:55
 * @LastEditors: Hansy hanshunyao_hansy@163.com
 * @LastEditTime: 2025-01-14 22:32:05
 * @FilePath: \leetcode-problemset\707. 设计链表.js
 * @Description: 707. 设计链表
 */
// 你可以选择使用单链表或者双链表，设计并实现自己的链表。
// 单链表中的节点应该具备两个属性：val 和 next 。val 是当前节点的值，next 是指向下一个节点的指针/引用。
// 如果是双向链表，则还需要属性 prev 以指示链表中的上一个节点。假设链表中的所有节点下标从 0 开始。
// 实现 MyLinkedList 类：
// MyLinkedList() 初始化 MyLinkedList 对象。
// int get(int index) 获取链表中下标为 index 的节点的值。如果下标无效，则返回 -1 。
// void addAtHead(int val) 将一个值为 val 的节点插入到链表中第一个元素之前。在插入完成后，新节点会成为链表的第一个节点。
// void addAtTail(int val) 将一个值为 val 的节点追加到链表中作为链表的最后一个元素。
// void addAtIndex(int index, int val) 将一个值为 val 的节点插入到链表中下标为 index 的节点之前。如果 index 等于链表的长度，那么该节点会被追加到链表的末尾。如果 index 比长度更大，该节点将 不会插入 到链表中。
// void deleteAtIndex(int index) 如果下标有效，则删除链表中下标为 index 的节点。
// 示例：
// 输入
// ["MyLinkedList", "addAtHead", "addAtTail", "addAtIndex", "get", "deleteAtIndex", "get"]
// [[], [1], [3], [1, 2], [1], [1], [1]]
// 输出
// [null, null, null, null, 2, null, 3]
// 解释
// MyLinkedList myLinkedList = new MyLinkedList();
// myLinkedList.addAtHead(1);
// myLinkedList.addAtTail(3);
// myLinkedList.addAtIndex(1, 2);    // 链表变为 1->2->3
// myLinkedList.get(1);              // 返回 2
// myLinkedList.deleteAtIndex(1);    // 现在，链表变为 1->3
// myLinkedList.get(1);              // 返回 3

class NewListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}
var MyLinkedList = function () {
  this.size = 0;
  this.head = new NewListNode(0, null);
  this.tail = null;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.size) return -1;
  let cur = this.head;
  while (index--) {
    cur = cur.next;
  }
  console.log(this);
  return cur?.val;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  let cur = this.head;
  let newNode = new NewListNode(val, null);
  newNode.next = cur.next;
  cur.next = newNode.next;
  this.size++;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  let cur = this.head;
  while (cur.next) {
    cur = cur.next;
  }
  let node = new NewListNode(val, null);
  cur.next = node;
  this.tail = node;
  this.size++;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > this.size) return;
  if (index <= 0) {
    this.addAtHead(val);
    return;
  }
  if (index === this.size) {
    this.addAtTail(val);
    return;
  }
  let cur = this.head;
  while (index--) {
    if (index) {
      cur = cur.next;
    }
  }
  cur.next = new NewListNode(val, null);
  this.size++;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size) return;
  if (index === 0) {
    this.head = this.head.next;
    // 如果删除的这个节点同时是尾节点，要处理尾节点
    if (index === this.size - 1) {
      this.tail = this.head;
    }
    this.size--;
    return;
  }
  let cur = this.head;

  while (index--) {
    cur = cur.next;
  }
  cur.next = cur?.next?.next;

  if (index === this.size - 1) {
    this.tail = cur;
  }

  this.size--;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

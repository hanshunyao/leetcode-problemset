/*
 * @Author: Hansy hanshunyao_hansy@163.com
 * @Date: 2025-01-14 22:31:55
 * @LastEditors: Hansy hanshunyao_hansy@163.com
 * @LastEditTime: 2025-01-15 21:47:12
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


class LinkNode {
  constructor(val, next) {
      this.val = val;
      this.next = next;
  }
}

/**
* Initialize your data structure here.
* 单链表 储存头尾节点 和 节点数量
*/
var MyLinkedList = function() {
  this._size = 0;
  this._tail = null;
  this._head = null;
};

/**
* Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
* @param {number} index
* @return {number}
*/
MyLinkedList.prototype.getNode = function(index) {
  if(index < 0 || index >= this._size) return null;
  // 创建虚拟头节点
  let cur = new LinkNode(0, this._head);
  // 0 -> head
  while(index-- >= 0) {
      cur = cur.next;
  }
  return cur;
};
MyLinkedList.prototype.get = function(index) {
  if(index < 0 || index >= this._size) return -1;
  // 获取当前节点
  return this.getNode(index).val;
};

/**
* Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtHead = function(val) {
  const node = new LinkNode(val, this._head);
  this._head = node;
  this._size++;
  if(!this._tail) {
      this._tail = node;
  }
};

/**
* Append a node of value val to the last element of the linked list. 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtTail = function(val) {
  const node = new LinkNode(val, null);
  this._size++;
  if(this._tail) {
      this._tail.next = node;
      this._tail = node;
      return;
  }
  this._tail = node;
  this._head = node;
};

/**
* Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
* @param {number} index 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if(index > this._size) return;
  if(index <= 0) {
      this.addAtHead(val);
      return;
  }
  if(index === this._size) {
      this.addAtTail(val);
      return;
  }
  // 获取目标节点的上一个的节点
  const node = this.getNode(index - 1);
  node.next = new LinkNode(val, node.next);
  this._size++;
};

/**
* Delete the index-th node in the linked list, if the index is valid. 
* @param {number} index
* @return {void}
*/
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if(index < 0 || index >= this._size) return;
  if(index === 0) {
      this._head = this._head.next;
      // 如果删除的这个节点同时是尾节点，要处理尾节点
      if(index === this._size - 1){
          this._tail = this._head
      }
      this._size--;
      return;
  }
  // 获取目标节点的上一个的节点
  const node = this.getNode(index - 1);    
  node.next = node.next.next;
  // 处理尾节点
  if(index === this._size - 1) {
      this._tail = node;
  }
  this._size--;
};

// MyLinkedList.prototype.out = function() {
//     let cur = this._head;
//     const res = [];
//     while(cur) {
//         res.push(cur.val);
//         cur = cur.next;
//     }
// };
/**
* Your MyLinkedList object will be instantiated and called as such:
* var obj = new MyLinkedList()
* var param_1 = obj.get(index)
* obj.addAtHead(val)
* obj.addAtTail(val)
* obj.addAtIndex(index,val)
* obj.deleteAtIndex(index)
*/

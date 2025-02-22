/*
 * @Author: Hansy hanshunyao_hansy@163.com
 * @Date: 2025-01-19 22:57:48
 * @LastEditors: Hansy hanshunyao_hansy@163.com
 * @LastEditTime: 2025-01-19 22:57:58
 * @FilePath: \leetcode-problemset\24. 两两交换链表中的节点.js
 * @Description: 24. 两两交换链表中的节点
 */
// 给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。
// 示例 1：
// 输入：head = [1,2,3,4]
// 输出：[2,1,4,3]
// 示例 2：
// 输入：head = []
// 输出：[]
// 示例 3：
// 输入：head = [1]
// 输出：[1]
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  let vHead = new ListNode(0, head);
  let cur = vHead;
  while (cur.next !== null && cur.next.next !== null) {
    let temp1 = cur.next;
    let temp2 = cur.next.next.next;
    cur.next = cur.next.next;
    cur.next.next = temp1;
    temp1.next = temp2;
    cur = cur.next.next;
  }
  return vHead.next;
};

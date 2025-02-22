/*
 * @Author: Hansy hanshunyao_hansy@163.com
 * @Date: 2025-01-20 23:03:02
 * @LastEditors: Hansy hanshunyao_hansy@163.com
 * @LastEditTime: 2025-01-20 23:03:08
 * @FilePath: \leetcode-problemset\19. 删除链表的倒数第 N 个结点.js
 * @Description: 19. 删除链表的倒数第 N 个结点
 */
// 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
// 示例 1：
// 输入：head = [1,2,3,4,5], n = 2
// 输出：[1,2,3,5]
// 示例 2：
// 输入：head = [1], n = 1
// 输出：[]
// 示例 3：
// 输入：head = [1,2], n = 1
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let vhead = new ListNode(0, head);
  let fast = vhead;
  let slow = vhead;
  while (n--) {
      fast = fast.next;
  }
  while (fast.next) {
      fast = fast.next;
      slow = slow.next;
  }
  slow.next = slow.next.next
  return vhead.next
};

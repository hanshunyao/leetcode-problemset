/*
 * @Author: Hansy hanshunyao_hansy@163.com
 * @Date: 2025-01-17 19:06:03
 * @LastEditors: Hansy hanshunyao_hansy@163.com
 * @LastEditTime: 2025-01-18 22:45:44
 * @FilePath: \leetcode-problemset\206. 反转链表.js
 * @Description: 206. 反转链表
 */
// 示例 1：
// 输入：head = [1,2,3,4,5]
// 输出：[5,4,3,2,1]
// 示例 2：
// 输入：head = [1,2]
// 输出：[2,1]
// 示例 3：
// 输入：head = []
// 输出：[]
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// 双指针解法
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let cur = head;
  let pre = null;
  while (cur !== null) {
    let temp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = temp;
  }
  return pre;
};

// 递归解法
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function reverse(cur, pre) {
  if (cur === null) return pre;
  let temp = cur.next;
  cur.next = pre;
  pre = cur;
  return reverse(temp, cur)
}
/**
* @param {ListNode} head
* @return {ListNode}
*/
var reverseList = function (head) {
  return reverse(head, null)
};

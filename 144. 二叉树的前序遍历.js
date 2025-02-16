/*
 * @Author: Hansy hanshunyao_hansy@163.com
 * @Date: 2025-02-16 19:41:10
 * @LastEditors: Hansy hanshunyao_hansy@163.com
 * @LastEditTime: 2025-02-16 19:43:25
 * @FilePath: \leetcode-problemset\144. 二叉树的前序遍历.js
 * @Description: 144. 二叉树的前序遍历
 */
// 示例 1：
// 输入：root = [1,null,2,3]
// 输出：[1,2,3]
// 示例 2：
// 输入：root = [1,2,3,4,5,null,8,null,null,6,7,9]
// 输出：[1,2,4,5,6,7,3,8,9]
// 示例 3：
// 输入：root = []
// 输出：[]
// 示例 4：
// 输入：root = [1]
// 输出：[1]
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root, res = []) {
  const stack = [];
  if (root) stack.push(root);
  while (stack.length) {
    const node = stack.pop();
    if (!node) {
      res.push(stack.pop().val);
      continue;
    }
    if (node.right) stack.push(node.right); // 右
    if (node.left) stack.push(node.left); // 左
    stack.push(node); // 中
    stack.push(null);
  }
  return res;
};

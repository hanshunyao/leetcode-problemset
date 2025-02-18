/*
 * @Author: hansy hanshunyao_hansy@163.com
 * @Date: 2025-02-18 19:30:55
 * @LastEditors: hansy hanshunyao_hansy@163.com
 * @LastEditTime: 2025-02-18 19:30:55
 * @FilePath: \leetcode-problemset\94. 二叉树的中序遍历.js
 * @Description: 94. 二叉树的中序遍历
 */
// 给定一个二叉树的根节点 root ，返回 它的 中序 遍历 。
// 示例 1：
// 输入：root = [1,null,2,3]
// 输出：[1,3,2]
// 示例 2：
// 输入：root = []
// 输出：[]
// 示例 3：
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
var inorderTraversal = function (root, res = []) {
  if (!root) return res;
  inorderTraversal(root.left, res);
  res.push(root.val);
  inorderTraversal(root.right, res);
  return res;
};

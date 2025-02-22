/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2025-02-19 18:59:38
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2025-02-19 18:59:39
 * @FilePath: \leetcode-problemset\145. 二叉树的后序遍历.js
 * @Description: 145. 二叉树的后序遍历
 */
// 给你一棵二叉树的根节点 root ，返回其节点值的 后序遍历 。
// 示例 1：
// 输入：root = [1,null,2,3]
// 输出：[3,2,1]
// 解释：
// 示例 2：
// 输入：root = [1,2,3,4,5,null,8,null,null,6,7,9]
// 输出：[4,6,7,5,2,9,8,3,1]
// 解释：
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
var postorderTraversal = function (root, res = []) {
  if (!root) return res;
  postorderTraversal(root.left, res);
  postorderTraversal(root.right, res);
  res.push(root.val);
  return res;
};

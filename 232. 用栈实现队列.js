/*
 * @Author: Hansy hanshunyao_hansy@163.com
 * @Date: 2025-02-08 20:16:23
 * @LastEditors: Hansy hanshunyao_hansy@163.com
 * @LastEditTime: 2025-02-08 20:16:29
 * @FilePath: \leetcode-problemset\232. 用栈实现队列.js
 * @Description: 232. 用栈实现队列
 */
// 请你仅使用两个栈实现先入先出队列。队列应当支持一般队列支持的所有操作（push、pop、peek、empty）：
// 实现 MyQueue 类：
// void push(int x) 将元素 x 推到队列的末尾
// int pop() 从队列的开头移除并返回元素
// int peek() 返回队列开头的元素
// boolean empty() 如果队列为空，返回 true ；否则，返回 false
// 说明：
// 你 只能 使用标准的栈操作 —— 也就是只有 push to top, peek/pop from top, size, 和 is empty 操作是合法的。
// 你所使用的语言也许不支持栈。你可以使用 list 或者 deque（双端队列）来模拟一个栈，只要是标准的栈操作即可。
// 示例 1：
// 输入：
// ["MyQueue", "push", "push", "peek", "pop", "empty"]
// [[], [1], [2], [], [], []]
// 输出：
// [null, null, null, 1, 1, false]
// 解释：
// MyQueue myQueue = new MyQueue();
// myQueue.push(1); // queue is: [1]
// myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
// myQueue.peek(); // return 1
// myQueue.pop(); // return 1, queue is [2]
// myQueue.empty(); // return false

var MyQueue = function () {
  this.inStack = [];
  this.outStack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.inStack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.outStack.length) {
    return this.outStack.pop();
  }
  while (this.inStack.length) {
    const temp = this.inStack.pop();
    this.outStack.push(temp);
  }
  return this.outStack.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  console.log(1111, this);
  const temp = this.pop();

  this.outStack.push(temp);
  return temp;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return !this.inStack.length && !this.outStack.length;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

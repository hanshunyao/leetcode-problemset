/*
 * @Author: Hansy hanshunyao_hansy@163.com
 * @Date: 2025-06-03 23:25:24
 * @LastEditors: Hansy hanshunyao_hansy@163.com
 * @LastEditTime: 2025-06-03 23:25:33
 * @FilePath: \leetcode-problemset\1298-你能从盒子里获得的最大糖果数.js
 * @Description: 1298. 你能从盒子里获得的最大糖果数
 */
// 给你 n 个盒子，每个盒子的格式为 [status, candies, keys, containedBoxes] ，其中：
// 状态字 status[i]：整数，如果 box[i] 是开的，那么是 1 ，否则是 0 。
// 糖果数 candies[i]: 整数，表示 box[i] 中糖果的数目。
// 钥匙 keys[i]：数组，表示你打开 box[i] 后，可以得到一些盒子的钥匙，每个元素分别为该钥匙对应盒子的下标。
// 内含的盒子 containedBoxes[i]：整数，表示放在 box[i] 里的盒子所对应的下标。
// 给你一个 initialBoxes 数组，表示你现在得到的盒子，你可以获得里面的糖果，也可以用盒子里的钥匙打开新的盒子，还可以继续探索从这个盒子里找到的其他盒子。
// 请你按照上述规则，返回可以获得糖果的 最大数目 。
// 示例 1：
// 输入：status = [1,0,1,0], candies = [7,5,4,100], keys = [[],[],[1],[]], containedBoxes = [[1,2],[3],[],[]], initialBoxes = [0]
// 输出：16
// 解释：
// 一开始你有盒子 0 。你将获得它里面的 7 个糖果和盒子 1 和 2。
// 盒子 1 目前状态是关闭的，而且你还没有对应它的钥匙。所以你将会打开盒子 2 ，并得到里面的 4 个糖果和盒子 1 的钥匙。
// 在盒子 1 中，你会获得 5 个糖果和盒子 3 ，但是你没法获得盒子 3 的钥匙所以盒子 3 会保持关闭状态。
// 你总共可以获得的糖果数目 = 7 + 4 + 5 = 16 个。
// 示例 2：
// 输入：status = [1,0,0,0,0,0], candies = [1,1,1,1,1,1], keys = [[1,2,3,4,5],[],[],[],[],[]], containedBoxes = [[1,2,3,4,5],[],[],[],[],[]], initialBoxes = [0]
// 输出：6
// 解释：
// 你一开始拥有盒子 0 。打开它你可以找到盒子 1,2,3,4,5 和它们对应的钥匙。
// 打开这些盒子，你将获得所有盒子的糖果，所以总糖果数为 6 个。
// 示例 3：
// 输入：status = [1,1,1], candies = [100,1,100], keys = [[],[0,2],[]], containedBoxes = [[],[],[]], initialBoxes = [1]
// 输出：1
// 示例 4：
// 输入：status = [1], candies = [100], keys = [[]], containedBoxes = [[]], initialBoxes = []
// 输出：0
// 示例 5：
// 输入：status = [1,1,1], candies = [2,3,2], keys = [[],[],[]], containedBoxes = [[],[],[]], initialBoxes = [2,1,0]
// 输出：7
/**
 * @param {number[]} status
 * @param {number[]} candies
 * @param {number[][]} keys
 * @param {number[][]} containedBoxes
 * @param {number[]} initialBoxes
 * @return {number}
 */
var maxCandies = function (status, candies, keys, containedBoxes, initialBoxes) {
  let ans = 0;
  const hasKey = status; // 把开着的盒子当作有钥匙
  const hasBox = Array(status.length).fill(false);
  for (const x of initialBoxes) {
    hasBox[x] = true;
  }

  function dfs (x) {
    ans += candies[x];
    hasBox[x] = false; // 避免找到钥匙后重新访问开着的盒子

    // 找到钥匙，打开盒子（说明我们先找到盒子，然后找到钥匙）
    for (const y of keys[x]) {
      hasKey[y] = true;
      if (hasBox[y]) {
        dfs(y);
      }
    }

    // 找到盒子，使用钥匙（说明我们先找到钥匙，然后找到盒子）
    for (const y of containedBoxes[x]) {
      hasBox[y] = true;
      if (hasKey[y]) {
        dfs(y);
      }
    }
  }

  for (const x of initialBoxes) {
    if (hasKey[x] && hasBox[x]) { // 注意 dfs 中会修改 hasBox
      dfs(x);
    }
  }
  return ans;
};

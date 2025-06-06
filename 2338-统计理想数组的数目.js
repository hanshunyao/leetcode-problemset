/*
 * @Author: Hansy hanshunyao_hansy@163.com
 * @Date: 2025-04-22 16:22:30
 * @LastEditors: Hansy hanshunyao_hansy@163.com
 * @LastEditTime: 2025-04-22 16:22:58
 * @FilePath: \leetcode-problemset\2338-统计理想数组的数目.js
 * @Description: 2338. 统计理想数组的数目
 */
// 给你两个整数 n 和 maxValue ，用于描述一个 理想数组 。
// 对于下标从 0 开始、长度为 n 的整数数组 arr ，如果满足以下条件，则认为该数组是一个 理想数组 ：
// 每个 arr[i] 都是从 1 到 maxValue 范围内的一个值，其中 0 <= i < n 。
// 每个 arr[i] 都可以被 arr[i - 1] 整除，其中 0 < i < n 。
// 返回长度为 n 的 不同 理想数组的数目。由于答案可能很大，返回对 109 + 7 取余的结果。
// 示例 1：
// 输入：n = 2, maxValue = 5
// 输出：10
// 解释：存在以下理想数组：
// - 以 1 开头的数组（5 个）：[1,1]、[1,2]、[1,3]、[1,4]、[1,5]
// - 以 2 开头的数组（2 个）：[2,2]、[2,4]
// - 以 3 开头的数组（1 个）：[3,3]
// - 以 4 开头的数组（1 个）：[4,4]
// - 以 5 开头的数组（1 个）：[5,5]
// 共计 5 + 2 + 1 + 1 + 1 = 10 个不同理想数组。
// 示例 2：
// 输入：n = 5, maxValue = 3
// 输出：11
// 解释：存在以下理想数组：
// - 以 1 开头的数组（9 个）：
//    - 不含其他不同值（1 个）：[1,1,1,1,1] 
//    - 含一个不同值 2（4 个）：[1,1,1,1,2], [1,1,1,2,2], [1,1,2,2,2], [1,2,2,2,2]
//    - 含一个不同值 3（4 个）：[1,1,1,1,3], [1,1,1,3,3], [1,1,3,3,3], [1,3,3,3,3]
// - 以 2 开头的数组（1 个）：[2,2,2,2,2]
// - 以 3 开头的数组（1 个）：[3,3,3,3,3]
// 共计 9 + 1 + 1 = 11 个不同理想数组。
/**
 * @param {number} n
 * @param {number} maxValue
 * @return {number}
 */
const MOD = 1e9 + 7;
const MAX_N = 10010;
const MAX_P = 15; // 最多有 15 个质因子
const c = Array.from({ length: MAX_N + MAX_P }, () => Array(MAX_P + 1).fill(0));
const sieve = Array(MAX_N).fill(0); // 最小质因子
const ps = Array.from({ length: MAX_N }, () => []); // 质因子个数列表

(function init () {
  for (let i = 2; i < MAX_N; i++) {
    if (sieve[i] === 0) {
      for (let j = i; j < MAX_N; j += i) {
        if (sieve[j] === 0) {
          sieve[j] = i;
        }
      }
    }
  }

  for (let i = 2; i < MAX_N; i++) {
    let x = i;
    while (x > 1) {
      const p = sieve[x];
      let cnt = 0;
      while (x % p === 0) {
        x = Math.floor(x / p);
        cnt++;
      }
      ps[i].push(cnt);
    }
  }

  c[0][0] = 1;
  for (let i = 1; i < MAX_N + MAX_P; i++) {
    c[i][0] = 1;
    for (let j = 1; j <= Math.min(i, MAX_P); j++) {
      c[i][j] = (c[i - 1][j] + c[i - 1][j - 1]) % MOD;
    }
  }
})();

function idealArrays (n, maxValue) {
  let ans = 0n;
  for (let x = 1; x <= maxValue; x++) {
    let mul = 1n;
    for (const p of ps[x]) {
      mul = (mul * BigInt(c[n + p - 1][p])) % BigInt(MOD);
    }
    ans = (ans + mul) % BigInt(MOD);
  }
  return Number(ans);
}

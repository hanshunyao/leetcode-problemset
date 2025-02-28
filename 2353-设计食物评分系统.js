/*
 * @Author: hansy hanshunyao_hansy@163.com
 * @Date: 2025-02-28 21:23:28
 * @LastEditors: hansy hanshunyao_hansy@163.com
 * @LastEditTime: 2025-02-28 21:23:57
 * @FilePath: \leetcode-problemset\2353-设计食物评分系统.js
 * @Description: 2353. 设计食物评分系统
 */
// 设计一个支持下述操作的食物评分系统：
// 修改 系统中列出的某种食物的评分。
// 返回系统中某一类烹饪方式下评分最高的食物。
// 实现 FoodRatings 类：
// FoodRatings(String[] foods, String[] cuisines, int[] ratings) 初始化系统。食物由 foods、cuisines 和 ratings 描述，长度均为 n 。
// foods[i] 是第 i 种食物的名字。
// cuisines[i] 是第 i 种食物的烹饪方式。
// ratings[i] 是第 i 种食物的最初评分。
// void changeRating(String food, int newRating) 修改名字为 food 的食物的评分。
// String highestRated(String cuisine) 返回指定烹饪方式 cuisine 下评分最高的食物的名字。如果存在并列，返回 字典序较小 的名字。
// 注意，字符串 x 的字典序比字符串 y 更小的前提是：x 在字典中出现的位置在 y 之前，也就是说，要么 x 是 y 的前缀，或者在满足 x[i] != y[i] 的第一个位置 i 处，x[i] 在字母表中出现的位置在 y[i] 之前。
// 示例：
// 输入
// ["FoodRatings", "highestRated", "highestRated", "changeRating", "highestRated", "changeRating", "highestRated"]
// [[["kimchi", "miso", "sushi", "moussaka", "ramen", "bulgogi"], ["korean", "japanese", "japanese", "greek", "japanese", "korean"], [9, 12, 8, 15, 14, 7]], ["korean"], ["japanese"], ["sushi", 16], ["japanese"], ["ramen", 16], ["japanese"]]
// 输出
// [null, "kimchi", "ramen", null, "sushi", null, "ramen"]
// 解释
// FoodRatings foodRatings = new FoodRatings(["kimchi", "miso", "sushi", "moussaka", "ramen", "bulgogi"], ["korean", "japanese", "japanese", "greek", "japanese", "korean"], [9, 12, 8, 15, 14, 7]);
// foodRatings.highestRated("korean"); // 返回 "kimchi"
//                                     // "kimchi" 是分数最高的韩式料理，评分为 9 。
// foodRatings.highestRated("japanese"); // 返回 "ramen"
//                                       // "ramen" 是分数最高的日式料理，评分为 14 。
// foodRatings.changeRating("sushi", 16); // "sushi" 现在评分变更为 16 。
// foodRatings.highestRated("japanese"); // 返回 "sushi"
//                                       // "sushi" 是分数最高的日式料理，评分为 16 。
// foodRatings.changeRating("ramen", 16); // "ramen" 现在评分变更为 16 。
// foodRatings.highestRated("japanese"); // 返回 "ramen"
//                                       // "sushi" 和 "ramen" 的评分都是 16 。
//                                       // 但是，"ramen" 的字典序比 "sushi" 更小。
/**
 * @param {string[]} foods
 * @param {string[]} cuisines
 * @param {number[]} ratings
 */
var FoodRatings = function (foods, cuisines, ratings) {
  this.foodArr = foods;
  this.cuisinesArr = cuisines;
  this.ratingsArr = ratings;
  this.cuisinesSet = new Set(cuisines);
  this.cuisinesMap = new Map();
  this.cuisinesSet.forEach((ele) => {
    this.cuisinesMap.set(ele, [0, 0]);
  });
  this.foodArr.forEach((ele, idx) => {
    const typeArr = this.cuisinesMap.get(this.cuisinesArr[idx]);
    if (
      this.ratingsArr[idx] > typeArr[1] ||
      (this.ratingsArr[idx] === typeArr[1] &&
        this.foodArr[idx] < this.foodArr[typeArr[0]])
    ) {
      this.cuisinesMap.set(this.cuisinesArr[idx], [idx, this.ratingsArr[idx]]);
    }
  });
};

/**
 * @param {string} food
 * @param {number} newRating
 * @return {void}
 */
FoodRatings.prototype.changeRating = function (food, newRating) {
  let i = this.foodArr.indexOf(food);
  this.ratingsArr[i] = newRating;

  let cuisine = this.cuisinesArr[i];
  let typeArr = this.cuisinesMap.get(cuisine);
  let maxIdx = typeArr[0];
  let maxRating = typeArr[1];
  if (
    newRating > maxRating ||
    (newRating === maxRating && this.foodArr[i] < this.foodArr[maxIdx])
  ) {
    this.cuisinesMap.set(cuisine, [i, newRating]);
  }

  if (maxIdx === i && newRating < maxRating) {
    typeArr = this.cuisinesMap.get(cuisine);
    maxIdx = -1;
    maxRating = -1;
    this.foodArr.forEach((ele, idx) => {
      if (cuisine === this.cuisinesArr[idx]) {
        if (
          this.ratingsArr[idx] > maxRating ||
          (this.ratingsArr[idx] === maxRating &&
            this.foodArr[idx] < this.foodArr[maxIdx])
        ) {
          this.cuisinesMap.set(this.cuisinesArr[idx], [
            idx,
            this.ratingsArr[idx],
          ]);
          maxIdx = idx;
          maxRating = this.ratingsArr[idx];
        }
      }
    });
  }
};

/**
 * @param {string} cuisine
 * @return {string}
 */
FoodRatings.prototype.highestRated = function (cuisine) {
  const resIdx = this.cuisinesMap.get(cuisine)[0];
  return this.foodArr[resIdx];
};

/**
 * Your FoodRatings object will be instantiated and called as such:
 * var obj = new FoodRatings(foods, cuisines, ratings)
 * obj.changeRating(food,newRating)
 * var param_2 = obj.highestRated(cuisine)
 */

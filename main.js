// You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
// On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of 
//the stock at any time. However, you can buy it then immediately sell it on the same day.
// Find and return the maximum profit you can achieve.

// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
// Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
// Total profit is 4 + 3 = 7.

// Example 2:
// Input: prices = [1,2,3,4,5]
// Output: 4
// Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
// Total profit is 4.

const example = [7, 1, 5, 3, 6, 4]; 
const example2 = [1, 2, 3, 4, 5]; //
////////////first attempt/////////////
// function maxProfit(arr) {
//   let profit = 0;
//   let greatDiff = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] - arr[i] > greatDiff) {
//         console.log([arr[i],arr[j] ]);
//         greatDiff = arr[j] - arr[i];
//       }
//     } profit += greatDiff;
//   }return profit;
// }

// console.log(maxProfit(example));

//////////// second attempt ///////////////
const maximumBrainLevel = (arr) => {
  let answer = 0;
  let profit = [];
  for (let i = 0; i < arr.length; i++) {
    let potential = arr[i + 1] - arr[i];    //This doesn't feel as smart as I think it could be. I'm basically just adding up every possible dollar.
    if (arr[i] < arr[i + 1]) {              //then again, I guess that WAS the challenge. Idk, I just don't feel proud of this one.
      profit.push(potential);             
    }
  }
  profit.forEach((item) => answer += item);
  return answer;
};

console.log(maximumBrainLevel(example));
console.log(maximumBrainLevel(example2));         
/////EDIT: After submitting the solution to leetcode, I feel substantially better about this solution. It was in the top 1% for runtime and top 6% for memory usage. I guess it's more elegant than I thought. I still feel like I've approached this poorly and just stumbled on a great answer.
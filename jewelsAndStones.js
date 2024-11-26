// https://leetcode.com/problems/jewels-and-stones/description/

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */

// Method 1
// var numJewelsInStones = function (jewels, stones) {
//   let counter = 0;
//   for (let jewel of jewels) {
//     for (let stone of stones) {
//       if (jewel == stone) {
//         counter++;
//       }
//     }
//   }
//   console.log(counter);
// };

// Method 2
var numJewelsInStones = function (jewels, stones) {
  let counter = 0;
  for (let stone of stones) {
    if (jewels.indexOf(stone) >= 0) {
      console.log(jewels.indexOf(stone));
      counter++;
    }
  }
  console.log(counter);
};

numJewelsInStones("aA", "aAAbbbb"); // 3
numJewelsInStones("z", "ZZ"); // 0

/*

Method 1 - Two Pointer Approach
Technique
- Use two loops (nested) to check if any jewel is equal any stone
- Use variable counter to increase the number if loop condition is true
- Time complexity = O(n²)
- Space complexity = O(1)


Method 2 - Single Pass Approach
Technique
- Create single loop for stones
- check if index of each stone exists in jewels
- increase counter if condition is true
- Time complexity = O(n)
- Space complexity = O(1)

*/

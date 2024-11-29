// https://leetcode.com/problems/baseball-game/description/

/**
 * @param {string[]} operations
 * @return {number}
 */

var calPoints = function (operations) {
  let scoreStack = [];
  let result = 0;
  for (let i = 0; i < operations.length; i++) {
    // let stackLength = scoreStack.length;
    switch (operations[i]) {
      case "C":
        if (scoreStack.length > 0) {
          result -= scoreStack[scoreStack.length - 1];
          scoreStack.length = scoreStack.length - 1;
        }
        // console.log(operations[i], scoreStack, result);
        break;
      case "D":
        result += scoreStack[scoreStack.length - 1] * 2;
        scoreStack.push(scoreStack[scoreStack.length - 1] * 2);
        // console.log(operations[i], scoreStack, result);
        break;
      case "+":
        scoreStack.push(
          scoreStack[scoreStack.length - 1] + scoreStack[scoreStack.length - 2]
        );
        result += scoreStack[scoreStack.length - 1];
        // console.log(operations[i], scoreStack, result);
        break;
      default:
        scoreStack.push(+operations[i]);
        result += scoreStack[scoreStack.length - 1];
        // console.log(operations[i], scoreStack, result);
        break;
    }
  }
  console.log(scoreStack);
  console.log(result);
};

calPoints(["5", "2", "C", "D", "+"]); // 30
calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]); // 27
calPoints(["1", "C"]); // 0

/*

Method 1 - Using switch statement
Technique
- Create a score stack array to store scores
- Create a result variable to store result
- 
- Time complexity = O(N)
- Space complexity = O(N)

*/

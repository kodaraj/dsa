// https://leetcode.com/problems/add-digits/description/

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  if (num < 10) {
    return num;
  }
  let output = 0;
  for (let n of num.toString()) {
    output += +n;
  }
  if (output >= 10) {
    return addDigits(output);
  } else {
    return output;
  }
};

console.log(addDigits(38)); // 2
console.log(addDigits(0)); // 0

// Follow up: Could you do it without any loop/recursion in O(1) runtime?

/*
Method 1 - Recursion
- If num is already 1 digit return it
- Base Case - if num is less than 10 return num
- Time - O(log n)
- Space - O(log n)
*/

// https://leetcode.com/problems/happy-number/

// In Progress

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  if (n == 2 || n == 3) {
    console.log(false);
    return false;
  }
  let result = 0;
  let hashMap = {};
  while (result !== 1) {
    if (result) n = result;
    result = 0;
    for (let char of n.toString()) {
      result += char ** 2;
    }
    if (hashMap[result]) {
      console.log(false);
      return false;
    } else {
      hashMap[result] = true;
    }
  }
  if (result == 1) {
    console.log(true, result);
    return true;
  } else {
    console.log(false);
    return false;
  }
};

isHappy(19); // true
isHappy(2); // false
isHappy(4); // false

/*

Method 1  - String conversion and using while loop
Technique
- check edge cases
- convert number to string so that we can iterate
- use while loop and check if result = 1
- Time complexity = 
- Space complexity = O(N)


Method 2 - Recursion???
Technique

*/

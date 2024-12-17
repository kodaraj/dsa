// https://leetcode.com/problems/plus-one/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let lastInt = digits.length - 1;
  if (digits[lastInt] !== 9) {
    digits[lastInt]++;
    console.log(digits);
    return digits;
  }
  for (let i = lastInt; i >= 0; i--) {
    if (i == 0 && digits[i] == 9) {
      digits.length = digits.length += 1;
      digits[i] = 1;
      digits[digits.length - 1] = 0;
      console.log(digits);
      return digits;
    }
    if (digits[i] !== 9) {
      digits[i]++;
      console.log(digits);
      return digits;
    }
    digits[i] = 0;
  }
  console.log(digits);
};

plusOne([1, 2, 3]); // [1,2,4]
plusOne([4, 3, 2, 1]); // [4,3,2,2]
plusOne([9]); // [1,0]
plusOne([9, 9]); // [1, 0, 0]
plusOne([1, 9, 9]); // [2,0,0]
plusOne([2, 1, 9, 9]); // [2,2,0,0]

/*

Method 1
- Edge Case- if length - 1 is 9 or if number is 99

*/

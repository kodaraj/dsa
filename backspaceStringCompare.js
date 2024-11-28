// https://leetcode.com/problems/backspace-string-compare/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var backspaceCompare = function (s, t) {
  let stackS = [];
  let stackT = [];
  for (let char of s) {
    if (char != "#") {
      stackS.push(char);
    } else if (stackS.length > 0) {
      stackS.length = stackS.length - 1;
    }
    console.log(stackS);
  }
  for (let char of t) {
    if (char != "#") {
      stackT.push(char);
    } else if (stackT.length > 0) {
      stackT.length = stackT.length - 1;
    }
  }

  console.log(stackS, stackT);
  if (stackS.length !== stackT.length) {
    console.log(false);
    return false;
  }
  for (let i = 0; i < stackS.length; i++) {
    if (stackS[i] !== stackT[i]) {
      console.log(false);
      return false;
    }
  }

  console.log(true);
  return true;
};

backspaceCompare("ab#c", "ad#c"); // true
backspaceCompare("ab##", "c#d#"); // true
backspaceCompare("a#c", "b"); // false
backspaceCompare("#", "#"); // true
backspaceCompare("aaa###a", "aaaa###a"); // false

/*

Method 1 - Using Stack
Technique
- Create stacks of both strings characters
- Pop last element if # appears
- Use loop to check if both stacks have equal values
- Time complexity = O(N)
- Space complexity = O(N)

*/

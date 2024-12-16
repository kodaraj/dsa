// https://leetcode.com/problems/longest-common-prefix/description/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let current = strs[0];
  if (current) {
    for (let i = 0; i < current.length; i++) {
      for (let j = 1; j < strs.length; j++) {
        if (strs[j][i] !== current[i]) {
          current = current.substring(0, i);
          console.log(current);
          return current;
        }
      }
    }
  }
  console.log(current);
  return current;
};

longestCommonPrefix(["flower", "flow", "flight"]); // "fl"
longestCommonPrefix(["abb", "abc"]); // "ab"
longestCommonPrefix(["dog", "racecar", "car"]); // ""
longestCommonPrefix([""]); // ""

/*

Method 1  - Two Pointer

- Time complexity = o(N*M)
- Space complexity = O(1)

*/

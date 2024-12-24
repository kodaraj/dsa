// https://leetcode.com/problems/move-zeroes/description/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let nonZeroPos = 0;
  if (nums.length > 1) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
        [nums[nonZeroPos], nums[i]] = [nums[i], nums[nonZeroPos]];
        nonZeroPos++;
      }
    }
  }
  console.log(nums);
};

moveZeroes([0, 1, 0, 3, 12]);
moveZeroes([0]);

/*

Method 1 - Two Pointer
- Time complexity = O(n)
- Space complexity = O(1)

*/

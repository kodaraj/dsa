// https://leetcode.com/problems/majority-element/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let counter = 0;
  let candidate = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == candidate) {
      counter++;
    } else if (counter == 0) {
      candidate = nums[i];
    } else if (counter > nums.length / 2) {
      console.log(candidate);
      return candidate;
    } else {
      counter--;
    }
  }
  console.log(counter, candidate);
  return candidate;
};

majorityElement([3, 2, 3]);
majorityElement([2, 2, 1, 1, 1, 2, 2]);

/*

Method 1 - Boyer–Moore majority vote algorithm | Beats 100.00%
Technique
- create var counter
- create candidate variable
- Using for loop increase the counter if nums[i] == candidate else reduce counter by 1
- if counter becomes 0 change the candidate to nums[i]
- if counter is more than nums.length / 2 return candidate
- Time complexity = O(N)
- Space complexity = O(1)


Method 2 - Hash Map
Technique
- Time complexity = O(N)
- Space complexity = O(N)

*/

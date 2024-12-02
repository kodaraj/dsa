// https://leetcode.com/problems/contains-duplicate-ii/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// var containsNearbyDuplicate = function (nums, k) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] == nums[j] && Math.abs(i - j) <= k) {
//         console.log(true);
//         return true;
//       }
//     }
//   }
//   console.log(false);
//   return false;
// };

var containsNearbyDuplicate = function (nums, k) {
  let hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    if (hashMap[nums[i]] >= 0 && Math.abs(hashMap[nums[i]] - i) <= k) {
      return true;
    } else {
      hashMap[nums[i]] = i;
    }
  }

  return false;
};

containsNearbyDuplicate([1, 2, 3, 1], 3); // true
containsNearbyDuplicate([1, 0, 1, 1], 1); // true
containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2); // false

/*

Method 1 - 2 Pointer
Technique
- Using 2 nested loops return true if both the conditions are true
- Time complexity = O(n*n)
- Space complexity = O(1)


Method 2 - Hash Map
Technique
- Create hash map, the key will be arr[i] and the value will be i
- if arr[i] is found again calculate difference between indexes of previous occurence and current
- return true if both required conditions are true
- Time complexity = O(n)
- Space complexity = O(n)

*/

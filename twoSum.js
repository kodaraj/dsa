// https://leetcode.com/problems/two-sum/

var twoSum = function (nums, target) {
  // Method 1 (Two Pointer)
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = i + 1; j < nums.length; j++) {
  //     if (nums[i] + nums[j] == target) {
  //       console.log([i, j]);
  //       return [i, j];
  //     }
  //   }
  // }

  // Method 2 (Single Pass)
  let hashTable = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < target) {
      let searchValue = target - nums[i];
      if (searchValue in hashTable) {
        console.log([hashTable[searchValue], i]);
        return [hashTable[searchValue], i];
      } else {
        hashTable[nums[i]] = i;
      }
    }
  }
};

twoSum([2, 7, 11, 15], 9); // Output: [0, 1]
twoSum([3, 2, 4], 6); // Output: [1, 2]
twoSum([2, 3, 4], 6); // Output: [0, 2]
twoSum([3, 3], 6); // Output: [0, 1]
twoSum([2, 5, 5, 11], 10); // Output: [1, 2]

/*

Method 1 (Two Pointer)
Technique:
- Check sum using two pointers
- Return both indexes when condition is true
- Time complexity - O(n2)
- Space complexity - O(1)

Method 2 (Single Pass)
Technique:
- Subtract num from target 
- Find the subtracted result in the hash table
- Return both indexes
- Num should be more than target
- Time complexity - O(n)
- Space complexity - O(n)

*/

// https://leetcode.com/problems/contains-duplicate/

var containsDuplicate = function (nums) {
  // Method 1 - Single Pass using hash table
  let hashTable = {};

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in hashTable) {
      return true;
    } else {
      hashTable[nums[i]] = i;
    }
    console.log(hashTable);
  }
  return false;
};

containsDuplicate([1, 2, 3, 1]); // true
containsDuplicate([1, 2, 3, 4]); // false
containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]); // true

/*

Method 1 - Single Pass using hash table
Technique
- Check if num exists in hash table
- If not push number in hash table
- If yes return true 
- Time complexity = O(n)
- Space complexity = O(n)

*/

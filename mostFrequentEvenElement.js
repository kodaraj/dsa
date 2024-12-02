// https://leetcode.com/problems/most-frequent-even-element/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function (nums) {
  let hashMap = {};
  let output = 0;
  let maxKey;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) {
      hashMap[nums[i]] ? (hashMap[nums[i]] += 1) : (hashMap[nums[i]] = 1);
    }
  }
  for (let key in hashMap) {
    if (hashMap[key] > output) {
      output = hashMap[key];
      maxKey = key;
    }
  }
  if (!output) {
    console.log(-1);
    return -1;
  }
  console.log(hashMap, maxKey);
};

mostFrequentEven([0, 1, 4, 4, 2, 2, 1]); // 2
mostFrequentEven([4, 4, 9, 2, 4]); // 4
mostFrequentEven([29, 47, 21, 41, 13, 37, 25, 7]); // -1;

/*

Method 1 - Hash Map
Technique

- Time complexity = O(N)
- Space complexity = O(N)


*/

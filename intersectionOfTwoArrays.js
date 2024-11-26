// https://leetcode.com/problems/intersection-of-two-arrays/description/

var intersection = function (nums1, nums2) {
  let result = [];
  let freqMap = {};
  for (let i = 0; i < nums1.length; i++) {
    freqMap[nums1[i]] = "unique";
  }
  for (let i = 0; i < nums2.length; i++) {
    if (freqMap[nums2[i]]) {
      console.log(freqMap[nums2[i]]);
      freqMap[nums2[i]] = "common";
    }
  }
  for (let key in freqMap) {
    console.log("key", key);
    if (freqMap[key] == "common") {
      result.push(+key);
    }
  }
  console.log(freqMap);
  console.log(result);
};

intersection([1, 2, 2, 1], [2, 2]); // [2]
intersection([4, 9, 5], [9, 4, 9, 8, 4]); // [9,4] or [4,9]

/*

Method 1 - Using hash table
Technique
Time complexity - O(N + M)
Space complexity - O(N)

*/

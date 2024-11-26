// https://leetcode.com/problems/first-unique-character-in-a-string/

var firstUniqChar = function (s) {
  let freqMap = {};
  for (let char of s) {
    freqMap[char] ? (freqMap[char] += 1) : (freqMap[char] = 1);
  }
  for (let key in freqMap) {
    if (freqMap[key] == 1) {
      console.log(s.indexOf(key));
      return s.indexOf(key);
    }
  }
  console.log(freqMap);
  return -1;
};

firstUniqChar("leetcode"); // 0
firstUniqChar("loveleetcode"); // 2
firstUniqChar("aabb"); // -1

/*

Method 1 - Frequency Map
Technique
- Create freq map to store frequencies of each char
- Loop through freq map object to find first char with 1 occurance
- Return index of that char
- Time complexity = O(N)
- Space complexity = O(1)

*/

// https://leetcode.com/problems/group-anagrams/description/

// In Progress

var groupAnagrams = function (strs) {
  // Function to check if 2 strings are valid anagrams
  function isAnagram(s1, s2) {
    if (s1.length !== s2.length) {
      return false;
    } else {
      let freqMap = {};
      for (let char of s1) {
        freqMap[char] ? (freqMap[char] += 1) : (freqMap[char] = 1);
      }
      for (let char of s2) {
        if (freqMap[char]) freqMap[char] -= 1;
        else return false;
      }
      return true;
    }
  }

  let anagramMap = {};

  for (let i = 0; i < strs.length; i++) {}

  console.log(isAnagram("eat", "tea"));
};

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]); // [["bat"],["nat","tan"],["ate","eat","tea"]]
groupAnagrams([""]); // [[""]]
groupAnagrams(["a"]); // [[["a"]]]

/*

Method 1
Technique
- create a function to check if 2 strings are anagram of each other

- Time complexity = 
- Space complexity = 

*/

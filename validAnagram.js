// https://leetcode.com/problems/valid-anagram/description/

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let sFreq = {};

  for (let char of s) {
    sFreq[char] ? (sFreq[char] += 1) : (sFreq[char] = 1);
  }

  for (let char of t) {
    if (!sFreq[char] || sFreq[char] < 0) {
      return false;
    }
    sFreq[char] -= 1;
  }

  return true;
};

isAnagram("anagram", "nagaram"); // true
isAnagram("rat", "car"); // false
isAnagram("ab", "aa"); // false
isAnagram("", "");
isAnagram("平仮名", "仮平名");

/*

Method 1 - Using frequency hash table
Technique
- create frequency hash table of s characters
- iterate over t characters and reduce counter of each character
- return false if counter gets to -1 or doesn't exist
- else return true
- time complexity O(n)
- space complexity O(n)

*/

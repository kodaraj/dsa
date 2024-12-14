// https://leetcode.com/problems/unique-number-of-occurrences/description/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  let hashMap = {};

  for (let num of arr) {
    hashMap[num] ? (hashMap[num] += 1) : (hashMap[num] = 1);
  }

  let mapValues = Object.values(hashMap);
  let uniqueMapValues = new Set(mapValues);

  console.log(mapValues.length == uniqueMapValues.size);
  return mapValues.length == uniqueMapValues.size;
};

uniqueOccurrences([1, 2, 2, 1, 1, 3]); // true
uniqueOccurrences([1, 2]); // false
uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]); // true

/*

Method 1 - Hash Map & Set


*/

const assertEqual = function(actual, expected) {
  if (actual === expected)
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  else return console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function(str) {
  let result = {};
  for (let val of str) {
    if (result[val]) {
      result[val] += 1;
    } else {
      result[val] = 1;
    }
  }
  return result;
};

module.exports = countLetters;
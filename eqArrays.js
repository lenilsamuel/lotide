const assertEqual = function(actual, expected) {
  if (actual === expected)
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  else return console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
};

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);


function eqArrays(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if(arr1[i] !== arr2[i]) return false;
  }
  return true;
}

assertEqual(eqArrays([3, 3, 1], [3, 5, 1]), true);

console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false
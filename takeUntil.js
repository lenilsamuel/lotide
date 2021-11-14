const takeUntil = function(array, callback) {
  let result = [];
  for (let val of array) {
    if (callback(val)) break;
    result.push(val);
  }
  return result;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const assertArrayEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) console.log("✅✅✅ These arrays are equal");
  else console.log("🔴🔴🔴 These arrays are not equal");
};

assertArrayEqual(results1, [1, 2, 5, 7, 2]);
assertArrayEqual(results2, ["I've", "been", "to", "Hollywood"]);

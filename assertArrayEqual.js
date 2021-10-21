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

assertArrayEqual([1, 2, 3], [1, 2, 3, 4]);

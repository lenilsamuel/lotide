const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const assertArrayEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) console.log("✅✅✅ These arrays are equal");
  else console.log("🔴🔴🔴 These arrays are not equal");
};

const middle = function(arr) {
  let result = [];
  let mid = Math.floor((arr[arr.length - 1] - arr[0]) / 2);
  if (arr.length === 1 || arr.length === 2) return result;
  if (arr.length % 2 !== 0) result.push(arr[mid]);
  else if (arr.length % 2 === 0) {
    result.push(arr[mid]);
    result.push(arr[mid + 1]);
  }
  return result;
};

assertArrayEqual([3], middle([1, 2, 3, 4, 5]));

const flatten = function(arr1) {
  let result = [];
  for (let arr of arr1) {
    if (Array.isArray(arr)) {
      for (let elem of arr) result.push(elem);
    } else {
      result.push(arr);
    }
  }
  return result;
};

const assertArrayEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) console.log("✅✅✅ These arrays are equal");
  else console.log("🔴🔴🔴 These arrays are not equal");
};

function eqArrays(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}
module.exports = flatten;

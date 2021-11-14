const without = function(arr1, arr2) {
  let arr1Obj = {};
  let arr2Obj = {};
  let result = [];
  for (let i = 0; i < arr1.length; i++) arr1Obj[arr1[i]] = arr1[i];
  for (let i = 0; i < arr2.length; i++) arr2Obj[arr2[i]] = arr2[i];
  for (let key in arr1Obj) {
    if (arr1Obj[key] !== arr2Obj[key]) {
      result.push(key);
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
    if(arr1[i] !== arr2[i]) return false;
  }
  return true;
}

without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
assertArrayEqual(without(words, ["lighthouse"]), ["hello", "world", "lighthouse"]);
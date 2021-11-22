const without = function (arr1, arr2) {
  let arr1Obj = {};
  let arr2Obj = {};
  let result = [];
  for (let i = 0; i < arr1.length; i++) arr1Obj[arr1[i]] = arr1[i];
  for (let i = 0; i < arr2.length; i++) arr2Obj[arr2[i]] = arr2[i];
  for (let key in arr1Obj) {
    if (arr1Obj[key] !== arr2Obj[key]) {
      result.push(arr1Obj[key]);
    }
  }
  return result;
};

module.exports = without;

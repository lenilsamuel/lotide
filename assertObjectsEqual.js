const eqArrays = function (arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const eqObjects = function (obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
  for (let key in obj1) {
    if (Array.isArray(obj1[key])) {
      if (!eqArrays(obj1[key], obj2[key])) return false;
    } else if (obj1[key] !== obj2[key]) return false;
  }
  return true;
};

const assertObjectsEqual = function (obj1, obj2) {
  const inspect = require("util").inspect;
  if (eqObjects(obj1, obj2))
    console.log(
      `✅✅✅ Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`
    );
  else console.log(`🔴🔴🔴 Assertion Failed: ${obj1} !== ${obj2}`);
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc);

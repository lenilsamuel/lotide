const findKey = function(obj, callback) {
  for (let key in obj) {
    if (callback(obj[key])) return key;
  }
};

let val = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 2
); // => "noma"

const assertEqual = function(actual, expected) {
  if (actual === expected)
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  else return console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
};

assertEqual(val, "noma");

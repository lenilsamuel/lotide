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

module.exports = flatten;

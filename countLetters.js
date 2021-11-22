const countLetters = function(str) {
  let result = {};
  for (let val of str) {
    if (result[val]) {
      result[val] += 1;
    } else {
      result[val] = 1;
    }
  }
  return result;
};

module.exports = countLetters;
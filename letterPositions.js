const letterPositions = function(str) {
  let result = {};
  for (let i = 0; i < str.length; i++) {
    if (result[str[i]]) {
      result[str[i]].push(i);
    } else {
      result[str[i]] = [i];
    }
    
  }
  return result;
};

module.exports = letterPositions;
const tail = function (arr) {
  let tailArray = [];
  for (let item of arr) {
    tailArray.push(item);
  }
  return tailArray[tailArray.length - 1];
};

module.exports = tail;

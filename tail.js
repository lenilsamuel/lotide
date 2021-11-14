const tail = function (arr) {
  let tailArray = [];
  for (let item of arr) {
    tailArray.push(item);
  }
  tailArray.shift();
  return tailArray;
};

module.exports = tail;

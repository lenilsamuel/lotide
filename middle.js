const middle = function(arr) {
  let result = [];
  let mid = Math.floor([arr.length - 1] / 2);
  console.log(mid);
  if (arr.length === 1 || arr.length === 2) return result;
  if (arr.length % 2 !== 0) result.push(arr[mid]);
  else if (arr.length % 2 === 0) {
    result.push(arr[mid]);
    result.push(arr[mid + 1]);
  }
  return result;
};

module.exports = middle;



const assert = require("chai").assert;
const middle = require("../middle");
describe("#middle()", () => {
  it("should equal [3] for [1, 2, 3, 4, 5]",
    () => {
      assert.deepEqual([3], middle([1, 2, 3, 4, 5]));
    });
  it("should equal [2, 1] for [5, 2, 1, 3]",
    () => {
      assert.deepEqual([2, 1], middle([5, 2, 1, 3]));
    });
});

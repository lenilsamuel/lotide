const assert = require("chai").assert;
const middle = require("../middle");
describe("#middle()", () => {
  it("should equal [3] for [1, 2, 3, 4, 5]",
    () => {
      assert.deepEqual([3], middle([1, 2, 3, 4, 5]));
    });
});

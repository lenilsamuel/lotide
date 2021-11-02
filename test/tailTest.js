const assert = require("chai").assert;
const tail = require("../tail");
const words = ["Yo Yo", "Lighthouse", "Labs"];

describe("#tail()", () => {
  it('should return Labs for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    assert.strictEqual(tail(words), "Labs");
  });
});

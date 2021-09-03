const assert = require("assert");
const nxtPrmFib = require("./fibonacci");

describe("Array", () => {
  describe("fibonacci & prune number", () => {
    it("equals test of some cases", () => {
      assert.equal(nxtPrmFib(1), 2);
      assert.equal(nxtPrmFib(2), 2);
      assert.equal(nxtPrmFib(11), 13);
      assert.equal(nxtPrmFib(20), 89);
      assert.equal(nxtPrmFib(2000), 28657);
      assert.equal(nxtPrmFib(200000), 514229);
      assert.equal(nxtPrmFib(20000000), 433494437);
    });
  });
});

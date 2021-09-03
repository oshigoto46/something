const assert = require("assert");
const nxtPrmFib = require("./fibonacci");
//const nxtPrmFib = require("./fibonacci.old");

describe("fibonacci & prune number for small numbers", () => {
  it("equals test of some cases", () => {
    //assert.equal(nxtPrmFib(1), 2);
    //assert.equal(nxtPrmFib(2), 2);
    assert.equal(nxtPrmFib(3), 5);
    assert.equal(nxtPrmFib(11), 13);
    assert.equal(nxtPrmFib(20), 89);
  });
});

describe("fibonacci & prune number for a bit big numbers", () => {
  it("equals test of some cases", () => {
    assert.equal(nxtPrmFib(2000), 28657);
    assert.equal(nxtPrmFib(200000), 514229);
    assert.equal(nxtPrmFib(20000000), 433494437);
  });
});

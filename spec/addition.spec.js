const assert = require("assert");
const addition = require("../addition");

describe("addition()", function() {
  //Arrange
  let a = 2;
  let b = 3;
  let sum = 5;

  //ACT
  let result = addition(a, b);

  //Assert
  it("it should return 5", function() {
    expect(result).toEqual(sum);
  });
});

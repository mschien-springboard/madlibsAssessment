const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });

  test("it works for positive small numbers", () => {
    expect(addCommas(2)).toBe("2");
    expect(addCommas(13)).toBe("13");
    expect(addCommas(666)).toBe("666");
  });

  test("it works for positive large numbers", () => {
    expect(addCommas(12345)).toBe("12,345");
    expect(addCommas(9876543210)).toBe("9,876,543,210");
    expect(addCommas(999999999)).toBe("999,999,999");
  });

  test("it works for negative numbers", () => {
    expect(addCommas(-1)).toBe("-1");
    expect(addCommas(-10)).toBe("-10");
    expect(addCommas(-666)).toBe("-666");
  });

  test("it works for decimals", () => {
    expect(addCommas(1.234)).toBe("1.234");
    expect(addCommas(8.99999)).toBe("8.99999");
    expect(addCommas(999.99999)).toBe("999.99999");
  });

  test("it works for negative decimals", () => {
    expect(addCommas(-1.234)).toBe("-1.234");
    expect(addCommas(-12.356)).toBe("-12.356");
    expect(addCommas(-3141592.65)).toBe("-3,141,592.65");
  });

});

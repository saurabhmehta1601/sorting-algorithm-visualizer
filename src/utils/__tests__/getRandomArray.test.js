import { getRandomArray, getRandomNumber } from "../exports";

describe("getRandomNumber", () => {
  it("returns a random number between 10 and 20 when passed as arguments", () => {
    const result = getRandomNumber(10, 20);
    expect(result).toBeLessThanOrEqual(20);
    expect(result).toBeGreaterThanOrEqual(10);
  });

  it("returns the same argument when both end points are same", () => {
    const result = getRandomNumber(15, 15);
    expect(result).toBe(15);
  });
});

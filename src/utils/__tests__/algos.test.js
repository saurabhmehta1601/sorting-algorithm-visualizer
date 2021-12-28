import swap from "../swap";
import { getAlgoByName } from "../algos";

describe("swap", () => {
  it("changes array [1,2,3] to [3,2,1] by swap at position 0 and 2", () => {
    const arr = [1, 2, 3];
    swap(arr, 0, 2);
    expect(arr).toMatchObject([3, 2, 1]);
  });

  it("does nothing if indices to be swapped are out of array bounds", () => {
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [1, 2, 3, 4, 5];
    swap(arr1, 0, 5);
    swap(arr2, -1, 2);
    expect(arr1).toMatchObject([1, 2, 3, 4, 5]);
    expect(arr2).toMatchObject([1, 2, 3, 4, 5]);
  });
});

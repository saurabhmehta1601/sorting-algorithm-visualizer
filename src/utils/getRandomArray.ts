import getRandomNumber from "./getRandomNumber";

// both endpoints a and b included
export default function getRandomArray(size: number, a: number, b: number) {
  let arr = [];
  for (let i = 0; i < size; i++) {
    arr.push(getRandomNumber(a, b));
  }
  return arr;
}

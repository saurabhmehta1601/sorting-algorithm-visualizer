// both endpoints a and b included

export default function getRandomNumber(a: number, b: number): number {
  return a + Math.floor(Math.random() * (b - a + 1));
}

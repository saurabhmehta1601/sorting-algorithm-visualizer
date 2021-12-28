//function to swap two numbers in an array
export default function swap(arr: number[], num1: number, num2: number) {
  if (num1 < 0 || num1 >= arr.length || num2 < 0 || num2 >= arr.length) return;
  const temp = arr[num1];
  arr[num1] = arr[num2];
  arr[num2] = temp;
}

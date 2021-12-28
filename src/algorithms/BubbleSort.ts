import { ICurrentIterationResult } from "../utils/algos";
import swap from "../utils/swap";
export default function BubbleSort(inputArr: number[]) {
  const arr = [...inputArr];
  const sortedElementIndexes: number[] = [];

  const initial = {
    iteratingElementIndex: 0,
    swappedElementIndex: -1,
    arrayState: [...inputArr],
    sortedElementIndexes: [...sortedElementIndexes],
  };

  const results = [initial];
  let n = arr.length;
  let i, j;

  //    main sorting logic
  for (i = 0; i < n - 1; i++) {
    let isSorted = true;
    for (j = 0; j < n - i - 1; j++) {
      const currentIterationResult: ICurrentIterationResult = {
        iteratingElementIndex: j,
        swappedElementIndex: -1,
        arrayState: [],
        sortedElementIndexes: [...sortedElementIndexes],
      };
      if (arr[j] > arr[j + 1]) {
        isSorted = false;
        swap(arr, j, j + 1);
        currentIterationResult.swappedElementIndex = j;
      }
      currentIterationResult.arrayState = [...arr];
      results.push(currentIterationResult);
    }
    sortedElementIndexes.push(j);
    if (isSorted) {
      break;
    }
  }

  //    Added extra step manually similar to last step but including all array element index in sorted
  //    indexes since sorting algo is over .
  const sortedIndexes = Array.from(Array(n)).map((_i, idx) => idx);
  results.push({
    ...results[results.length - 1],
    sortedElementIndexes: sortedIndexes,
  });

  return results;
}

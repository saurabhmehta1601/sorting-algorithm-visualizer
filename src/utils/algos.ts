export type algoType = "BubbleSort" | "SelectionSort" | "InsertionSort";
export type algoName = "Bubble Sort" | "Selection Sort" | "Insertion Sort";

interface IAlgo {
  value: algoType;
  name: algoName;
}

export interface ICurrentIterationResult {
  iteratingElementIndex: number;
  swappedElementIndex: number;
  arrayState: number[];
  sortedElementIndexes: number[];
}

const algos: IAlgo[] = [
  { name: "Bubble Sort", value: "BubbleSort" },
  { name: "Selection Sort", value: "SelectionSort" },
  { name: "Insertion Sort", value: "InsertionSort" },
];

export default algos;

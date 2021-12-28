import {
  BubbleSort,
  SelectionSort,
  InsertionSort,
} from "../algorithms/exports";

export default function getAlgoByName(algoName: string) {
  if (algoName === "BubbleSort") {
    return BubbleSort;
  }
  if (algoName === "SelectionSort") {
    return SelectionSort;
  }
  if (algoName === "InsertionSort") {
    return InsertionSort;
  }
  //Default return
  return BubbleSort;
}

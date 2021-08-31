import BubbleSort from "../algorithms/BubbleSort"
import SelectionSort from "../algorithms/SelectionSort"
import InsertionSort from "../algorithms/InsertionSort"

export type algoType  = "BubbleSort" | "SelectionSort" | "InsertionSort"

interface IAlgo {
    value: algoType,
    name: any
}

export interface ICurrentIterationResult  {
    iteratingElementIndex: number,
    swappedElementIndex: number,
    arrayState: number[],
    sortedElementIndexes: number[]
}

const algos : IAlgo[]= [
    {name:"Bubble Sort ", value: "BubbleSort"},
    {name:"Selection Sort ", value: "SelectionSort"},
    {name:"Insertion Sort ", value: "InsertionSort"},
]
 

export const getAlgoByName = (algoName: string ) => {
    if(algoName === "BubbleSort"){
        return BubbleSort
    }
    if(algoName === "SelectionSort"){
        return SelectionSort
    }
    if(algoName === "InsertionSort"){
        return InsertionSort
    }
    
    //Default return 
    return BubbleSort
}

 //function to swap two numbers in an array 
export function swap(arr: number[], num1: number , num2 : number) {
    const temp = arr[num1];
    arr[num1] = arr[num2];
    arr[num2] = temp;
}

export default algos 

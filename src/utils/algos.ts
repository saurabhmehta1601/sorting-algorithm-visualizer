import BubbleSort from "../algorithms/BubbleSort"

export type algoType  = "BubbleSort" | "SelectionSort" | "InsertionSort"

interface IAlgo {
    value: algoType,
    name: any
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
        //return SelectionSort
    }
    if(algoName === "InsertionSort"){
        //return InsertionSort
    }
    
    //Default return 
    return BubbleSort
}


export default algos 

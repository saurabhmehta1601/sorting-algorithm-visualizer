import {ICurrentIterationResult,swap} from "../utils/algos"

export default function InsertionSort(inputArr: number[]){
    
   const sortedElementIndexes: number[] = []

   const initial = {
    iteratingElementIndex: 1,
    swappedElementIndex: -1,
    arrayState: [...inputArr],
    sortedElementIndexes: [...sortedElementIndexes]
   }

   const results= [initial] 
   let n = inputArr.length
   let i: number, j: number

//    main sorting logic
 for (let i = 1; i < n; i++) {
            // Choosing the first element in our unsorted subarray
            let current = inputArr[i];
            // The last element of our sorted subarray
            let j = i-1; 
            while ((j > -1) && (current < inputArr[j])) {
                inputArr[j+1] = inputArr[j];
                const currentIterationResult : ICurrentIterationResult= {iteratingElementIndex: j+1,swappedElementIndex: j,arrayState:[...inputArr], sortedElementIndexes: [...sortedElementIndexes]}
                results.push(currentIterationResult)
                j--;
            }
            sortedElementIndexes.push(j+1)
            results[results.length - 1].sortedElementIndexes = [...sortedElementIndexes]
            inputArr[j+1] = current;
        }

//    Added extra step manually similar to last step but including all array element index in sorted
//    indexes since sorting algo is over .
    const sortedIndexes =  Array.from(Array(n)).map((_i,idx) => idx)
    results.push({...results[results.length - 1], sortedElementIndexes: sortedIndexes})

    return results
}


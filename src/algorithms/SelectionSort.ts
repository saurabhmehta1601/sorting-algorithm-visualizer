 //function to swap two numbers in an array 
function swap(arr: number[], num1: number , num2 : number) {
    const temp = arr[num1];
    arr[num1] = arr[num2];
    arr[num2] = temp;
}

interface ICurrentIterationResult  {
    iteratingElementIndex: number,
    swappedElementIndex: number,
    arrayState: number[],
    sortedElementIndexes: number[]
}

export default function SelectionSort(inputArr: number[]){
    
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

for( i = 0; i < n; i++) {
        // Finding the smallest number in the subarray
        let min = i;
        for( j = i+1; j < n; j++){
           const currentIterationResult : ICurrentIterationResult= {iteratingElementIndex: j,swappedElementIndex: -1,arrayState: [], sortedElementIndexes: [...sortedElementIndexes]}
            if(inputArr[j] < inputArr[min]) {
                min=j; 
            }
            currentIterationResult.arrayState = [...inputArr]
            results.push(currentIterationResult)
         }
         if (min != i) {
             // Swapping the elements
             swap(inputArr,i,min)
             results[results.length - 1].swappedElementIndex = min
        }
        sortedElementIndexes.push(i)
        results[results.length -1].sortedElementIndexes = [...sortedElementIndexes]
    }





//    Added extra step manually similar to last step but including all array element index in sorted
//    indexes since sorting algo is over .
    const sortedIndexes =  Array.from(Array(n)).map((_i,idx) => idx)
    results.push({...results[results.length - 1], sortedElementIndexes: sortedIndexes})

    return results
}

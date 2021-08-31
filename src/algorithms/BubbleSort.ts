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

export default function BubbleSort(inputArr: number[]){
    
   const arr = [...inputArr]
   const sortedElementIndexes: number[] = []

   const initial = {
    iteratingElementIndex: 0,
    swappedElementIndex: -1,
    arrayState: [...inputArr],
    sortedElementIndexes: [...sortedElementIndexes]
   }

   const results= [initial] 
   let n = arr.length
   let i, j

   for(i = 0; i< n-1 ;i++){
       let isSorted = true 
       for(j= 0; j< n-i-1 ; j++){

           const currentIterationResult : ICurrentIterationResult= {iteratingElementIndex: j,swappedElementIndex: -1,arrayState: [], sortedElementIndexes: [...sortedElementIndexes]}
           if(arr[j] > arr[j+1]){
              isSorted = false 
              swap(arr,j,j+1)  
              currentIterationResult.swappedElementIndex = j 
           }
           currentIterationResult.arrayState = [...arr]
          results.push(currentIterationResult)
       }
       sortedElementIndexes.push(j)
       if(isSorted){
           break
       }
   }


//    Added extra step manually similar to last step but including all array element index in sorted
//    indexes since sorting algo is over .
    const sortedIndexes =  Array.from(Array(n)).map((_i,idx) => idx)
    results.push({...results[results.length - 1], sortedElementIndexes: sortedIndexes})

    return results
}

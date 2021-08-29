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

   const results= [] 
   const sortedElementIndexes: number[] = []
   let n = arr.length
   let i, j

   for(i = 0; i< n-1 ;i++){
       let isSorted = true 
       for(j= 0; j< n-i-1 ; j++){

           const currentIterationResult : ICurrentIterationResult= {iteratingElementIndex: j,swappedElementIndex: -1,arrayState: [], sortedElementIndexes: [...sortedElementIndexes]}
           if(arr[j] > arr[j+1]){
              isSorted = false 
              swap(arr,j,j+1)  
              currentIterationResult.swappedElementIndex = j + 1 
           }
           currentIterationResult.arrayState = [...arr]
          results.push(currentIterationResult)
       }
       sortedElementIndexes.push(j)
       if(isSorted){
            // Since no swap in iteration all elements are sorted so inserting an extra array state similar to last one but with
           // all elements as sorted
           
           const sortedIndexes =  Array.from(Array(n)).map((_i,idx) => idx)
            results.push({...results[results.length - 1], sortedElementIndexes: sortedIndexes})
           break
       }
   }
    return results
}

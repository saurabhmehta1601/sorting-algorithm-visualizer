 //function to swap two numbers in an array 
function swap(arr: number[], num1: number , num2 : number) {
    const temp = arr[num1];
    arr[num1] = arr[num2];
    arr[num2] = temp;
}

interface ICurrentIterationResult  {
    iteratingElementIndex: number,
    swappedElementIndex: number,
    arrayState: number[]
}

export default function BubbleSort(inputArr: number[]){
    
    const arr = [...inputArr]

   const results= [] 
   let n = arr.length

   for(let i = 0; i< n-1 ;i++){
       let isSorted = true 
       for(let j= 0; j< n-i-1 ; j++){

           const currentIterationResult : ICurrentIterationResult= {iteratingElementIndex: j,swappedElementIndex: -1,arrayState: []}
           if(arr[j] > arr[j+1]){
              isSorted = false 
              swap(arr,j,j+1)  
              currentIterationResult.swappedElementIndex = j + 1
           }
           currentIterationResult.arrayState = arr
          results.push(currentIterationResult)
       }
       if(isSorted){
           break
       }
   }
    return results
}

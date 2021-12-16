// both endpoints a and b included
export const  getRandomNumber = (a:number,b:number) : number => a + Math.floor(Math.random() * (b- a + 1))


export const getRandomArray = (size:number , a:number , b : number) =>{
    let arr = []
    for(let i =0 ; i < size ; i++){
        arr.push(getRandomNumber(a,b))
    } 
    return arr
}
const sortArr = [1,3,2,4,56, 7, 876, 34512, 3434, 567, 32, 1, 50, 456, 10101010, 3, 5,23, 14, 64, 2,5, 67, 435 ,2, 65, 435, 234 ,25, 345, 56]
let arr = []
const random = (x) =>{
    for (let i = 0; i < x; i++){
        arr.push(Math.floor(Math.random()*100))
    }
}
let count = 0
//quick sort
function quickSort (arr){
    if(arr.length < 2){
        return arr 
    }
    const pivotIndex = Math.floor(arr.length/2);
    const pivot = arr[pivotIndex]
    console.log('this is the pivot: ' , pivot)

    const myLeft = []
    
    const myRight =[]
    

    for(let i = 0; i< arr.length; i++){
        if(i !== pivotIndex){
            count ++
            console.log('this is the i in the loop: ', count)
            console.log('i !== pivotIndex: ', pivotIndex)
            arr[i] < pivot ? myLeft.push(arr[i]): myRight.push(arr[i])
            console.log('arr[i]: ', arr[i])
            console.log('pivot: ', pivot)
            console.log('this is myLeft: ', myLeft)
            console.log('this is myRight: ', myRight)
            console.log('')
        }
    }
    return [...quickSort(myLeft),pivot,...quickSort(myRight)]
}

random(20)
console.log(arr)
console.log(quickSort(arr))
const sortArr = [12, 3434, 567, 32, 1, 50, 456, 10101010]
const originalArr = sortArr
const bubbleSort = (arr) =>{
    for(let i =0; i < arr.length; i++){
        // console.log('item in this iteration of the loop', arr[i])
        for (let j = 0 ; j < arr.length -1 ; j++){
            if (arr[j] > arr[j+1]){
                // console.log('item in the second loop', arr[j])
                console.log('temp: ', arr[j])
                console.log('compare: ', arr[j +1])
                const temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}
// bubbleSort(sortArr)
console.log("original array: ", originalArr)
console.log("result of bubbleSort: ", bubbleSort(sortArr))

// O(n**2) - QUADRATIC RUNTIME



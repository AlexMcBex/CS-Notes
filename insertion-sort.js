const sortArr = [12, 3434, 567, 32, 1, 50, 456, 10101010]
   //insertion sort
   function insertionSort(arr){
    console.log('original array: ', arr)
    for(let i = 1; i < arr.length; i++){

        console.log()
      let currentNum = arr[i]
      console.log('currentNum: ', currentNum)
      let j = i - 1
      while(currentNum < arr[j]){
        const checkValue = arr[j];
        console.log('checkValue: ', checkValue)
        arr[j] = currentNum;
        console.log('arr[j+1] before swap: ', arr[j + 1])
        arr[j + 1] = checkValue;
        console.log('arr[j+1] after swap: ', checkValue)
        j--;
      }
    }
    return arr
  }
  console.log(insertionSort(sortArr))
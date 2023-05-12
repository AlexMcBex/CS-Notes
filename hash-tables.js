// problem solving techniques
//frequency counter
const fc = (val)=>{
    return val.split('').reduce((acc, item, indx)=>{
        acc[item] ? acc[item] +=1 : acc[item] = 1
        return acc
    }, {}
    )
} //O(N)

const isAnagram = (str1, str2) =>{
    const map1 = fc(str1) //O(N)
    const map2 = fc(str2) //O(N)
    for (let key in map1)
    if (map1[key] !== map2[key]) { //O(N)
        return false
    }
    return true
}


// O(3N) ===>> O(N)
/////////////////////////////

//HashTable (or HashSet) - the key is a hash of the value that's being stored.

//Great for remembering things! O(1) contains and lookups
const HashTable = function() {
    let count = 0;
    let store = [];
  
    const createHash = function(val) {
      //do not do this!
      return val.toString();
    };
    
    const add = function(val) {
      count++;
      //create the hash
      const idx = createHash(val);
      store[idx] = val;
    };
    const contains = function(val) {
      const idx = createHash(val);
      return store[idx] !== undefined;
    };
    const remove = function(key) {
      count--;
      const idx = createHash(key);
      delete store[idx];
    }
    return {
      add: add,
      remove: remove,
      count: count,
      contains: contains
    }
  }
  
  const hash = new HashTable();
  hash.add(1);
  hash.add(2);
  console.log(hash.contains(2));
  console.log(hash)
  
  
  
  
  
  function search(array, val) {
  
    let min = 0;
    let max = array.length - 1;
  
    while (min <= max) {
      let middle = Math.floor((min + max) / 2);
      if (array[middle] < val) {
        console.log(`min was ${min}`)
        min = middle + 1;
        console.log(`min is now ${min}`)
        console.log(min, max)
      }
      else if (array[middle] > val) {
        console.log(`max was ${max}`)
        max = middle - 1;
        console.log(`max is now ${max}`)
        console.log(min, max)
      }
      else {
        return middle;
      }
    }
  
    return -1;
  }
  
  search([1, 2, 3, 4, 5, 6], 4) // 3
  search([1, 2, 3, 4, 5, 6], 6) // 5
  search([1, 2, 3, 4, 5, 6], 11) // -1
  ////////////////////
  //SORTING

  
  
  
  //bubble sort
  function bubbleSort(arr) {
    // Implement bubblesort
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < (arr.length - i - 1); j++) {
        if (arr[j] > arr[j+1]) {
          const lesser = arr[j+1];
          arr[j+1] = arr[j];
          arr[j] = lesser;
        }
      }
    }
  
    // return the sorted array
    return arr;
  }
  

  
  //selection sort
  function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      let indexOfMin = i;
  
      for (let j = i+1; j <arr.length; j++) {
        if (arr[j] < arr[indexOfMin]) {
          indexOfMin = j;
        }
      }
  
      if (indexOfMin !== i) {
        let lesser = arr[indexOfMin];
        arr[indexOfMin] = arr[i];
        arr[i] = lesser;
      }
    }
  
    return arr;
  }
  
  
 
  //selection sort
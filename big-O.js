//O(1) - constant runtime
//same runtime despite the size of input
function constantRuntime(x) {
    var result = x * 2;
    return result;
}

//O(N) - linear runtime
//more size of input - more runtime proportionally
function linearRuntime(n) {
for (let i = 0; i < n; i++) {
    console.log(i); // This operation runs n-times
}
}

//O(n^2) - quadratic runtime
//slow runtime, more size of input, more increase of runtime
function quadraticRuntime(n) {
for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
    console.log(i * j); // This operation runs n^2 times
    }
}
}

//O(log(n)) - logarithmic runtime
//FAST the bigger the input the less the runtime
function binarySearch(arr, search) {
    var min = 0;
    var max = arr.length - 1;
    var index;
    var elem;
  
    while (min <= max) {
      index = Math.floor((min + max) / 2);
      elem = arr[index];
  
      if (elem < search) {
        min = index + 1;
      }
      else if (elem > search) {
        max = index - 1;
      }
      else {
        return index;
      }
    }
  
    return -1;
  }
  

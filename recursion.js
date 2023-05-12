// const frequencyCounter = (val) =>{
//     return val.split('').reduce((acc, item, index)=>{
//      acc[item] ? acc[item]+= 1 : acc[item]=1
//      return acc
//      }, {})
// }
// // console.log(frequencyCounter('arthur'))

// const isAnagram = (str1, str2) =>{
//     return frequencyCounter(str1.toLowerCase()) === frequencyCounter(str2.toLowerCase())
// }
// console.log(isAnagram('race', 'care'))

const findTarget = (target, value = 0) => {
    console.log(value)
    if(target <= value){
    return  console.log('I have reached the end')   
    }
    return findTarget(target, value + 1) 
  }
findTarget(10, 1)
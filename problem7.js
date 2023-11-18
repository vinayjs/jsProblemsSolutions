// Given an array of positive numbers and a positive number 'k',
// find the maximum sum of any contigous subarray of size 'k'.

// Input : [2, 1, 5, 1, 3, 2] , k = 3
// Output : 9
// Explanation: Subarray with maximum sum is [5, 1, 3]


const maxSub = (arr, k) => {
    let result = 0;
    let windowStart = 0;
    let windowSum = 0;

    for (let i = 0; i < arr.length; i++) {
        windowSum += arr[i]
        if (i >= k-1) {
            result = Math.max(windowSum, result)
            windowSum -= arr[windowStart];
            windowStart += 1
        }
    }
    return result;
}

// console.log(maxSub([2, 1, 5, 1, 3, 2], 3))


let input = 'dbc'
let check = 'bcd'

const checkInput = (x, y) => {
  let str = x.split('');
  let checker = y.split('');
  let strArray =[];
  let checkerArray=[]
  for (let i =0; i <= x.length -1; i++) {
    for (let j = 0; j <= checker.length-1; j++){
        // console.log(str[i], 'str')
        // console.log(checker[j], 'chec')
        if ( checker[j] === x[i] ){
            checkerArray.push(checker.splice(j, 1))
            strArray.push(str.splice(i, 1))      
        } 
        if (i !== 0 && i > 0) i-= 1;
    }
    console.log(checkerArray, 'checkerarray')
    console.log('strarray', strArray)
  }
//   return strArray
}

console.log(checkInput(input, check))


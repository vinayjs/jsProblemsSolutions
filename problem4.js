// Given an array , find the average of each subarray of 'k' contigous elements in it.

// Array:[1, 3, 2, 6, -1, 4, 1, 8, 2], K= 5

const avg = (arr, k) => {
    let leng = arr.length
    output = []
    windowSum = 0;
    windowStart = 0;
    for(let i = 0; i < leng; i++){
        windowSum += arr[i]
        if(i >= k-1) {
            output.push(windowSum / k);
            windowSum -= arr[windowStart];
            windowStart += 1;
        }
    }
    return output;
}

console.log(avg([1, 3, 2, 6, -1, 4, 1, 8, 2], 5))
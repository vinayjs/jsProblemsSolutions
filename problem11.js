// given an array, return an array giving the sum of the elements in the array with respect to the given target.
// input = [1,2,3,4,5,6],  target = 3
// output = [ 6, 9, 12, 15 ]

const slide = (arr, k) => {
    let sumWindow = 0;
    let sub = [];
    start = 0;
    for(let i = 0; i < arr.length; i++){
        sumWindow += arr[i];
        if( i >= k -1){
            sub.push(sumWindow);
            sumWindow -= arr[start];
            start += 1;
        }
    }
    return sub;
}

console.log(slide([1,2,3,4,5,6], 3))
// Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

// Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.

// Input: [1, 2, 3, 4, 6], target=6
// Output: [1, 3]
// Explanation: The numbers at index 1 and 3 add up to 6: 2+4=6


const solution = (arr, k) => {
    let start = 0,
        end = arr.length -1;
    while (start < end) {
        const currentSum = arr[start] + arr[end]
        if (currentSum == k) return [start, end]
        else if (currentSum > k) {
            end -= 1
        }
        else start += 1
    }
    return [start, end]
}

console.log(solution([1, 2, 3, 4, 6], 6))
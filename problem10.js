// Given a sorted array,
// create a new array containing squares of all the numbers of the input array in the sorted order.

// Input: [-2, -1, 0, 2, 3]
// Output: [0, 1, 4, 4, 9]

const makeSquares = (arr) => {
  const n = arr.length;
  squares = Array(n).fill(0);
  let highestSquareIndex = n - 1;
  let left = 0;
  let right = n - 1;
  while (left < right) {
    let leftSquare = arr[left] * arr[left];
    let rightSquare = arr[right] * arr[right];
    if (leftSquare > rightSquare) {
      squares[highestSquareIndex] = leftSquare;
      left += 1;
    } else {
      squares[highestSquareIndex] = rightSquare;
      right -= 1;
    }
    highestSquareIndex -= 1;
  }
  return squares;
};
console.log(makeSquares([-2, -1, 0, 2, 3]));
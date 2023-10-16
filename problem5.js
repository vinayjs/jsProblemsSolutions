// remove duplicate elements from an Array.

const arr = [1, 2, 3, 4, 'banana', 2, 5, 6, 'banana', 3]


const uniqueElements = arr.filter((element, index) => {
    return arr.indexOf(element) === index
});

console.log (uniqueElements);

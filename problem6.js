//Reverse a string with and without inbuild methods.


// reverse a string with methods.

const str = 'string'

const reverse = (input) => {
    return input.split('').reverse().join('')
}

console.log(reverse(str))


// reverse without method 

const reverseWithoutMethod = (x) => {
    let reversedString = ''
    for (let i = x.length -1; i >= 0; i--) {
        reversedString += x[i]
    }
    return reversedString
}

console.log(reverseWithoutMethod(str))

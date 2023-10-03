// Question- 2

// check whether the given string is palindrome or not?


const isPalindrome = (str) => {
    const output = str.split('').reverse().join('')
    return output === str ? 'Number is Plaindrome' : 'Number is not palindrome'
}

console.log(isPalindrome('aba'))
console.log(isPalindrome('abc'))
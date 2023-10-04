// Question- 2

// check whether the given string is palindrome or not?


const isPalindrome = (str) => {
    const output = str.split('').reverse().join('')
    return output === str ? 'The given string is Palindrome' : 'The given string is not palindrome'
}

console.log(isPalindrome('aba'))
console.log(isPalindrome('abc'))
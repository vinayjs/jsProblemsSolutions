// find whether the given number is an amstrong number or not.

//153 => 1*1*1 + 5*5*5 + 3*3*3 = 153 ; THE NUMBER IS AN AMSTRONG NUMBER.


const amstrongNum = (input)=>{
    let num = input
    let output = 0
    let length = ('' + input).length
    for (let i = 0; i < length; i++){
        let eachDigit = num%10;
        output += eachDigit**length;
        num = parseInt(num/10)
    }
    return  output === input ? 'Number is an amstrong number':'Number is not an amstrong number'
}

console.log(amstrongNum(371))
console.log(amstrongNum(153))
console.log(amstrongNum(23))

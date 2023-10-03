// Question-1

// There is one line of input with the string .

// Output Format

// First, print each vowel in  on a new line (in the same order as they appeared in ) and followed by consonants in their respective order.


const vowelsAndConsonants = (s) =>  {
    let consonantChar = []
    let vowelCharc = []
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let y = s.split('')
    for (let i=0; i < y.length; i++){
        if (vowels.includes(y[i])){
            vowelCharc.push(y[i])
        }
        else {
            consonantChar.push(y[i])
        }
    }
    vowelCharc.forEach((x)=>console.log(x))
    consonantChar.forEach((y)=> console.log(y))
}

vowelsAndConsonants('bcqaei')

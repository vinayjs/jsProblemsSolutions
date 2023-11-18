// print the fibonacci series for the given count 'k'.


// 0, 1, 1, 2, 3, 5, 8


const fib = (k) => {
    let firstNum = 0;
    let secondNum = 1;
    console.log(firstNum)
    console.log(secondNum)
    for (let i = 2; i <= k; i++){
        let nextNum = firstNum + secondNum;
        console.log(nextNum)
        firstNum = secondNum;
        secondNum = nextNum
    }
}

fib(7);
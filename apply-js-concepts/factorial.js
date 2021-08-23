// factorial using for loop
/*
var factorial = 1;
for(var i = 1; i <= 7; i++) {
    console.log(i);
    factorial = factorial * i;
}
console.log(factorial);
*/

// function for factorial

function findFactorial(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++){
        factorial = factorial * i;
        
    }return factorial;
}

let myFactNum = 4;
let factResult = findFactorial(myFactNum);
console.log(factResult);
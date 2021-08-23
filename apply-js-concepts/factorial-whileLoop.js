// function getFactorial(number) {
//     let factorial = 1;
//     let i = 1;
//     while (i <= number) {
//         factorial = factorial * i;
//         i++;
//     }
//     return factorial;
// }
// let factNum = 4;
// let factResult = getFactorial(factNum);
// console.log(factResult);

// reverse way 
function getFactorial(number) {
    let factorial = 1;
    let i = number;
    while (i >= 1) {
        factorial = factorial * i;
        i--;
    }
    return factorial;
}
let factNum = 4;
// let factResult = getFactorial(factNum);
// console.log(factResult);
console.log(getFactorial(factNum));
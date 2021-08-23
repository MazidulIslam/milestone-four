// product = 1;
// for (let i = 5; i >= 1; i--){
//     product = product * i;
// }
// console.log(product);

function factorial(fact) {
    if (fact == 1) {
        return 1;
    }
    return fact * factorial(fact - 1);
}
console.log(factorial(6));
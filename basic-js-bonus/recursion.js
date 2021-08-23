// let sum = 0;
// for (let i = 1; i <= 6; i++){
//     sum = sum + i;
// }
// console.log(sum);

// let sum = 0;
// for (let i = 6; i >= 1; i--){
//     sum = sum + i;
// }
// console.log(sum);

function sum(i) {
    if (i == 1) {
        return 1;
    }
    return sum(i - 1) + i; //recursion call sum() function into same function
}
console.log(sum(6));

function sum2(n) {
    if (n == 1) {
        return 1;
    }
    return sum2(n - 1) + n;
}







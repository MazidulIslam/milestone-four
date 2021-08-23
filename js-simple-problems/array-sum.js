// const number = [44, 45, 43, 22, 55, 66];
// let sum = 0;
// for (let i = 0; i < number.length; i++){
//     const element = number[i];
//     sum = sum + element;
//     console.log(element);
// }


function arraySum(number) {
    let sum = 0;
    for (let i = 0; i < number.length; i++){
        const element = number[i];
        sum = sum + element;
    }
    return sum;
}
const total = arraySum([23,56,87,89]);
console.log(total);
// const number = 5;
// const reminder = number % 2;
// console.log(reminder ==0);

// const number = 145;
function isEven(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}
function isOdd(number) {
    if (number % 2 != 0) {
        return true;
    }
    return false;
}
const myNumber = 1641;
const isMyNumberEven = isEven(myNumber);
console.log(isMyNumberEven);
const isMyNumberOdd = isOdd(myNumber);
console.log(isMyNumberOdd);
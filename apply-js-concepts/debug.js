function getFactorial(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++){
        factorial = factorial * i;
    }
    return factorial
}
const getMyFactorial = getFactorial(5);
console.log(getMyFactorial);
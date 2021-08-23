// n! = n * (n-1)!
function factorialRecursive(n) {
    if (n == 1) {
        return 1;
    }
    return n * factorialRecursive(n - 1);
}
// const myFactorial = factorialRecursive(5);
// console.log(myFactorial);
console.log(factorialRecursive(5));
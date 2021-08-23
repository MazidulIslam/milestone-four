function fibonacci(n) {
    const fibo = [0, 1];
    if (n < 2) {
        return 'Please enter a positive number greater than 2.'
    }
    if (typeof n == 'number') {
            for (let i = 2; i <= n; i++){
            // nth = (n-1)th + (n-2)th
            fibo[i] = fibo[i - 1] + fibo[i - 2];
        }
    }
    else {
        return 'Please enter a valid number.'
    }
    
    
    return fibo;
}
const fiboSeries = fibonacci(2);
console.log(fiboSeries);

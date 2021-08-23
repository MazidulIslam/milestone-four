var eggPrice = '30.33';
// console.log(eggPrice);
var breadPrice = '35.54';
// console.log(breadPrice);
var eggPriceNumber = parseInt(eggPrice);
// console.log(eggPriceNumber);

var breadPriceNumber = parseFloat(breadPrice);
// console.log(breadPriceNumber);
// console.log(eggPriceNumber + breadPriceNumber);

console.log(typeof eggPrice, typeof eggPriceNumber);
var today = new Date();
console.log(today);
var firstNumber = 0.1;
var secondNumber = 0.2;
var total = firstNumber + secondNumber;
// console.log(parseFloat(total.toFixed(20)));
total = total.toFixed(1);
console.log(total); //will print in string
total = parseFloat(total);
console.log(total); // will print number

var mangoes = 7;
var hungryPerson = 2;
var dividingResult = mangoes / hungryPerson;
console.log(dividingResult);
var remaining = mangoes % hungryPerson;
console.log(remaining);
console.log(17 % 5);
function lowestElement(numbers) {
    let lowest = numbers[0];
    for (let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if (element < lowest) {
            lowest = element;
        }
    } return lowest;
}
const ages = [22, 11, 23, 34, 43, 24, 53];
const younger = lowestElement(ages);
console.log(younger);
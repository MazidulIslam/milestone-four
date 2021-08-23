function findLargest(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if (element > largest) {
            largest = element;
        }
    } return largest;
}
const larger = findLargest([43, 23, 24, 46, 76, 85]);
const larger2 = findLargest([-4, -5, -2, -17]);
console.log(larger);
console.log(larger2);
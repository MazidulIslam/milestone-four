// function largestElement(number) {
//     let max = number[0];
//     for (let i = 0; i < number.length; i++){
//         const element = number[i];
//         if (element > max) {
//             max = element;
//         }
//     } return max;
// }

// const maxNumber = largestElement([22, 21, 23, 44, 54, 34]);
// console.log('max is = ', maxNumber);

function lowestElement(number) {
    let minNum = number[0];
    for (let i = 0; i < number.length; i++){
        const element = number[i];
        if (element < minNum) {
            minNum = element;
        }
    } return minNum;
}

const minNumber = lowestElement([22, 21, 23, 44, 54, 34]);
console.log('max is = ', minNumber);

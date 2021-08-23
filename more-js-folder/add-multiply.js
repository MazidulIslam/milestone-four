// function add(num1, num2) {
//     const sum = num1 + num2;
//     return sum;
// }
// const firstTotal = add(63, 67);
// console.log(firstTotal);
// const secondTotal = add(633, 67);
// console.log(secondTotal);


function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWoodQuantity = chairQuantity * perChairWood;
    const tableWoodQuantity = tableQuantity * perTableWood;
    const bedWoodQuantity = bedQuantity * perBedWood;
    const totalWood = chairWoodQuantity + bedWoodQuantity + tableWoodQuantity;
    return totalWood;
}
const firstOption = woodCalculator(10, 10, 10);
console.log('total wood needed for this is : ', firstOption);
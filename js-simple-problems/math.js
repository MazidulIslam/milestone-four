// const myNumber = -5;
// const output = Math.abs(myNumber);
const myNumber = 2.62384;
const outputFloor = Math.floor(myNumber);
const outputCeiling = Math.ceil(myNumber);
const outputRound = Math.round(myNumber);

const outputRandom = Math.random() * 6;
const outputRandomRound = Math.round(outputRandom);
console.log(outputFloor, outputCeiling, outputRound, outputRandomRound);

for (let i = 0; i <= 30; i++) {
    const outputRandom = Math.random() * 6;
    const outputRandomRound = Math.ceil(outputRandom);
    console.log(outputRandomRound);
}
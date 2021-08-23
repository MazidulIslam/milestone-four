function animalCount(miles) {
    const firstTenMileAnimal = 10;
    const secondTenMileAnimal = 50;
    if (miles <= 10) {
        const count = miles * firstTenMileAnimal;
        return count;
    }
    else if (miles <= 20) {
        const first10 = 10 * firstTenMileAnimal;
        const second10 = miles - 10;
        const second10Count = second10 * secondTenMileAnimal;
        const totalAnimals = first10 + second10Count;
        return totalAnimals;
    }
    else {
        const first10 = 10 * firstTenMileAnimal;
        const second10Count = 10 * secondTenMileAnimal;
        const restMiles = miles - 20;
        const restCount = restMiles * 70;
        const totalAnimalsCount = first10 + second10Count + restCount;
        return totalAnimalsCount;
    }
}
const animals = animalCount(102);
console.log(animals);
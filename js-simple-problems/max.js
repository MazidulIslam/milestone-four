const business = 450;
const minister = 350;
const army = 600;

// if (business > minister) {
//     console.log('Business person er pola is bigger');
// }
// else {
//     console.log('Minister er pola is bigger')
// }

// if (business > minister && business > army) {
//     console.log('Business person er pola is bigger');
// }
// else if (minister > business && minister > army) {
//     console.log('MInister person er pola is bigger');
// }
// else {
//     console.log('army er pola is bigger')
// }

// var max = Math.max(business, minister, army);
// console.log('largest is :', max);

function findLargest(first, second, third) {
    if (first > second && first>third) {
        return first;
    }
    else if (second > first && second > third) {
        return second;
    }
    else {
        return third;
    }
}
const larger = findLargest(124, 242, 453);
console.log(larger);

function findSmallest(first, second, third) {
    if (first < second && first < third) {
        return first;
    }
    else if (second < first && second < third) {
        return second;
    }
    else {
        return third;
    }
}
const smaller = findSmallest(124, 242, 453);
console.log(smaller);
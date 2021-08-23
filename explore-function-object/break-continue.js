// var i = 0;
// while (i < 15) {
//     console.log(i);
//     if (i == 5) {
//         break;
//     }
//     i++;
// }
// for (i = 0; i <= 20; i++){
//     console.log(i);
//     if (i == 8) {
//         break;
//     }
// }

var numbers = [32, 33, 34, 35, 36, 37, 41, 42, 44];
// for (var j = 0; j < numbers.length; j++){
//     var number = numbers[j];
//     console.log(number);
//     if (number > 90) {
//         break
//     }
// }

for (var j = 0; j < numbers.length; j++){
    var number = numbers[j];
    if (number < 37) {
        continue;
    }
    console.log(number);
}
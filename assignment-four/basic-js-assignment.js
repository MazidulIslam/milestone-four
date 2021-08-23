/***********************************************
 * Prblem No. 1
 * Seer To Mon Conversion Function
 ***********************************************/
function seerToMon(seer) {
    if (typeof (seer) != 'number') {
        return 'You can not take input other than number';
    }
    if (seer >= 0) {
        const totalSeer = seer;
        const mon = totalSeer / 40;
        return mon;
    }
    else {
        return 'Please enter a positive number';
    }
}
const totalMon = seerToMon('-120');
// console.log(totalMon);





/***********************************************
 * Prblem No. 2
 * Total sales calculation Function
 ***********************************************/
function totalSales(shirt, pant, shoe) {
    // validating the number is positive or not
    if (shirt < 0 || pant < 0 || shoe < 0) {
        return 'Please enter a positive value';
    }
    // Declaration of product prices
    const shirtPrice = 100;
    const pantPrice = 200;
    const shoePrice = 500;
    //product quantity parameter stores into variable
    const shirtQuantity = shirt;
    const pantQuantity = pant;
    const shoeQuantity = shoe;
    //calculation
    const totalShirtPrice = shirtPrice * shirtQuantity;
    const totalPantPrice = pantPrice * pantQuantity;
    const totalShoePrice = shoePrice * shoeQuantity;
    const totalSalesAmount = totalShirtPrice + totalPantPrice + totalShoePrice;
    //returning the total sales amount
    return totalSalesAmount;
}
const totalAmount = totalSales(1, 2, -2);
// console.log(totalAmount);





/***********************************************
 * Prblem No. 3
 * Total Delivery Cost Calculation Function
 ***********************************************/
function deliveryCost(quantity) {
    // Checking the input value is valid or not
    if (quantity < 0) {
        return 'Please enter a positive number';
    }
    const productQuantity = quantity;
    // Delivery Charge variations declare.
    const firstHundredDeliveryCharge = 100;
    const seconHundredDeliveryCharge = 80;
    const aboveTwoHundredDeliverycharge = 50;
    // Checking the quantity is bellow 100 or not and calculate cost.
    if (productQuantity <= 100) {
        const firstHundredTotal = productQuantity * firstHundredDeliveryCharge;
        return firstHundredTotal;
    }
    // Checking the quantity is bellow 200 or not and calculate cost.
    else if (productQuantity <= 200) {
        const firstHundredCost = 100 * firstHundredDeliveryCharge;
        const secondHundredProducts = productQuantity - 100;
        const secondHundredDeliveryCost = secondHundredProducts * seconHundredDeliveryCharge;
        const secondHundredTotal = secondHundredDeliveryCost + firstHundredCost;
        return secondHundredTotal;
    }
    // Checking the quantity is above 200 or not and calculate costs.
    else {
        const firstHundredCost = 100 * firstHundredDeliveryCharge;
        const secondHundredDeliveryCost = 100 * seconHundredDeliveryCharge;
        const restProducts = productQuantity - 200;
        const restProductsDeliveryCost = restProducts * aboveTwoHundredDeliverycharge;
        const restTotal = restProductsDeliveryCost + secondHundredDeliveryCost + firstHundredCost;
        return restTotal;
    }
}
const totalDeliveryCost = deliveryCost(10);
// console.log(totalDeliveryCost);




/***********************************************
* Prblem No. 4
* Find First Friend with only 5 characters Function
***********************************************/
function perfectFriend(names) {
    let perfectName = '';
    if (typeof (names) != 'string') {
        return 'Please enter a valid name';
    }
    for (const fName of names) {
        if (fName.length == 5) {
            perfectName = fName;
            break;
        }
        else {
            return ' There is no 5 character name.'
        }
    } return perfectName;
}
const friendsName = ['Ashraf', 23234, 'Sagor', 'Raihan', 'Rabbi', 'Zahid'];
const perfectFriendName = perfectFriend(friendsName);
console.log(perfectFriendName);

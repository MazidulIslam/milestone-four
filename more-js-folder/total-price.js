const products = [
    { name: 'laptop', price: 3422 },
    { name: 'shirt', price: 433 },
    { name: 'watch', price: 445 },
    {name: 'phone',price: 89009}
];

let totalPrice = 0;
for (const product of products) {
    totalPrice = totalPrice + product.price;
}
// console.log(totalPrice);

const cart = [
    { name: 'laptop', price: 3422 , quantity: 1},
    { name: 'shirt', price: 433 , quantity: 1},
    { name: 'watch', price: 445 , quantity: 1},
    {name: 'phone',price: 89009, quantity: 2}
];

let cartTotal = 0;
for (const product of cart) {
    const productTotal = product.price * product.quantity;
    cartTotal = cartTotal + productTotal;
}
console.log(cartTotal);
const products = [
    { name: 'samsung s3 phone', price: 12000 },
    { name: 'asus laptop d34', price: 22000 },
    { name: 'apple smart watch', price: 32000 },
    { name: 'lg phone', price: 18000 },
    { name: 'huawei mobile phone', price: 100 },
    { name: 'goal', price: 1000 },
    { name: 'goal', price: 11000 }
];

// for (const product of products) {
//     if (product.price < 10000) {
//         break;
//     }
//     console.log(product);
// }

for (const product of products) {
    if (product.price < 10000) {
        continue;
    }
    console.log(product);
}
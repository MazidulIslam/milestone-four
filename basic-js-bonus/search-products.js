const products = [
    {name: 'samsung s3 phone', price: 12000},
    {name: 'asus laptop d34', price: 22000},
    {name: 'apple smart watch', price: 32000},
    {name: 'lg phone', price: 18000},
    {name: 'huawei mobile phone', price: 100},
    {name: 'goal', price: 1000},
]

function searchProducts(products, searchString) {
    const matched = [];
    for (const product of products) {
        // const name = product.name;
        if (product.name.indexOf(searchString) != -1) {
            // console.log(product.name);
            matched.push(product);
        }
    } return matched;
}
const matched = searchProducts(products, 'phone');
console.log(matched);


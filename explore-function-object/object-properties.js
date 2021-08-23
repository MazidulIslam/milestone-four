var laptop = {
    price: 'free from varsity',
    storage: '500gb',
    ram: '4gb',
    ssd: '128gb',
    procesor: 'intel core i3'
}
console.log(laptop.price);
//putting lapto.price into variable laptopPrice.
var laptopPrice = laptop.price;
console.log(laptopPrice);

//set a object property value
laptop.price = 12000;

laptopPrice = laptop.price;
console.log(laptopPrice);
laptop['price'] = 13000;
laptopPrice = laptop['price'];
console.log(laptopPrice);
var propertyName = 'price';
laptop[propertyName] = 15000;
laptopPrice = laptop[propertyName];
console.log(laptopPrice);
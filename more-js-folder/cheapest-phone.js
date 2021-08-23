//array of object
const phones = [
    {
        name: 'Samsung s9',
        price: 124500,
        camera: 12,
        Storage: 32
    },
    {
        name: 'Walton',
        price: 70932,
        camera: 12,
        Storage: 32
    },
    {
        name: 'Xiaomi',
        price: 9000,
        camera: 12,
        Storage: 32
    },
    {
        name: 'HTC',
        price: 14500,
        camera: 12,
        Storage: 32
    },
    {
        name: 'Nokia',
        price: 54300,
        camera: 12,
        Storage: 32
    },
];

let chepeast = phones[0];
for (const phone of phones) { //easiest way to count length of array
    // console.log(phone);
    if (phone.price < chepeast.price) {
        chepeast = phone;
    }
}
console.log(chepeast);